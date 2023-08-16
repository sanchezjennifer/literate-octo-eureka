<?php
    session_start();
    include_once("../../config/DBConect.php");
    include_once("../../config/Config.php");    

    if(isset($_POST['nombre']))      $nombre = $_POST['nombre']; 
    if(isset($_POST['horario']))      $nombre = $_POST['horarios']; 
    if(isset($_POST['docente']))      $nombre = $_POST['docente']; 
    if(isset($_POST['temas']))      $nombre = $_POST['temas']; 


    $conexion = new Database;  
    $result = $conexion->CrearMateria($nombre);
    $result = $conexion->CrearMateria($horarios);
    $result = $conexion->CrearMateria($docente);
    $result = $conexion->CrearMateria($temas);

    header("Location: ".ROOT."modulos/materias/materias.php?mensaje=".$result);

?>