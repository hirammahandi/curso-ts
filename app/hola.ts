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

let multiplicar: (a: number, b: number, cb: (result: number) => void) => void;

multiplicar = (a, b, cb) => cb(a * b);

multiplicar(4, 5, (result) => console.log(result));

/* CLASES */
/* 
  notas: para declarar un atributo o funcion privado se puede usar private o el caracter # delante del atributo(este ultimo solo funciona en versiones posterios a ES2015)
*/
class Rectangulo {
  ancho: number;
  private altura: number;
  readonly diagonal: number;
  private nombre?: string;
  // #age:number

  constructor(ancho: number, altura: number, diagonal: number) {
    this.altura = altura;
    this.ancho = ancho;
    this.diagonal = diagonal;
  }

  // Atributos virtuales: Son funciones q funcionan como atributos de la clase al expecificarle la palabra get delante, y a priori son de solo lectura por tanto no se puede modificar.
  public get _area(): number {
    return this.ancho * this.altura;
  }

  public get _nombre(): string {
    return (this.nombre ??= "untitled");
  }

  public set _nombre(v: string) {
    this.nombre = v;
  }

  Area() {
    this.ancho * this.altura;
  }

  Perimetro() {
    return 2 * (this.ancho + this.altura);
  }
}

const r1 = new Rectangulo(2, 4, 5);
r1._area;
r1._nombre = "A";
console.log(r1._nombre);
console.log(r1.Perimetro());

/* TIPOS ALIAS */
type Numero = number;

type LoginCredentials = {
  username: string;
  password: string;
  remember?: boolean;
};

const credentials: LoginCredentials = {
  username: "hhernandez",
  password: "admin",
  remember: true,
};

/* TIPOS LITERALES */
let saludo: "hola" = "hola";
const permiso: true = true;

type LoginOperation = {
  op: "login";
  username: string;
  pass: string;
};

const l: LoginOperation = {
  op: "login",
  username: "hhernandez",
  pass: "admin",
};

/* UNIONES DE TIPOS */
//! Cuando  utilizamos uniones de tipos en un parametro de una funcion solo vamos a poder acceder a los metodos de ese parametro q sean comunes para esos tipos porq typescript no sabe q tipo de valor es especificamente el parametro q se le esta pasando.
const convertir: (valor: string | number) => void = (valor): void => {
  // Maneras de preguntar de q tipo es el parametro para poder acceder a todos sus metodos.
  if (typeof valor === "string") {
    console.log(valor.concat("hola mundo"));
  } else valor.toFixed(2);
  console.log(valor);
};

convertir("a");
convertir(3);

type A = {
  uno: boolean;
  dos: boolean;
};

type B = {
  tres: boolean;
};

let valor: A | B = { uno: true, dos: false };
valor = { tres: true };

/* UNIONES DISCRIMINANTES */
type OperacionSuma = {
  sumando1: number;
  sumando2: number;
  tipo: "suma"; //* guarda
};

type OperacionMultiplicar = {
  operando1: number;
  operando2: number;
  tipo: "multiplicar"; //* guarda
};

type Operacion = OperacionSuma | OperacionMultiplicar;

//! Otra manera de preguntar de q tipo es un parametro es creando una guarda en el type
const operar: (o: Operacion) => number = (o) => {
  if (o.tipo === "suma") return o.sumando1 + o.sumando2;
  else return o.operando1 * o.operando2;
};

let result: number = operar({
  operando1: 1,
  operando2: 3,
  tipo: "multiplicar",
});
console.log(result);

/* INTERSECCIONES DE TIPOS */

type Coordenada = [x: number, y: number];
type Vector = [x: number, y: number];

type Posicionable = {
  posicion: Coordenada;
};

type Movible = {
  velocidad: Vector;
  aceleracion: Vector;
};

type MovibleYPosicionable = Posicionable & Movible;

let obj: MovibleYPosicionable = {
  aceleracion: [1, 2],
  posicion: [2, 3],
  velocidad: [3, 4],
};

/* INTERFACES */
interface UserData {
  readonly username: string;
  created_at?: Date;
  superuser: boolean;
  //*  Dos formas de escribir metodos en una interfaz y hacerlas opcionales
  logout?(): void;
  rename?: (username: string) => void;
}

const login = (): UserData => ({
  username: "hiram",
  created_at: new Date(),
  superuser: true,
  logout: () => console.log("logout"),
  rename: (username) => console.log(username),
});

const data: UserData = login();

//! Dos formas de acceder a los metodos de una propiedad opcional
data.created_at?.getDate(); //* chekea q el atributo exsite y me devuelve lo q haga el metodo q accedi sino continua y no da error, asi nos aseguramos q pueda o no exisitir
data.created_at!.toDateString(); //* solo es recomendable usarlo si o si va existir la propiedad, en este caso created_at

/* INTERFACES CON CLASES */
interface Shape {
  readonly sides: number;
  area(): number;
  perimeter(): number;
}
/* Las clases permiten implementar varias interfaces, separandolas por comas */
class Rectangle implements Shape {
  sides: number = 4;
  /* //* poniendo los amodificadores de atributos directamente en el constructor permite q no sea necesario inicializar los valores de los atributos q tenga la clase*/
  constructor(readonly width: number, readonly height: number) {}

  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const process = (s: Shape) => console.log({ area: s.area() });
const r = new Rectangle(1, 2);
process(r);

/* HERENCIA Y ESPECIALIZACION DE INTERFACES */
interface Vehiculo {
  readonly fabricante: string;
  arrancar(): void;
  repostar(): void;
  detener(): void;
}

interface VehiculoTerrestre extends Vehiculo {
  conducir(): void;
}

interface VehiculoMaritimo extends Vehiculo {
  sonarSirena(): void;
}

/* INTERFACES Y TIPOS INDIZIDAS */

interface Indizable_1 {
  [index: number]: boolean;
}

const indizable_1: Indizable_1 = {
  0: true,
};

indizable_1[0];

type Indizable_2 = {
  [key in "text" | "date"]: string | Date;
};

let indizable: Indizable_2 = {
  text: "hola",
  date: new Date(),
};

indizable.date;

// INTERFACES: FUNCIONES Y TIPOS HIBRIDOS
// Comparator es una interfaz hibrida q permite tipar una variable y compoertarse com funcion y ademas tener los atributos definidos en la interfaz como adicionales, para q esto funcione obligatoriamente tiene q estar estructurado la funcion cq funciona como atributo de la siguiente manera
interface Comparator {
  (first: string, second: string): number;
  algorithm: string;
  safe: boolean;
}

type Comparator_Type = {
  (first: string, second: string): number;
  algorithm: string;
  safe: boolean;
};

const sort = (c: Comparator) => {
  const out = c("1", "2");
  console.log(`Ordenando con el criterio ${c.algorithm}:${out}`);
  return out;
};

// SE PUEDEN CREAR VARIAS INTERFACES CON EL MISMO NOMBRE Y LO Q HACE ES HEREDAR LAS PROPIEADES DE CADA INTEFAZ
interface X {
  a: string;
}
interface X {
  b: string;
}

let c: X;

// c.a
// c.b

interface Window {
  accountID: number;
}

function use(w: Window) {
  console.log(w.accountID);
}
