import { reject } from "async"

const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve('Tenemos un valor en la promesa')
            reject('REJECT en mi promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')
        // Esto dice, lo que sea que resuelva exitosamente
        //va a ser almacenado en esta variable respuesta:
        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin')

        return 'Fin de medir tiempo async'
    } catch( error) {
        // Un return en una promesa, significa
        // Que está retornando el valor esperado
        // Y, por lo tanto, pasará a ser recogido por el then
        // De quien maneje la promesa, no por el catch.
        // return 'Catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }

    
    // throw 'Error en medirTiempoAsync'
}

medirTiempoAsync()
    .then(valor => console.log( 'THEN exitoso:', valor ))
    .catch( err => console.log('Error:',err))
