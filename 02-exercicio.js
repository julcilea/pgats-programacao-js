 var dogsName = ['     Thor ', 'hela', 'rEx', 'branquinhA ', '  Tunico cheroso']

for (let index = 0; index < dogsName.length; index++) {
    const element = dogsName[index].trim();

    console.log(`\n====== Validação Nome do Dog =======`)
    console.log(`Nome original: ${element}`)

    if(element.split(" ").length < 2){
        console.log(`Nome formatado: ${element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}`)
    } else {
        console.log(`Nome formatado: Nome inválido`)
    }   
}
    
