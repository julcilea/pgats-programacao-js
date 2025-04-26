 var dogsName = ['     Thor ', 'he1La', 'rEx@', 'branquinhA ', '  Tunico cheroso']

for (let index = 0; index < dogsName.length; index++) {
    const element = dogsName[index].trim();

    console.log(`\n====== Validação Nome do Dog =======`)
    console.log(`Nome original: ${dogsName[index]}`)

    if(element.split(" ").length < 2){
        console.log(`Nome formatado: ${element.charAt(0).toUpperCase() + element.slice(1).toLowerCase().replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "")}`)
    } else {
        console.log(`Nome formatado: Nome inválido`)
    }   
}
    
