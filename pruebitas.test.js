const funciones = require('./compumundohipermegared.js');
const vendedoras = funciones.vendedoras;
const ventas = funciones.ventas;
const precios = funciones.precios;
const sucursales = funciones.sucursales;
const agregarventas = funciones.agregarventas;
const obtenerIdVenta = funciones.obtenerIdVenta;
const precioMaquina = funciones.precioMaquina;
const ventaPromedio = funciones.ventaPromedio;


beforeEach(()=>{ 
    let ventas = [
        [100000000, 27, 10, 2019, "Grace", "Olivos",["Monitor GPRS 3000","RAM Quinston Fury"], 430],
        [100000044, 29, 10, 2019, "Hedy", "Centro",["Motherboard ASUS 1500","RAM Quinston Fury"], 350],
        [100004435, 10, 11, 2019, "Ada", "Villa Crespo",["HDD Toyiva","Motherboard ASUS 1200"], 190],
        [100066666, 17, 11, 2019, "Sheryl", "Olivos",["Monitor ASC 543","RAM Quinston Fury"], 490],
        [100004435, 10, 11, 2019, "Ada", "Villa Crespo",["HDD Wezter Dishital","RAM Quinston"], 185]
    ];
   
});

test("Cargar datos",()=>{
    expect(typeof obtenerIdVenta()).toBe("number")
});


test("Agergar ventas a la lista de ventas",()=>{
    expect(agregarventas(21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'])).toStrictEqual(ventas[6])

});

test('calcular monto', ()=>{
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])).toBe(320);

});

test('calcular promedio de venta',()=>{
    expect(ventaPromedio()).toBe(1645);
});