//alert("Hola Bienvenidos al Script Externo")
//Tipos de Datos
//Tipos de Datos Simples
//1. Numericos ENTEROS, DECIMALES
//2. Cadenas de Caracteres
//3. Logicos (Boleanos)

//Variables
//Es un espacio reservado en la memoria donde almacenamos un elemento
//Variables mutables
var nombre="Kevin Arroyo" //Variable que almacena una cadena de caracteres
var numero=55 //Variable que almacena un numero entero
var encender=true //Variable que almacena un Boleano

let nombre2="Kevin Arroyo"

nombre="Felix Paye"
//Variables Inmutables
//Valores Constantes
const pi=3.1416


//Funcion Alert
alert(nombre)
alert(numero)

//Escribir en el documento html
document.write(nombre+"<br>")
document.write(numero+ "<br>")

//Operadores
//1.Operadores Aritmeticos
//Suma, Resta, Multiplicacion, Division 
var numero1=45
var numero2=78
suma=numero1+numero2
document.write("La suma de "+numero1+ " + "+numero2+ "= "+suma)
//2.Operadores de Cadenas de Caracteres
//Concatenacion +

//Funcion obtencion de datos por teclado con JavaScript
var nombre3=prompt("Ingrese su nombre: ")
document.write("<br>"+nombre3)

//Ejercicio 1. Calcular la suma de 2 numero ingresados por teclado
document.write("Ejercicio 1. Calcular la suma de 2 numero ingresados por teclado")
var num1=parseFloat(prompt("Ingrese un numero"))
var num2=parseFloat(prompt("Ingrese un numero"))
sumar=num1+num2
document.write("<br>"+sumar)

//Operadores Logicos
//Mayor que >, >=
//Menor que <, <=
//Igual que ==
//Diferente que !=
//Ejercicio 2. Verificar entre los 2 numeros con los operadores logicos
document.write("Ejercicio 2. Verificar entre los 2 numeros con los operadores logicos")
document.write("<br>")
document.write(num1>num2)
document.write("<br>")
document.write(num1<num2)
document.write("<br>")
document.write(num1==num2)
document.write("<br>")
document.write(num1!=num2)

//Estrucuras de Control en JavaScript
//1. TOMA DE DESICIONES
//1.1. IF
//1.2. SWITCH

//1.1. Condicionales IF
//if (expresion){
    //Accion si se cumple la condicion
//}
//Ejercicio 3. Comparar entre los 2 numeros cual es el mayor
document.write("<br>")
document.write("Ejercicio 3. Comparar entre los 2 numeros cual es el mayor")
document.write("<br>")
if (num1>num2){
    document.write("El numero ",num1, " es mayor que ",num2)
}else{
    document.write("El numero ",num2, " es mayor que ",num1)
}
//Ejercicio 4. Crear un menu para una calculadora simple
document.write("<br>")
document.write("Ejercicio 4. Crear un menu para una calculadora simple")
document.write("<br>")
document.write("Seleccione la operacion que desea realizar")
document.write("<br>")
document.write("1. Sumar")
document.write("<br>")
document.write("2. Restar")
document.write("<br>")
document.write("3. Multiplicar")
document.write("<br>")
document.write("4. Dividir")
document.write("<br>")
seleccion=parseInt(prompt("Ingrese la operacion, 1. Sumar, 2. Restar, 3. Multiplicar, 4. Dividir "))
var numm1=parseFloat(prompt("Ingrese un numero"))
var numm2=parseFloat(prompt("Ingrese un numero"))
if (seleccion==1){
    var suma=numm1+numm2
    document.write("<br>")
    document.write("La suma de ",numm1,"+",numm2,"= ",suma)
}
else if(seleccion==2){
    var resta=numm1-numm2
    document.write("<br>")
    document.write("La resta de ",numm1,"-",numm2,"= ",resta)
}
else if(seleccion==3){
    var multiplicar=numm1*numm2
    document.write("<br>")
    document.write("La multiplicacion de ",numm1,"x",numm2,"= ",multiplicar)
}
else if(seleccion==4){
    var dividir=numm1/numm2
    document.write("<br>")
    document.write("La division de ",numm1,"/",numm2,"= ", dividir)
}
else{
    alert("Error operacion no valida")
}



//2. BUCLES

