"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
var tri = new triangulo_1.Triangulo(new punto_1.Punto(1, 1), new punto_1.Punto(5, 2), new punto_1.Punto(8, 4));
console.log(tri.calcularLongitudLados());
