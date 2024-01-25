
/***
 *        __                                    
 *       / /   ____   ____   ____   ____ _ _____
 *      / /   / __ \ / __ \ / __ \ / __ `// ___/
 *     / /___/ /_/ // /_/ // /_/ // /_/ // /    
 *    /_____/\____/ \____// .___/ \__,_//_/     
 *                       /_/                    
 */

// "Snurrigt värre!"

/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */

const uppg1 = () => {

    // Använd en for-loop för att printa ut värdena 0-10

}
// Uncomment below to run manually
// uppg1()


const uppg2 = () => {

    // Använd en for-loop för att printa ut alla siffror från 10 till 1. (10, 9, 8 ... 2, 1)

}
// Uncomment below to run manually
// uppg2()

const uppg3 = (startNumber, endNumber) => {

    // Använd en for-loop för att printa ut alla siffror mellan från 'startNumber' till '100'


}
// Uncomment below to run manually
// uppg3(5, 10)


const uppg4 = (startNumber, endNumber) => {

    // Använd en while-loop för att printa ut alla siffror mellan från 'startNumber' till '100'

}
// Uncomment below to run manually
// uppg4(3, 6)


const uppg5 = () => {

    // använd en for-loop för att printa ut alla jämna tal från 1-10

}
// Uncomment to run manually
// uppg5()


const uppg6 = () => {

    // summera ihop alla talen från 1 - 20 med en loop, och printa sedan ut slutresultatet

}
// Uncomment to run manually
// uppg6()

/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */


const uppg7 = (numbersList) => {

    let newNumbersList = [];

    // loopa igenom numbersList, kopiera över numrena till newNumbersList
    // numrenas värde skall dubbleras till den nya listan


    return newNumbersList

}
// Uncomment to run manually
// uppg7([2, 5, 87, 12, 124, 20, 93])


const uppg8 = (list) => {

    // använd en vanlig for-loop för att printa ut alla värden i en lista


}
// Uncomment to run manually
// uppg8(["Hej", "Båt", "Bil", "Gurka"])


const uppg9 = (list) => {

    // använd en "for of"-loop för att printa ut alla värden i en lista

}
// Uncomment to run manually
// uppg9(["Hej", "Båt", "Bil", "Gurka"])


const uppg10 = (list) => {

    // Det här är vårt turnumber (Japp, jag  valde ditt turnummer åt dig. Varsågod!)
    const luckyNumber = 17;
    let randomNumber = -1
    let loopCounter = 0;

    // På kodraden nedan kommer Number kommer tilldelas ett slumpmässigt tal mellan 0 och 20
    // Omslut kodraden med en loop, och loopa den tills den matchar vårt turnumber.
    randomNumber = Math.floor(Math.random() * 20);

    // Se också till att skriva kod, så att du håller räkningen på hur många varv det tog

    return loopCounter;

}
// Uncomment to run manually
// uppg10()


const uppg11 = (list) => {

    // Fizzbuzz!
    // loopa igenom och printa ut 1-30
    // Varje tal jämnt delbart med 3 ersätter du med "fizz"
    // Varje tal jämmnt delbart med 5 ersätter du med "buzz"
    // Varje tal jämnt delbart med både 3 och 5 ersätter du med "fizzbuzz"
    // (1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, ... etc.)

}
// Uncomment to run manually
// uppg11()


/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */


const uppg12 = (person) => {

    // Person är ett objekt. Loopa igenom det med en for-in-loop
    // och printa ut namnet alla attributen ("fname", "lname", "age" t.ex.)

}
// Uncomment to run manually
// uppg12({fname: "Gunnar", lname: "Gunnarsson", age: 52})


const uppg13 = (person) => {

    // Person är ett objekt. Loopa igenom det med en for-in-loop
    // och printa ut på formatet `attributsnamn: attributsvärde`, t.ex. "fname: Gunnar"

}
// Uncomment to run manually
// uppg13({fname: "Gunnar", lname: "Gunnarsson", age: 52})


const uppg14 = (start, end) => {

    // Primtal! (Yes, det kommer alltid någon sådan uppgift...)
    // In får du ett startvärde och ett slutvärde, (inkl. värdena på gränsen)
    // ut returnerar du en lista med alla i intervallet som var primtal

}
// Uncomment to run manually
// uppg14([1, 6, 13, 3, 5, 23, 21])


module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11, uppg12, uppg13, uppg14
}



