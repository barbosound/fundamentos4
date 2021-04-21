import { Punto } from "./punto";
import { Triangulo } from "./triangulo";

var tri = new Triangulo(new Punto(1,1),new Punto(5,2),new Punto(8,4));

console.log(tri.calcularLongitudLados());