const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
let ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const agregarventas = funciones.agregarventas;
const obtenerIdVenta = funciones.obtenerIdVenta;
const precioMaquina = funciones.precioMaquina;
const ventaPromedio = funciones.ventaPromedio;

//Con el beforeEach no me funciona la funcion de agregarventas, sin el beforeEach la de ventaPromedio da mal)
beforeEach (() => {
     ventas = [
        [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],320 ],
        [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],320 ],
        [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'],370 ],
        [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'],350 ],
        [ 1000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'], 300 ],
        [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'],460 ]
    ];    
    
});




/*El test este creo que esta mal porque antes daba bien y en realidad tiraba NaN kasjdhaksjda*/
test("Obteneridventa",()=>{
    let id = obtenerIdVenta();
    expect(typeof id).toBe("number");
});

test("Agergar ventas a la lista de ventas",()=>{
    agregarventas(21, 3, 2019, "Hedy", "Recoleta", ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"])
    expect([
        21, 3, 2019
    ]).toStrictEqual(ventas[6]);

});

test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);

});

test('calcular promedio de venta',()=>{
    expect(ventaPromedio()).toBe(353);
});