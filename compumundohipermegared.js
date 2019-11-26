const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
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

const sucursales = ['Centro', 'Caballito'];




// 8.obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 999999999


const obtenerIdVenta=()=>{
  let id= Math.floor(Math.random)* (999999999-100000000)+100000000
  return id
}

console.log( obtenerIdVenta()); // 386936759


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
  }
 let costoTotal = precioMaquina(componentes)
 venta.push(dia, mes, año, vendedora, sucursal, componentes, costoTotal);
 ventas.push(venta);
 return venta
}

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


module.exports = {

  vendedoras,
  ventas,
  precios,
  sucursales,
  obtenerIdVenta,
  agregarventas,
  precioMaquina

}