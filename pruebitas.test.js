const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
let ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const agregarventas = funciones.agregarventas;
const obtenerIdVenta = funciones.obtenerIdVenta;
const precioMaquina = funciones.precioMaquina;
const ventaPromedio = funciones.ventaPromedio;


/*El test este creo que esta mal porque antes daba bien y en realidad tiraba NaN kasjdhaksjda*/
test("Obteneridventa",()=>{
    let id = obtenerIdVenta();
    expect(typeof id).toBe("number");
});

test("Agergar ventas a la lista de ventas",()=>{
    expect(agregarventas(21, 3, 2019, "Hedy", "Caballito", ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"])).toStrictEqual(ventas[6]);

});

test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);

});

test('calcular promedio de venta',()=>{
    expect(ventaPromedio()).toBe(353);
});