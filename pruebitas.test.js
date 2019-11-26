const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
const ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const obtenerIdVenta = funciones.obtenerIdVenta;
const precioMaquina = funciones.precioMaquina;




test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);
});