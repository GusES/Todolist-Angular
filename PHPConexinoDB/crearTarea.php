<?php 
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
$params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
$conexion = conexion(); // CREA LA CONEXION
// REALIZA LA QUERY A LA DB
$insertar = mysqli_query($conexion, "INSERT INTO tareas (titulo, estado) VALUES ('$params->title', 0)");
$consulta = mysqli_query($conexion, "SELECT * FROM tareas WHERE titulo = '$params->title' AND estado = 0");
$consulta->num_rows > 0 ? $mensaje='ok':$mensaje='fail';
mysqli_close($conexion);
header('Content-Type: application/json');
echo json_encode($mensaje); // MUESTRA EL JSON GENERADO