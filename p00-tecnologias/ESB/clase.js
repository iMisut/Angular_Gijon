class Libro {
    constructor (autor, titulo){
        this.autor=autor;
        this.titulo=titulo;
    }
}

class LibroTecnico extends Libro{
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