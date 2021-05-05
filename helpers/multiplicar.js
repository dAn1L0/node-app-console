const fs = require('fs');
const colors = require('colors');



const crearArchivo = ( base = 1, listar, hasta=10 ) => {

  return new Promise( ( resolve, reject ) => {

    try {

      if( typeof(base) !== 'number' ) { 
        return reject('Debe de ingresar un número')
      }

      let salida = '';
      let consola = '';

      for (let i = 1; i <= hasta; i++) {
        ( i === hasta )
        ? salida += `${ base } x ${ i } = ${ base * i }`
        : salida += `${ base } x ${ i } = ${ base * i }\n`
      }

      for (let i = 1; i <= hasta; i++) {
        ( i === hasta )
        ? consola += `${ colors.blue(base) } x ${ i } = ${ base * i }`
        : consola += `${ colors.blue(base) } x ${ i } = ${ base * i }\n`
      }

      if( listar ){
        console.log('=================='.green);
        console.log('    Tabla del:', colors.cyan(base) );
        console.log('=================='.green);
        
        console.log(consola);
      }

      fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

      resolve(`Archivo tabla-${ base }.txt`);

    } catch (err) {
      reject( err );
    }

  })

}

module.exports = {
  crearArchivo,
}