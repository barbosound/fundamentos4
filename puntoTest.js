"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var p = new punto_1.Punto(1, 5);
console.log(p.DistanciaAlOrigen());
console.log(p.calcularDistancia(new punto_1.Punto(4, -2)));
console.log(p.calcularCuadrante());
console.log(p.calcularMasCercano([new punto_1.Punto(4, -2), new punto_1.Punto(1, 7), new punto_1.Punto(10, 3)]));
