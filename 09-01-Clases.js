class Persona {
  static contadorPersonas = 0; // atrubutos de clase
  email = "email@email.com"; // atributo de de objetos
  static get max_obj() {
    return 5;
  }

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    // instanciar la clase Persona, de forma global
    if (Persona.contadorPersonas < Persona.max_obj) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("maximo numero de objetos");
    }
  }

  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  get getApellido() {
    return this.apellido;
  }
  set setApellido(apellido) {
    this.apellido = apellido;
  }
  nombreCompleto() {
    return this.idPersona + " " + this.nombre + " " + this.apellido;
  }
  // sobreescribiendo metodos
  toString() {
    //polimorfismo, dependiendo la instancia del objeto y su clase
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("hola desde la clase master");
  }
  static saludar2(persona) {
    console.log(persona.getNombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    // llamada al constructor de la clase maestro
    super(nombre, apellido);
    this.departamento = departamento;
  }
  get getDepartamento() {
    return this.departamento;
  }
  set setDepartamento(departamento) {
    this.departamento = departamento;
  }
  // sobreescritura de metodos
  nombreCompleto() {
    return super.nombreCompleto() + " " + this.departamento;
  }
}

let persona1 = new Persona("Alma Marcela", "Gozo");
let persona2 = new Persona("Alma Marcela", "Gozo");
let persona3 = new Persona("Alma Marcela", "Gozo");
let persona4 = new Persona("Alma Marcela", "Gozo");
console.log(persona1);

let empleado = new Empleado("Juan", "Perez", "Sistemas");
console.log(empleado);

console.log(Persona.max_obj);
console.log(Persona.contadorPersonas);
// let persona1 = new Persona("Juan", "Perez");
// console.log(persona1);
// console.log(persona1.getNombre);

// // nueva sintaxis aprendida
// persona1.setNombre = "Juan Carlos";
// console.log(persona1.getNombre);

// let persona2 = new Persona("Mara", "Saucedo");
// console.log(persona2);

// let empleado1 = new Empleado("Pedro", "Rodriguez", "Recursos humanos");
// console.log(empleado1);
// console.log(empleado1.getDepartamento);
// empleado1.setDepartamento = "Sistemas";
// console.log(empleado1.getDepartamento);
// console.log(empleado1.nombreCompleto());
// console.log(empleado1.toString());

// // persona1.saludar();
// // static solo se utiliza dentro de la case donde se encuentre definido
// // solo se asosian con la clase, no con los objetos creados
// Persona.saludar();
// Persona.saludar2(persona1);
// Empleado.saludar();
// Empleado.saludar2(empleado1);

// // accediendo a atributos estaticos
// console.log(Persona.contadorObjetosPersona);
// console.log(persona1.email)
// console.log(empleado1.email)
