
import fs from 'fs'

const aPagos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ]


//Crear un mensaje con timer de 7 seg al comienzo del codigo
setTimeout(()=> {
    console.log("Intervalo de 7 segundos.")
},7000)


    //Recorrer e imprimir en consola con el método foreach, mostrando cliente e importe 

    aPagos.forEach(element => {
        console.log("Cliente: "+element.cliente)
        console.log("Importe: "+element.importe)
        console.log("*************************")
    });

    //Ordenar por cliente utilizando sort 
    console.log(aPagos.sort( (a, b) => a.cliente<b.cliente))
  
    

//Nuevo array con clientes que empizan con letra 'R' usando la funcion filter
const array1 = aPagos.filter(dato => dato.cliente.startsWith("R"))
console.log(array1)


//Nuevo array con la misma estructura de aPagos, pero aumentando un 30% el importe.
function aumentar(coef, aPagos){
    return aPagos.map (dato =>({ id:dato.id,numero: dato.numero, importe: dato.importe*coef,cliente:dato.cliente}))
}
const array2=aumentar(1.30,aPagos)
console.log( array2)

//Leer datos.txt en forma sincrónica,
const datos = fs.readFileSync( 'src/datos.txt' , 'utf-8' )
console .log(datos)

//y agregar a este archivo la frase "nuevo texto"
fs.appendFileSync( 'src/datos.txt' , '\nNuevo texto\n' )