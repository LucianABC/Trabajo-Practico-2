const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

let ventas = [
  [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ], //320,
  [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']], //320
  [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva']], //370 
  [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200']],//350
  [1000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200']], //300
  [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston']] //460
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

/* 2.cantidadVentasComponente(componente): recibe el nombre de un componente y 
devuelve la cantidad de veces que fue vendido. 
La lista de ventas no se pasa por parámetro, 
se asume que está identificada por la variable ventas.*/

const cantidadVentasComponente = (producto) => {
    const lista = ventas.filter(venta => {
      return venta[6].indexOf(producto) > -1;
    });
    return lista.length;
  }

  //////////////////////////////////////////////////////////////////

 /* 3. ventasVendedora(nombre): recibe por parámetro
 el nombre de una vendedora 
 y retorna el importe total de 
 ventas realizadas por dicha vendedora.
*/

const ventasVendedora = (vendedora)=> {

  const ventasPorVendedora  = ventas.filter(venta=>{
    return venta[4] == vendedora;
  });

  let ventaGenerada = 0;

    for (ventaPorVendedora of ventasPorVendedora){
      ventaGenerada += precioMaquina(ventaPorVendedora[6]);

 }

  return ventaGenerada;

}

/////////////////////////////////////////////////

/*5. ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas totales realizadas por una sucursal sin límite de fecha.*/
const ventasSucursal = (sucursal) => {
  let ventasXsucursal = 0;
  for (let venta of ventas) { 
      if (sucursal == venta[5]){
          ventasXsucursal += venta[7]
      }
  }
  return ventasXsucursal
};



/*7. ventaPromedio(): Debe retornar el importe promedio por venta, como un número entero sin decimales redondeado siempre para abajo.*/

const ventaPromedio = () =>{
  let suma; 
  for (let componente of precios) {
    suma += (cantidadVentasComponente(componente[0]))*componente[1]
  }

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
      
  
    
  venta.push(dia, mes, año, vendedora, sucursal, componentes);
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
  cantidadVentasComponente,
  ventasVendedora,
    

}