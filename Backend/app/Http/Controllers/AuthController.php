<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Cambiado a User porque es el modelo de autenticación
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validar las credenciales ingresadas
        $request->validate([
            'correo' => 'required|email',
            'password' => 'required',
        ]);

        // Obtener las credenciales del formulario
        $credentials = $request->only('correo', 'password');

        try {
            // Intentar autenticar al usuario utilizando las credenciales
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Credenciales incorrectas'], 401);
            }
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'No se pudo crear el token'], 500);
        }

        // Retornar el token si la autenticación es exitosa
        return response()->json([
            'message' => 'Sesión iniciada con éxito',
            'token' => $token,
        ]);
    }
}
