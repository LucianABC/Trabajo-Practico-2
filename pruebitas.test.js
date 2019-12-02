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
const ventasVendedora = funciones.ventasVendedora;
const mejorVendedora = funciones.mejorVendedora;
const componenteMasVendido = funciones.componenteMasVendido;

beforeEach (() => {
    if(ventas.length == 7) {
     ventas.splice(6,1);
    }
    
});


// 1.
test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);

    expect (cantidadVentasComponente('HDD Toyiva')).toBe(1);
});

// 2.
test('Obtener cuantas veces se vendio el HDD Toyiva', () => {
    expect (cantidadVentasComponente('HDD Toyiva')).toBe(1);
});

//3.

test ('Cantidad de ventas de la vendedora Grace',()=>{

    expect (ventasVendedora('Grace')).toBe(990);
});



// PUNTO 04

test ('Componente con mas ventas',()=>{
    expect(componenteMasVendido()).toBe('Monitor GPRS 3000');
});



//5.
test('retorna monto vendido por sucursal', () => {
    expect(ventasSucursal("Centro")).toBe(990);
});

//6
test("Vendedora con mas ingresos", ()=>{
    expect(mejorVendedora()).toBe("Grace");

});
//7
test('calcular promedio de venta',()=>{
    expect(ventaPromedio()).toBe(353);
});


//8.
test("Obteneridventa",()=>{
    let id = obtenerIdVenta();
    expect(typeof id).toBe('number');
});


//9.
test("Agregar ventas a la lista de ventas",()=>{
   let nuevaventa = agregarventas(21, 3, 2019, "Hedy", "Recoleta", ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"]);
    expect(nuevaventa).toStrictEqual(ventas[6]);

});

