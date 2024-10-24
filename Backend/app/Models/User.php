<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Especificar la tabla que usa este modelo.
     *
     * @var string
     */
    protected $table = 'Registro';  // Cambia 'users' a 'registro'

    /**
     * Los atributos que son asignables en masa.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'apellido',
        'correo',        // Campo para el correo electrónico
        'password',      // Campo para la contraseña
        'cedula', 
        'telefono',   // Campo para el color del carro
    ];

    /**
     * Los atributos que deben estar ocultos para la serialización.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',      // Oculta la contraseña
        'remember_token',
    ];

    /**
     * Los atributos que deben ser casteados a tipos nativos.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',  // Asegura que la contraseña esté cifrada
    ];
}