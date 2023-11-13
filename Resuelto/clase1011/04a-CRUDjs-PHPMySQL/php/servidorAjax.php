<?php

define("HOSTNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "DATOS"); // utf8_spanish2_ci

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

// ESTOY LEYENDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'leer') {
    $consulta = "SELECT * FROM `valores`";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    while ($fila = mysqli_fetch_array($registros)) { // transforma el resultado de la consulta en un json
        array_push($datos, $fila);
    }
    echo json_encode($datos);
}

// ESTOY GRABANDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'grabar') {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $consulta = "INSERT INTO `datos` (`nombre`, `edad`) VALUES ('$nombre', '$edad')";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}

// ESTOY BORRANDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'borrar') {
    $valor = $_POST["datos"];
    $consulta = "DELETE FROM `datos` WHERE nombre='$nombre'";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}

mysqli_close($conexion);
?>