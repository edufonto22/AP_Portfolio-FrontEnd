export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;
    imgEdu:string;

    constructor(nombreE: string, descripcionE: string, imgEdu: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgEdu= imgEdu;
    }
}

/*
export class Educacion {
    id?:number;
    nombreE:string;
    descripcionE:string;

    constructor(nombreE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}


*/