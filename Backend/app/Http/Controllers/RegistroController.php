<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registro;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistroController extends Controller
{
    public function store(Request $request)
    {
        // Validar los datos del formulario
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'correo' => 'required|email|unique:Registro', // Verifica que 'correo' sea único
            'password' => 'required|min:6',
            'cedula' => 'required|string|max:20',
            'telefono' => 'required|string|max:15',
        ]);

        // Si la validación falla, devolver errores en formato JSON
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400); // Código 400 para errores de validación
        }

        // Crear el registro en la base de datos
        try {
            Registro::create([
                'nombre' => $request->nombre,
                'apellido' => $request->apellido,
                'correo' => $request->correo,
                'password' => Hash::make($request->password),
                'cedula' => $request->cedula,
                'telefono' => $request->telefono,
            ]);

            // Devolver respuesta exitosa
            return response()->json([
                'message' => 'Registro creado correctamente',
            ], 201); // Código 201 para creación exitosa

        } catch (\Exception $e) {
            // Manejar errores inesperados
            return response()->json([
                'message' => 'Error al crear el registro',
                'error' => $e->getMessage(),
            ], 500); // Código 500 para errores del servidor
        }
    }
}
