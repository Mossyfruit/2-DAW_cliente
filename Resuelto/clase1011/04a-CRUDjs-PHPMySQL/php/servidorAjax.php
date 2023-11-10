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
    $valor1 = $_POST['valor1'];
    $valor2 = $_POST['valor2'];
    $consulta = "INSERT INTO `valores` (`valor1`, `valor2`) VALUES ('$valor1', '$valor2')";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}

// ESTOY BORRANDO
if (isset($_POST['operacion']) && $_POST['operacion'] == 'borrar') {
    $valor = $_POST["valor"];
    $consulta = "DELETE FROM `valores` WHERE valor1='$valor'";
    $registros = mysqli_query($conexion, $consulta) or die(mysqli_error($conexion));

    $datos = [];
    echo json_encode($datos);
}

mysqli_close($conexion);
?>