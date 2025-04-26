/**
 * mais de uma condição
 */

const peso = 10

switch(peso){
    case 10:
        console.log(`porte: P`)
        break
    case 20:  
        console.log(`porte: M`)
        break  
    case 30:  
        console.log(`porte: G`)
        break 
    default:
        console.log(`porte: ND`)     
}

switch(true){
    case peso >= 10:
        console.log(`porte: P`)
        break
    case peso >= 20:  
        console.log(`porte: M`)
        break  
    case peso >= 30:  
        console.log(`porte: G`)
        break 
    default:
        console.log(`porte: ND`)     
}