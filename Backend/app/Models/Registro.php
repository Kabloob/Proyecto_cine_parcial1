<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    use HasFactory;
    protected $table = 'Registro'; // Especifica el nombre de la tabla
    // Agrega los campos que pueden ser asignados masivamente
    protected $fillable = ['nombre','apellido','correo', 'password','cedula','telefono'];


}
