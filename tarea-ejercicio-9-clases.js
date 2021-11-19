// ejercicio sobre herencia y polimorfismo
class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.idPersona = ++Persona.contadorPersonas;
  }
  get getIdPersona() {
    return this.idPersona;
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
  get getEdad() {
    return this.edad;
  }
  set setEdad(edad) {
    this.edad = edad;
  }
  informacion() {
    return this.nombre + ' ' + this.apellido + ' ' + this.edad;
  }
  toString() {
    return this.informacion();
  }
}

class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this.sueldo = sueldo;
    this.idEmpleado = ++Empleado.contadorEmpleado;
  }
  get getIdEmpleado() {
    return this.idEmpleado;
  }
  get getSueldo() {
    return this.sueldo;
  }
  set setSueldo(sueldo) {
    this.sueldo = sueldo;
  }
  informacion() {
    return super.informacion() + ' ' + this.sueldo;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this.fechaRegistro = fechaRegistro;
    this.idCliente = ++Cliente.contadorClientes;
  }
  get getIdCliente() {
    return this.idCliente;
  }
  get getFechaRegistro() {
    return this.fechaRegistro;
  }
  set setFechaRegistro(fechaRegistro) {
    this.fechaRegistro = fechaRegistro;
  }
  informacion() {
    return super.informacion() + ' ' + this.fechaRegistro
  }
}

// creando objetos
let persona = new Persona('Evito', 'Dolores de Hoyo', 23)
let empleado = new Empleado('Alma Marcela', 'Gozo', 45, 45000)
let fechaActual = new Date()
let cliente = new Cliente('El Vitor', 'Garduno', 45, fechaActual.toISOString())

console.log(persona)
console.log(empleado)
console.log(cliente)

// contadores
console.log(Persona.contadorPersonas)
console.log(Empleado.contadorEmpleado)
console.log(Cliente.contadorClientes)

// polimorfismo
console.log(persona.toString())
console.log(empleado.toString())
console.log(cliente.toString())