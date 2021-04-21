"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var LadosArray = new Array(3);
        LadosArray[0] = this.x.calcularDistancia(this.y);
        LadosArray[1] = this.y.calcularDistancia(this.z);
        LadosArray[2] = this.z.calcularDistancia(this.x);
        return LadosArray;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
