<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegistroController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/


// Ruta GET para mostrar el formulario de registro (sin protección JWT)
Route::get('/registro', function () {
    return view('registro'); // archivo de vista "registro.blade.php"
})->name('registro.form');

// Ruta POST para procesar el formulario de registro (sin protección JWT)
Route::post('/registro', [RegistroController::class, 'store'])->name('registro.store');

// Ruta GET para mostrar el formulario de login (sin protección JWT)
Route::get('/login', function () {
    return view('login');
})->name('login.form');

// Ruta POST para procesar el login (sin protección JWT)
Route::post('/login', [AuthController::class, 'login'])->name('login');

// Rutas protegidas con jwt.auth (requieren autenticación con token JWT)
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/home', function () {
        return view('home');
    });
});