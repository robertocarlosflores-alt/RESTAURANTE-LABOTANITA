<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');

});

Route::view('/inicio', 'inicio')->name('inicio');


Route::post('/contacto', function (Request $request) {
    $datos = $request->validate([
        'nombre' => ['required', 'string', 'max:100'],
        'correo' => ['required', 'email', 'max:150'],
        'mensaje' => ['required', 'string', 'max:2000'],
    ]);

    return response()->view('contacto-enviado', compact('datos'));
})->name('contacto.procesar');



