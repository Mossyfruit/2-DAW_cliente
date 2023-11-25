<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// GRABANDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'grabar') {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $consulta = "INSERT INTO `datos` (`nombre`, `edad`) VALUES ('$nombre', '$edad')";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}
// BORRANDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'borrar') {
    $nombre = $_POST['nombre'];
    $consulta = "DELETE FROM `datos` WHERE nombre='$nombre'";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}
// LEYENDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'leer') {
    $consulta = "SELECT * FROM `datos`";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    while ($fila = mysqli_fetch_array($registros)) {
        array_push($datos, $fila);
    }
    echo json_encode($datos);
}
//ACTUALIZAMOS
if (isset($_POST['operacion']) && $_POST['operacion'] == 'actualizar') {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $consulta = "UPDATE`datos` SET edad='$edad' WHERE nombre='$nombre'";//Sentencia UPDATE comun SQL
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}

mysqli_close($conexion);
?>