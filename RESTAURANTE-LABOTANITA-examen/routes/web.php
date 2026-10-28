<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Torta;

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

Route::get('/tortas', function () {
    $tortas = Torta::all();
    return view('tortas', compact('tortas'));
});

Route::get('/tortas/nuevo', function () {
    return view('tortas');
});

Route::post('/tortas/nuevo', function (Request $request) {
    $datos = $request->validate([
        'sabor' => ['required', 'string'],
        'precio' => ['required', 'integer'],
    ], [
        'sabor.required' => 'Indica el sabor de la torta.',
        'precio.required' => 'Indica el precio de la torta.',
        'precio.integer' => 'El precio va en digitos, sin centavos.',
    ]);

    Torta::create($datos);

    return redirect('/tortas');
});