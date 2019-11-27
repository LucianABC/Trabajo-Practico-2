const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

let ventas = [
  [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],320 ],
  [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],320 ],
  [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'],370 ],
  [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'],350 ],
  [1000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'], 300 ],
  [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'],460 ]
];

const precios = [
  [ 'Monitor GPRS 3000', 200 ],
  [ 'Motherboard ASUS 1500', 120 ],
  [ 'Monitor ASC 543', 250 ],
  [ 'Motherboard ASUS 1200', 100 ],
  [ 'Motherboard MZI', 30 ],
  [ 'HDD Toyiva', 90 ],
  [ 'HDD Wezter Dishital', 75 ],
  [ 'RAM Quinston', 110 ],
  [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito', 'Recoleta'];



/* 1. precioMaquina(componentes): recibe un array de componentes y devuelve
el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.*/

const precioMaquina = (componentes) => {
  let montoTotal = 0;
    for (let componente of componentes) { 
      for (let precio of precios) {
        if (componente == precio[0]){
          montoTotal += precio[1];
        }
      }
    }
  return montoTotal
};

/*7. ventaPromedio(): Debe retornar el importe promedio por venta, como un número entero sin decimales redondeado siempre para abajo.*/

const ventaPromedio = () =>{
  let suma =  ventas.reduce((acumulador,venta)=>{
    return acumulador + venta[7];
  },0);
    let promedio = Math.floor(suma / ventas.length);
    return promedio
};


// 8.obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 999999999

const obtenerIdVenta=()=>{
  let id= Math.floor(Math.random()* (999999999-100000000))+100000000;
  return id
};

/*9. agregarVentas(): ecibe por parámetro todos los datos de una venta, y los agrega en el array de ventas.
 Al igual que las ventas que ya están previamente creadas, además de estos datos necesitamos agregar el primer dato que es un identificador de la venta.
Para agregar este dato, tenemos que usar la función desarrollada en el punto anterior */

const agregarventas =(dia, mes, año, vendedora, sucursal, componentes=[])=>{
  
  let venta = [];
  let id = obtenerIdVenta();
  venta.push(id);

  if(typeof dia!= "number" && mes!= "number" && año!= "number"){
    throw "Ingresa la fecha en numeros"
  } else if( vendedoras.indexOf(vendedora)== -1){
    throw "El numero de vendedora no existe"
  } else if( sucursales.indexOf(sucursal)== -1){
    throw "El numero de sucursal no exite"
  };
      
  let costoTotal = precioMaquina(componentes);
    
  venta.push(dia, mes, año, vendedora, sucursal, componentes, costoTotal);
  ventas.push(venta);
  
  return venta
};







module.exports = {
  vendedoras,
  ventas,
  precios,
  sucursales,
  obtenerIdVenta,
  agregarventas,
  precioMaquina,
  ventaPromedio,
    
}