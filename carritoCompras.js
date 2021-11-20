class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this.idProducto = ++Producto.contadorProductos;
    this.nombre = nombre;
    this.precio = precio;
  }
  get getIdProducto() {
    return this.idProducto;
  }
  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  get getPrecio() {
    return this.precio;
  }
  set setPrecio(precio) {
    this.precio = precio;
  }
  toString() {
    return (
      "ID producto:" + this.idProducto + ", Nombre:" + this.nombre + ", $:" + this.precio
    );
  }
}

class Orden {
  static contadorOrdenes = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this.idOrden = ++Orden.contadorOrdenes;
    this.productos = [];
  }
  get getIdOrden() {
    return this.idOrden;
  }
  agregarProducto(producto) {
    if (this.productos.length < Orden.MAX_PRODUCTOS) {
      this.productos.push(producto);
    } else {
      console.log("Maximos productos");
    }
  }
  calcularTotal() {
    let totalVentas = 0;
    for (let producto of this.productos) {
      totalVentas += producto.precio;
    }
    return totalVentas
  }
  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this.productos) {
      productoOrden += producto.toString() + ' '
    }
    console.log('ID Orden:' + this.idOrden + ', Orden:' + productoOrden + ', Total:' + this.calcularTotal())
  }
}

let producto1 = new Producto("Desodorante", 100);
console.log(producto1.toString());
let producto2 = new Producto("Computadora", 23000);
console.log(producto2.toString());
let orden1 = new Orden();
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.mostrarOrden()
let producto3 = new Producto('Cinturon', 201020)
let orden2 = new Orden()
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto2)
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto2)
orden2.mostrarOrden()