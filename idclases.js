const botonesAgregar=document.querySelectorAll('.agregar-carrito');
const contadorAgregados=document.getElementById('contador');

let contador=0;
botonesAgregar.forEach((boton)=>
{
    boton.addEventListener('click',()=>{
        contador++;
        contadorAgregados.textContent=contador;
    });
});
