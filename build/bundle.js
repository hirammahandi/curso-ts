"use strict";
/* TIPOS PRIMITIVOS */
var _a;
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
    return "Hola ".concat(name);
}
/* const [nombre de la funcion] = (parametros:tipo de datos de los parametros):tipo de dato q va a retornar  */
var sumar = function (m, n) { return m + n; };
sumar(3, 4);
var restar = function (m, n) { return m - n; };
var multiplicar;
multiplicar = function (a, b, cb) { return cb(a * b); };
multiplicar(4, 5, function (result) { return console.log(result); });
/* CLASES */
/*
  notas: para declarar un atributo o funcion privado se puede usar private o el caracter # delante del atributo(este ultimo solo funciona en versiones posterios a ES2015)
*/
var Rectangulo = /** @class */ (function () {
    // #age:number
    function Rectangulo(ancho, altura, diagonal) {
        this.altura = altura;
        this.ancho = ancho;
        this.diagonal = diagonal;
    }
    Object.defineProperty(Rectangulo.prototype, "_area", {
        // Atributos virtuales: Son funciones q funcionan como atributos de la clase al expecificarle la palabra get delante, y a priori son de solo lectura por tanto no se puede modificar.
        get: function () {
            return this.ancho * this.altura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "_nombre", {
        get: function () {
            var _a;
            return ((_a = this.nombre) !== null && _a !== void 0 ? _a : (this.nombre = "untitled"));
        },
        set: function (v) {
            this.nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo.prototype.Area = function () {
        this.ancho * this.altura;
    };
    Rectangulo.prototype.Perimetro = function () {
        return 2 * (this.ancho + this.altura);
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(2, 4, 5);
r1._area;
r1._nombre = "A";
console.log(r1._nombre);
console.log(r1.Perimetro());
var credentials = {
    username: "hhernandez",
    password: "admin",
    remember: true,
};
/* TIPOS LITERALES */
var saludo = "hola";
var permiso = true;
var l = {
    op: "login",
    username: "hhernandez",
    pass: "admin",
};
/* UNIONES DE TIPOS */
//! Cuando  utilizamos uniones de tipos en un parametro de una funcion solo vamos a poder acceder a los metodos de ese parametro q sean comunes para esos tipos porq typescript no sabe q tipo de valor es especificamente el parametro q se le esta pasando.
var convertir = function (valor) {
    // Maneras de preguntar de q tipo es el parametro para poder acceder a todos sus metodos.
    if (typeof valor === "string") {
        console.log(valor.concat("hola mundo"));
    }
    else
        valor.toFixed(2);
    console.log(valor);
};
convertir("a");
convertir(3);
var valor = { uno: true, dos: false };
valor = { tres: true };
//! Otra manera de preguntar de q tipo es un parametro es creando una guarda en el type
var operar = function (o) {
    if (o.tipo === "suma")
        return o.sumando1 + o.sumando2;
    else
        return o.operando1 * o.operando2;
};
var result = operar({
    operando1: 1,
    operando2: 3,
    tipo: "multiplicar",
});
console.log(result);
var obj = {
    aceleracion: [1, 2],
    posicion: [2, 3],
    velocidad: [3, 4],
};
var login = function () { return ({
    username: "hiram",
    created_at: new Date(),
    superuser: true,
    logout: function () { return console.log("logout"); },
    rename: function (username) { return console.log(username); },
}); };
var data = login();
//! Dos formas de acceder a los metodos de una propiedad opcional
(_a = data.created_at) === null || _a === void 0 ? void 0 : _a.getDate(); //* chekea q el atributo exsite y me devuelve lo q haga el metodo q accedi sino continua y no da error, asi nos aseguramos q pueda o no exisitir
data.created_at.toDateString(); //* solo es recomendable usarlo si o si va existir la propiedad, en este caso created_at
/* Las clases permiten implementar varias interfaces, separandolas por comas */
var Rectangle = /** @class */ (function () {
    /* //* poniendo los amodificadores de atributos directamente en el constructor permite q no sea necesario inicializar los valores de los atributos q tenga la clase*/
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.sides = 4;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var process = function (s) { return console.log({ area: s.area() }); };
var r = new Rectangle(1, 2);
process(r);
var indizable_1 = {
    0: true,
};
indizable_1[0];
var indizable = {
    text: "hola",
    date: new Date(),
};
indizable.date;
