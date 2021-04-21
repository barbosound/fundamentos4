import { Punto } from "./punto";

export class Triangulo{
    private x: Punto;
    private y: Punto;
    private z: Punto;

    constructor(x:Punto,y:Punto,z:Punto)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public calcularLongitudLados():number[]{

        var LadosArray = new Array(3);
        LadosArray[0] = this.x.calcularDistancia(this.y);
        LadosArray[1] = this.y.calcularDistancia(this.z);
        LadosArray[2] = this.z.calcularDistancia(this.x);

        return LadosArray;
    }
}