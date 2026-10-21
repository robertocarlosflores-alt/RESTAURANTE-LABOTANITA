<?php

$nombre = $_POST["nombre"] ?? "";
$correo = $_POST["correo"] ?? "";
$pedido = $_POST["pedido"] ?? "";

echo "<h1>Pedido recibido en Salteneria El Horno</h1>";

echo "<p>Nombre: " . htmlspecialchars($nombre) . "</p>";
echo "<p>Correo: " . htmlspecialchars($correo) . "</p>";
echo "<p>Pedido: " . htmlspecialchars($pedido) . "</p>";

$carta = [
    "Saltena de pollo - Bs 6",
    "Docena de saltenas - Bs 65",
    "Refresco de mocochinchi - Bs 5"
];

echo "<h2>Nuestra carta</h2>";
echo "<ul>";

foreach ($carta as $producto) {
    echo "<li>" . htmlspecialchars($producto) . "</li>";
}

echo "</ul>";

echo "<p>Te atiende Roberto Carlos</p>";

?>