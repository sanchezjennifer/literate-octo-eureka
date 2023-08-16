<?php
    session_start();
    include_once("../../config/DBConect.php");
    include_once("../../config/Config.php");

    if(isset($_POST['nombres']))        $nombres = $_POST['nombres']; 
    if(isset($_POST['id']))             $id = $_POST['id']; 
    if(isset($_POST['apellidos']))      $apellidos = $_POST['apellidos']; 
    if(isset($_POST['email']))          $email = $_POST['email']; 
    if(isset($_POST['telefono']))       $telefono = $_POST['telefono']; 
    if(isset($_POST['identificacion']))       $identificacion = $_POST['identificacion']; 
    if(isset($_POST['direccion']))       $telefono = $_POST['direccion']; 
    if(isset($_POST['barrio']))       $telefono = $_POST['barrio']; 
    if(isset($_POST['acudiente']))       $telefono = $_POST['acudiente']; 

    $conexion = new Database;  
    $result = $conexion->updateEstudiante($id,$nombres,$apellidos,$email,$telefono,$identificacion,$direccion,$barrio,$acudiente);

    header("Location: ".ROOT."modulos/estudiantes/estudiantes.php?mensaje=".$result);

?>