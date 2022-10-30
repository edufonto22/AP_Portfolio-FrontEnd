export class Experiencia {
    id?:number;
    nombreE:string;
    descripcionE:string;
    imgExp:string;

    constructor(nombreE: string, descripcionE: string, imgExp: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgExp = imgExp;
    }
}
