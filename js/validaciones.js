function ValidarRegistro() {

    let username   = document.getElementById('emailregis').value
    let password   = document.getElementById('passwregis').value
    let nombres    = document.getElementById('nombres').value
    let apellidos  = document.getElementById('apellidos').value
    let confir     = document.getElementById('confirpassword').value
    let identificacion = document.getElementById('identificacion').value

    let mensajes = ''
if (password!=confir)  mensajes += '<li> Las contraseñas no son iguales </li>'
    if (username=='')  mensajes += '<li> Debes agregar un correo electronico </li>'
    if (password=='')  mensajes += '<li> Debes agregar una contraseña </li>'
    if (nombres=='')  mensajes += '<li> Debes agregar tus nombres </li>'
    if (apellidos=='')  mensajes += '<li> Debes agregar tus apellidos </li>'
    if (confir=='')  mensajes += '<li> Debes confirmar la contraseña </li>'
if (identificacion=='')  mensajes += '<li> Debes agregar la identificacion </li>'  

    if(mensajes != ''){
       document.getElementById('mensaje').innerHTML = `<div class='alert alert-danger' role='alert'> ${ mensajes } </div>`
    }else{
       document.forregistro.submit()
    }
    
    
}

function ValidarEstudiantes() {
    let identificacion  = document.getElementById('identificacion').value
    let nombres         = document.getElementById('nombres').value
    let apellidos       = document.getElementById('apellidos').value
    let email           = document.getElementById('email').value
    let telefono        = document.getElementById('telefono').value
    let direccion        = document.getElementById('direccion').value
    let barrio        = document.getElementById('barrio').value
    let acudiente        = document.getElementById('acudiente').value

    let mensajes=''
    
    if(telefono=='')    mensajes +='<li>Debes agregar un numero de telefono</li>'
    if(email=='')       mensajes +='<li>Debes agregar un correo electronico</li>'
    if(nombres=='')     mensajes +='<li>Debes agregar tus nombres</li>'
    if(apellidos=='')   mensajes +='<li>Debes agregar tus apellidos</li>'
    if(identificacion=='')      mensajes +='<li>Debes agregar una identificacion</li>'
    if(direccion=='')      mensajes +='<li>Debes agregar la direccion</li>'
    if(barrio=='')      mensajes +='<li>Debes agregar nombre del barrio</li>'
    if(acudiente=='')      mensajes +='<li>Debes agregar nombre del acudiente</li>'


    if(mensajes!=''){
        document.getElementById('mensaje').innerHTML = `<div class='alert alert-danger' role='alert'> ${mensajes} </div>`
    }else{
        document.forestudiantes.submit()
    }
    
}

function ValidarMaterias() {
    let nombre    = document.getElementById('nombre').value
    let horarios    = document.getElementById('horarios').value
    let docente    = document.getElementById('docentes').value
    let temas    = document.getElementById('temas').value
    let mensajes=''
    
    if(nombre=='')   mensajes +='<li>Debes ingresar nombre de la materia</li>'

    if(mensajes!=''){
        document.getElementById('mensaje').innerHTML = `<div class='alert alert-danger' role='alert'> ${mensajes} </div>`
    }else{
        document.formateria.submit()
    }
    
}