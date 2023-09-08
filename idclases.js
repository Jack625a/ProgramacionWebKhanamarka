const botonesAgregar=document.querySelectorAll('.agregar-carrito');
const listacarrito=document.getElementById('lista-carrito')
const contadorAgregados=document.getElementById('contador');
const totalHTMl=document.getElementById('total');


//let totalPagar=0;
let contador=0;
//Crear la lista del carrito
const carrito=[];

botonesAgregar.forEach((boton,index)=>
{
    boton.addEventListener('click',()=>{
        contador++;
        const cantidadInput=boton.previousElementSibling;
        const cantidad=parseInt(cantidadInput.value);
        if(!isNaN (cantidad)&& cantidad>0){
            const nombre=boton.dataset.nombre;
            const precio=boton.dataset.precio;
            const producto={
                nombre:nombre,
                precio:precio,
                cantidad:cantidad
            };
            carrito.push(producto);
                
            contador+=cantidad;
            contadorAgregados.textContent=contador;
        }
         mostrarcarrito();
    }); 
});

//Funcion para mostrar el carrito
function mostrarcarrito(){
    listacarrito.innerHTML='';
    //Variable para controlar el total
    let totalPagar=0;

    carrito.forEach((producto,index)=>
    {
        const elementoLista=document.createElement('li');
        elementoLista.innerHTML=`${producto.nombre} - Precio: ${producto.precio}Bs <button class="eliminar-producto" data-index="${index} ">Eliminar</button> <br>`;
        listacarrito.appendChild(elementoLista);   
        totalPagar+=producto.cantidad*producto.precio;
    });
    totalHTMl.textContent=totalPagar.toFixed(2);


const botonEliminar=document.querySelectorAll('.eliminar-producto');

botonEliminar.forEach((boton)=>{
boton.addEventListener('click',(event)=>{
        const index=event.target.dataset.index;
        carrito.splice(index, 1);
        contador--;
        contadorAgregados.textContent=contador;
        mostrarcarrito();
        });
    });
}

const botonConfirmarVenta=getElementById('confirmar-venta');
const formularioEmergente=getElementById('formulario-emergente');

//Evento para confirmar la venta
botonConfirmarVenta.addEventListener('click',()=>{
    formularioEmergente.style.display='block';
});
//Cierre de el formulario si se confirma la compra
const formularioCompra=document.getElementById('formulario-compra');
formularioCompra.addEventListener('submit',(event)=>{
    //Actualizar el estado de la compra - detalle (factura)
    event.preventDefault();//Evita que el formulario se envie
    //Obtner los valores del formulario
    const nombreCliente=document.getElementById('nombre').value;
    const emailCliente=document.getElementById('email').value;
    const celularCliente=document.getElementById('phone').value;
    //Obtener el contenido del carrito de compras
    const listaCarritoCompras=document.getElementById('lista-carrito').innerHTML;
    //Obtener el precio total
    const precioTotal=document.getElementById('total').textContent;
    //Creacion de la factura con el resumen de la compra
    const resumenCompra=`
        <h3>Resumen Compra</h3>
        <p>Nombre Cliente: ${nombreCliente} </p>
        <p>Correo: ${emailCliente} </p>
        <p>Celular: ${celularClienteCliente} </p>
        <p>Productos Comprados</p>
        <ul>
            ${listaCarritoCompras}
        </ul>
        <p>Precio Total: ${precioTotal}</p>
        <br>
        <p>Gracias por su compra!!!</p>
    `;

    //Abrir la ventana emergente con el resumen de la compra
    const factura=window.open('','_blank', 'width=300, height=300');
    factura.document.open();

    factura.document.write(resumenCompra);
    factura.document.close();

    //Cerrar el formulario emergente
    formularioEmergente.style.display='none';
});

