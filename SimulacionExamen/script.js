function validarFormulario(){
    //Obtenemos los datos del formulario
    const nombre=document.getElementById("nombre").value;
    const correo=document.getElementById("correo").value;
    const fechaNacimiento=document.getElementById("fechaNacimiento").value
    const celular=document.getElementById("celular");


    alert(`Nombre: ${nombre} <br> Fecha de Nacimiento: ${fechaNacimiento}`)
}