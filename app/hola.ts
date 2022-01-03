/* TIPOS PRIMITIVOS */

// boolean
let falso: boolean = false;
let verdadero: boolean = true;

// number
let entero: number = 44;
let decimal: number = 34.02;
let hexadecimal: number = 0x123cef; /* 0x + 123456789abcdef  */
let octal: number = 0o700;
let binario: number = 0b101010;
let extremadamenteLargo = 7_120_345_456;

// string
let cadenas: string = 'abcds123"asdasd\nsdsdfasd🎉🎉🎄';

/* TIPOS DE TYPESCRIPT */
//any : representa cualkier tipo de dato
let cualquierCosa: any;
cualquierCosa = "hola";
cualquierCosa = 5;
cualquierCosa = true;

// null
let nada: null = null;

// undefined
let indefinido: undefined = undefined;

// void: escpecificamente se usa para tipar funciones aunque si se usa en una variable lo unico q se le puede asignar es undefined
let vacio: void = undefined;

/* TIPOS NO PRIMITIVOS */
// array
let dias: string[] = ["lunes", "martes", "miercoles", "jueves", "viernes"];
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// tuples
let db: [name: string, age: number, country: string, payed: boolean] = [
  "hiram",
  26,
  "Cuba",
  true,
];

// objetos

let objeto: object = {};

let persona: {
  nombre: string;
  edad: number;
  pais: string;
  fecha_nac: Date;
  laboral: {
    empresa: string;
    sector: string;
  };
} = {
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
function greetings(name: string): string {
  return `Hola ${name}`;
}
/* const [nombre de la funcion] = (parametros:tipo de datos de los parametros):tipo de dato q va a retornar  */
const sumar: (m: number, n: number) => number = (
  m: number,
  n: number
): number => m + n;

sumar(3, 4);
const restar: (m: number, n: number) => number = (m, n) => m - n;
