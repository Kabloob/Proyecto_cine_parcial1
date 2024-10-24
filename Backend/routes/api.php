<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

use App\Http\Controllers\RegistroController;
use App\Http\Controllers\AuthController;

Route::post('/registro', [RegistroController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/wasb', function (){
    return 'Hola';
});

//ruta que permita almacenar datos en la BD
Route::post('/Ricardo', function(){
    return 'Datos guardados ';
});


Route::get('/registro/{cedula}', function (){
    return 'la cedula de jennifer';
});

Route::delete('/eliminar/{cedula}', function (){
    return 'cedula eliminada';
});

Route::put('/actualizar/{cedula}', function (){
    return 'cedula actualizada';
});


