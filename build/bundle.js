"use strict";
/* TIPOS PRIMITIVOS */
// boolean
var falso = false;
var verdadero = true;
// number
var entero = 44;
var decimal = 34.02;
var hexadecimal = 0x123cef; /* 0x + 123456789abcdef  */
var octal = 448;
var binario = 42;
var extremadamenteLargo = 7120345456;
// string
var cadenas = 'abcds123"asdasd\nsdsdfasd🎉🎉🎄';
/* TIPOS DE TYPESCRIPT */
//any : representa cualkier tipo de dato
var cualquierCosa;
cualquierCosa = "hola";
cualquierCosa = 5;
cualquierCosa = true;
// null
var nada = null;
// undefined
var indefinido = undefined;
// void: escpecificamente se usa para tipar funciones aunque si se usa en una variable lo unico q se le puede asignar es undefined
var vacio = undefined;
/* TIPOS NO PRIMITIVOS */
// array
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// tuples
var db = [
    "hiram",
    26,
    "Cuba",
    true,
];
// objetos
var objeto = {};
var persona = {
    nombre: "Hiram",
    edad: 26,
    pais: "Cuba",
    fecha_nac: new Date(1995, 3, 2),
    laboral: { empresa: "Atomic", sector: "programacion" },
};
/* FUNCIONES */
/*
  function [nombre de la funcion] (parametros:tipo de datos del parametro):tipo de dato q va a retornar la funcion
*/
function greetings(name) {
    return "Hola " + name;
}
/* const [nombre de la funcion] = (parametros:tipo de datos de los parametros):tipo de dato q va a retornar  */
var sumar = function (m, n) { return m + n; };
sumar(3, 4);
var restar = function (m, n) { return m - n; };
