const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
const ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const agregarventas = funciones.agregarventas;
const obtenerIdVenta = funciones.obtenerIdVenta;

test("Cargar datos",()=>{
    expect(typeof obtenerIdVenta()).toBe("number")
});


test("Agergar ventas a la lista de ventas",()=>{
    expect(agregarventas(21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'])).toStrictEqual(ventas[6])
});