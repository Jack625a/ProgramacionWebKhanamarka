//Ejercicio 10. Crear un sistema para mostrar la tabla de multiplicar de cualquier digito ingresado por teclado
//var numero=prompt("Ingrese la tabla de multiplicar que desea mostrar")
document.write("<br>")
for(var i=1;i<=10;i++){
    document.write("<br>")
    document.write(numero+"x"+i+"= "+ numero*i)
}
//Ejercicio 11. Crear un boton que active una funcion para mostrar la tabla de m multiplicar
//Funciones en Javascript
function tablaMultiplicar(numero){
    var n=prompt("Ingrese la tabla de multiplicar que desea mostrar")
    document.write("<br>")
    for(var i=1;i<=10;i++){
        document.write("<br>")
        document.write(n+"x"+i+"= "+ n*i)
    }
}

var n=prompt("Ingrese la tabla de multiplicar que desea mostrar")
document.getElementById("tabla").onclick=tablaMultiplicar()
document.getElementsByClassName("tabla-C").onclick=tablaMultiplicar()