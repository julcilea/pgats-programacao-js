 function validarNomeDog(nome) {
    console.log(`====== Validação Nome do Dog =======`)
    console.log(`Nome original: ${nome}`)

    const element = nome.trim();
      
    if(element.split(" ").length < 2){
        console.log(`Nome formatado: ${element.charAt(0).toUpperCase() + element.slice(1).toLowerCase().replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "")}`)
    } else {
        console.log(`Nome formatado: Nome inválido`)
    }   
}

validarNomeDog('     Thor ')
validarNomeDog('he1La')
validarNomeDog('rEx@')
validarNomeDog('branquinhA ')
validarNomeDog('  Tunico cheroso')