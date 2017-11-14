var aDatos = [{precio : 22},{precio : 14}, {precio : 50}]

if(true){
    const nIva = 1.22;

    /* aDatos.forEach(function (elem){
        precioFinal = elem.precio*nIva;
    }) */

    aDatos.forEach(elem => {
        let precioFinal = elem.precio*nIva; 
        console.log(
            `El precio final es:
            ${precioFinal}`
        )
    })
    console.log(nIva);
}
