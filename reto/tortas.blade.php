<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pastelería La Espiga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
            background: #fff8f0;
        }

        h1, h2 {
            color: #8b4513;
        }

        form {
            margin-bottom: 30px;
        }

        input {
            padding: 8px;
            margin: 8px 0;
            width: 250px;
        }

        button {
            padding: 10px 18px;
            background: #8b4513;
            color: white;
            border: none;
            cursor: pointer;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }

        th {
            background: #8b4513;
            color: white;
        }
    </style>
</head>
<body>

    <h1>Pastelería La Espiga</h1>

    <h2>Registrar una torta</h2>

    <form action="{{ route('tortas.guardar') }}" method="POST">
        @csrf

        <label for="sabor">Sabor:</label><br>
        <input type="text" id="sabor" name="sabor"
               value="{{ old('sabor') }}" required>
        @error('sabor')
            <p>{{ $message }}</p>
        @enderror

        <br>

        <label for="precio">Precio:</label><br>
        <input type="number" id="precio" name="precio"
               value="{{ old('precio') }}" min="1" required>
        @error('precio')
            <p>{{ $message }}</p>
        @enderror

        <br>

        <label for="stock">Stock:</label><br>
        <input type="number" id="stock" name="stock"
               value="{{ old('stock', 0) }}" min="0" required>
        @error('stock')
            <p>{{ $message }}</p>
        @enderror

        <br><br>

        <button type="submit">Guardar torta</button>
    </form>

    <hr>

    <h2>Lista de tortas registradas</h2>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Sabor</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>

        <tbody>
            @forelse ($tortas as $torta)
                <tr>
                    <td>{{ $torta->id }}</td>
                    <td>{{ $torta->sabor }}</td>
                    <td>{{ $torta->precio }}</td>
                    <td>{{ $torta->stock }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="4">Todavía no hay tortas registradas.</td>
                </tr>
            @endforelse
        </tbody>
    </table>

</body>
</html>