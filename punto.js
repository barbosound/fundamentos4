"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
        ;
    };
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.gradosARadiante = function (grados) {
        return grados * Math.PI / 180;
    };
    Punto.prototype.DistanciaAlOrigen = function () {
        var distance = Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
        return distance;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distance = Math.sqrt(Math.pow(this.x - otroPunto.getX(), 2) + Math.pow(this.y - otroPunto.getY(), 2));
        return distance;
    };
    Punto.prototype.calcularCuadrante = function () {
        switch (this.x >= 0) {
            case true:
                if (this.y >= 0) {
                    return 0;
                }
                else {
                    return 4;
                }
            case false:
                if (this.y >= 0) {
                    return 2;
                }
                else {
                    return 3;
                }
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var min = this.calcularDistancia(puntos[0]);
        var index = 0;
        for (var i = 0; i < puntos.length; i++) {
            console.log("distancias: " + this.calcularDistancia(puntos[i]));
            if (this.calcularDistancia(puntos[i]) < min) {
                min = this.calcularDistancia(puntos[i]);
                index = i;
            }
        }
        return puntos[index];
    };
    return Punto;
}());
exports.Punto = Punto;
