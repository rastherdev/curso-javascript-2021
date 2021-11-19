class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    get getNombre(){
        return this.nombre
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1)
console.log(persona1.getNombre)
// nueva sintaxis aprendida
persona1.setNombre = 'Juan Carlos'
console.log(persona1.getNombre)

let persona2 = new Persona('Mara', 'Saucedo');
console.log(persona2)
