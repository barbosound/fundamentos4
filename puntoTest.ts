import {Punto} from  './punto';

var p = new Punto(1,5);

console.log(p.DistanciaAlOrigen());
console.log(p.calcularDistancia(new Punto(4,-2)));
console.log(p.calcularCuadrante());
console.log(p.calcularMasCercano([new Punto(4,-2), new Punto(1,7), new Punto(10,3)]));