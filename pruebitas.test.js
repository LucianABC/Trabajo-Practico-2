const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
let ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const agregarventas = funciones.agregarventas;
const obtenerIdVenta = funciones.obtenerIdVenta;
const precioMaquina = funciones.precioMaquina;
const ventaPromedio = funciones.ventaPromedio;
const ventasSucursal = funciones.ventasSucursal;
const cantidadVentasComponente = funciones.cantidadVentasComponente;
const ventaVendedora = funciones.ventaVendedora;

beforeEach (() => {
    if(ventas.length == 7) {
     ventas.splice(6,1);
    }
    
});


// 1.
test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);

});

// punto 02
test('Obtener cuantas veces se vendio el HDD Toyiva', () => {
    expect (cantidadVentasComponente('HDD Toyiva')).toBe(1);
});

//PUNTO 03

/*test ('Cantidad de ventas de la vendedora Ada',()=>{
    expect (ventaVendedora("Ada")).toBe(670);
});*/

//4 

//5 
test('retorna monto vendido por sucursal', () => {
    expect(ventasSucursal("Centro")).toBe(990);
});

//6

//7

test('calcular promedio de venta',()=>{
    expect(ventaPromedio()).toBe(353);
});


//8
test("Obteneridventa",()=>{
    let id = obtenerIdVenta();
    expect(typeof id).toBe('number');
});


//9
test("Agregar ventas a la lista de ventas",()=>{
   let nuevaventa = agregarventas(21, 3, 2019, "Hedy", "Recoleta", ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"]);
    expect(nuevaventa).toStrictEqual(ventas[6]);

});

