'use strict';

//Ejercicio constructor

class Food {
    constructor(name, type, cal) {
        this.name = name;
        this.type = type,
        this.cal = cal;
    }
};

const donut = new Food ("donut", "sweet", 452);
const beer = new Food ("beer", "drink", 43);
const apple = new Food ("apple", "fruit", 52);

console.log(donut);
console.log(beer);
console.log(apple);

//Ejercicio 1 Crea la clase cuadrado

class cuadrado {
    constructor (lado1){
        this.lado = lado1;
        this.perimetro = lado1*4;
        this.area = lado1 * lado1;
        //Funcion dentro del constructor
        this.calcularvolumen = function (){
           return console.log(lado1*this.area);
        }
    } 
    print (){
        console.log("printed");
    }  ///Funcion fuera del constructor

};

const cuadpequeño = new cuadrado (2);
const cuadmediano = new cuadrado(5);
const cuadgrande = new cuadrado (10);
console.log(cuadpequeño);
console.log(cuadmediano);
console.log(cuadgrande);

//para que se ejecute la funcion de dentro
cuadmediano.calcularvolumen();
cuadpequeño.calcularvolumen();
cuadgrande.calcularvolumen();

//para que se ejecute la funcion de fuera
cuadpequeño.print();

//Podemos crear funciones tambien dentro de las clases

//Ejercicio de facturas

class Factura {
    constructor (cliente, elemento){
        this.cliente = cliente;
        this.lista = elemento;
        this.informacion = {
            baseImponible: 0,
            iva:21,
            total: 0,
            formadepago: "efectivo",
        };
        this.calcularbaseimponible = function(){
            return this.informacion.baseImponible = this.lista.cantidad * this.lista.precio;
        };
        this.calculartotal = function(){
            return this.informacion.baseImponible + (1+(this.informacion.iva/100));
        }
    }
};

console.log(Factura);

class Cliente {
    constructor (nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};
console.log(Cliente);


class Elemento {
    constructor (descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    
};
console.log(Elemento);

const client = new Cliente ("GS", "C/Sol", 914567898, 'B36547659' );
console.log(client);

const element = new Elemento ("cuadernos", 50, 300);
console.log(element);

const factura1 = new Factura (client, element);
console.log(factura1);
factura1.calcularbaseimponible();
factura1.calculartotal();

