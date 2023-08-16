<?php
    session_start();
    include_once("../../config/DBConect.php");
    include_once("../../config/Config.php");

    if(isset($_POST['nombre']))     $nombre = $_POST['nombre']; 
    if(isset($_POST['id']))         $id = $_POST['id']; 
    if(isset($_POST['horarios']))         $id = $_POST['horarios']; 
    if(isset($_POST['docente']))         $id = $_POST['docente']; 
    if(isset($_POST['temas']))         $id = $_POST['temas']; 

    $conexion = new Database;  
    $result = $conexion->updateMateria($nombre,$id,$horarios,$docente;$temas);

    header("Location: ".ROOT."modulos/materias/materias.php?mensaje=".$result);

?>