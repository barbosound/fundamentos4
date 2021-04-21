export class Punto{
    private x: number;
    private y: number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x;
    }

    public setX(x:number){
        this.x = x;
    }

    public getY():number{
        return this.y;
    }

    public setY(y:number){
        this.y = y;;
    }
    
    public toString(){
        return `(${this.x.toString()},${this.y.toString()})`;
    }

    public gradosARadiante(grados:number):number{
        return grados * Math.PI / 180;
    }

    public DistanciaAlOrigen():number{

        var distance = Math.sqrt(Math.pow(this.x - 0,2) + Math.pow(this.y - 0,2))

        return distance;
    }

    public calcularDistancia(otroPunto:Punto):number{

        var distance = Math.sqrt(Math.pow(this.x - otroPunto.getX(),2) + Math.pow(this.y - otroPunto.getY(),2))

        return distance;
    }

    public calcularCuadrante():number{
        switch(this.x >= 0){
            case true:
                if(this.y >= 0){
                    return 0
                }else{
                    return 4;
                }
            case false:
                if(this.y >= 0){
                    return 2;
                }else{
                    return 3;
                }
        }
    }

    public calcularMasCercano(puntos:Punto[]):Punto{
        var min = this.calcularDistancia(puntos[0]);
        var index = 0;
        for (let i = 0; i < puntos.length; i++) {
            console.log("distancias: "+this.calcularDistancia(puntos[i]))
            if(this.calcularDistancia(puntos[i]) < min)
            {
                min = this.calcularDistancia(puntos[i]);
                index = i;
            }           
        } 
        return puntos[index];
    }

}