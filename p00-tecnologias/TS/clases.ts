interface Autor{
    nombre:String;
    apellido:String;
    edad:Number;
}

class Libro implements Autor{
    public nombre:String;
    public apellido:String;
    public edad:Number;
    public titulo:String;

    constructor (autor, titulo){
        this.autor=autor;
        this.titulo=titulo;
    }

    algo(){

    }
}

class LibroTecnico extends Libro{
    public tema;
    constructor(autor, titulo, tema){
        super(autor, titulo);
        this.tema=tema;
    }
}

let oLibro = new Libro ('Cervantes', 'El Quijote');
oLibro.Editorial = 'Alfaguara';
console.log(oLibro);

let oLibroTec = new LibroTecnico ('Cervantes', 'El Quijote', 'Caballeria');
console.log(oLibroTec);