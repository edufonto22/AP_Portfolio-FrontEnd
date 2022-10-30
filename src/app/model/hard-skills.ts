export class HardSkill {
    id?: number;
    nombre: string;
    porcentaje: number;
    imgSkill:string;

    constructor(nombre:string, porcentaje: number, imgSkill:string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imgSkill = imgSkill;
    }
}