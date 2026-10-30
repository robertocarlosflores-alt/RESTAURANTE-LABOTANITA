<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Torta;

Route::get('/', function () {
    return redirect()->route('inicio');
});

Route::view('/inicio', 'inicio')->name('inicio');

Route::view('/formulario', 'formulario')->name('formulario');

Route::post('/contacto', function (Request $request) {

    $datos = $request->validate([
        'nombre_completo' => ['required', 'string', 'max:100'],
        'correo' => ['required', 'email', 'max:150'],
        'mensaje' => ['required', 'string', 'max:2000'],
    ]);

    DB::table('contactos')->insert([
        'nombre_completo' => $datos['nombre_completo'],
        'correo' => $datos['correo'],
        'mensaje' => $datos['mensaje'],
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return redirect()
        ->route('formulario')
        ->with('success', '¡Tu formulario se guardó correctamente!');

})->name('contacto.guardar');

Route::get('/lista', function () {

    $registros = DB::table('contactos')
        ->orderByDesc('id')
        ->get();

    return view('lista', compact('registros'));

})->name('lista');


/* MOSTRAR FORMULARIO Y LISTA DE TORTAS */

Route::get('/tortas', function () {

    $tortas = Torta::all();

    return view('tortas', compact('tortas'));

})->name('tortas');


/* REGISTRAR UNA TORTA */

Route::post('/tortas/nuevo', function (Request $request) {

    $datos = $request->validate([
        'sabor' => ['required', 'string', 'max:255'],
        'precio' => ['required', 'integer', 'min:1'],
        'stock' => ['required', 'integer', 'min:0'],
    ]);

    Torta::create($datos);

    return redirect()
        ->route('tortas')
        ->with('success', '¡Torta registrada correctamente!');

})->name('tortas.guardar');