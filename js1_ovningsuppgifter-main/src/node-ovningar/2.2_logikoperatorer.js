
/***
 *        __                  _  __                                   
 *       / /   ____   ____ _ (_)/ /__                                 
 *      / /   / __ \ / __ `// // //_/  ______                         
 *     / /___/ /_/ // /_/ // // ,<    /_____/                         
 *    /_____/\____/ \__, //_//_/|_|                                   
 *       ____      /____/                 __                          
 *      / __ \ ____   ___   _____ ____ _ / /_ ____   _____ ___   _____
 *     / / / // __ \ / _ \ / ___// __ `// __// __ \ / ___// _ \ / ___/
 *    / /_/ // /_/ //  __// /   / /_/ // /_ / /_/ // /   /  __// /    
 *    \____// .___/ \___//_/    \__,_/ \__/ \____//_/    \___//_/     
 *         /_/                                                        
 */

// (Finns det ologiska operatorer då också eller? Hö. Hö. Höhö)



/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */


const uppg1 = () => {

    const a = 5;
    const result = a > 0 && a < 10

    return null // ersätt med true eller false beroende på vad result ovan borde ha för värde

}
// Uncomment below to run manually
// uppg1()


const uppg2 = () => {

    const a = 15;
    const result = a > 0 && a < 10

    return null // ersätt med true eller false beroende på vad result ovan borde ha för värde

}
// Uncomment below to run manually
// uppg2()

const uppg3 = () => {

    const a = 0;
    const result = a > 10 || a < 5

    return null // ersätt med true eller false beroende på vad result ovan borde ha för värde
}

// Uncomment below to run manually
// uppg3()


const uppg4 = () => {

    const a = 7;
    const result = a > 10 || a < 5

    return null// ersätt med true eller false beroende på vad result ovan borde ha för värde
}
// Uncomment below to run manually
// uppg4()


const uppg5 = () => {

    const a = 15;
    const result = a > 10 || a < 5

    return null // ersätt med true eller false beroende på vad result ovan borde ha för värde
}
// Uncomment to run manually
// uppg5()



const uppg6 = () => {

    const a = 15 > 7;
    const result = !a;

    return null // ersätt med true eller false beroende på vad result ovan borde ha för värde
}
// Uncomment to run manually
// uppg6()

const uppg7 = (a, b) => {

    // ersätt null med ett uttryck som returnerar sant om a är sant, men inte b
    const result = null

    return result
}
// Uncomment to run manually
// uppg7(true, false)



const uppg8 = (a, b) => {

    // ersätt null med ett uttryck som returnerar sant endast om både a och b är sanna
    const result = null
    return result
}
// Uncomment to run manually
// uppg8(true, false)



/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */



const uppg9 = (username) => {

    // ersätt null med ett uttryck som tilldelar visitor värdet på username, 
    // Om visitor är odefinierad, null eller falsy - returnera strängen "gäst" m.h.a. short circuiting
    const visitor = null
    const greeting = "Hej " + visitor

    console.log(greeting)
}
// Uncomment to run manually
// uppg9("Gunnar")


const uppg10 = (username) => {

    // ersätt null med ett uttryck som tilldelar visitor värdet på username, 
    // Om visitor är odefinierad eller null - returnera strängen "gäst" m.h.a. short circuiting
    const visitor = null
    const greeting = "Hej " + visitor

    console.log(greeting)

}
// Uncomment to run manually
// uppg10("Gunnar")


const uppg11 = (username) => {

    // ersätt null med ett uttryck som console.log:ar username ifall det ej är odefinierat, null eller i övrigt falsy. Utnyttja short-circuting. 
    null

}
// Uncomment to run manually
// uppg11("Gunnar")


const uppg12 = () => {

    const a = 15 % 3 == 0 || "Hej" !== undefined && '5' === 5

    return null // skriv in true eller false beroende på om 'a' ovan är truthy eller falsy

}
// Uncomment to run manually
// uppg12()


const uppg13 = () => {

    // gruppera uttrycket med paranteser så att a blir falskt
    const a = 15 % 3 == 0 || "Hej" !== undefined && '5' === 5

    return null;

}
// Uncomment to run manually
// uppg13()


/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */


// "Nand"
const uppg14 = (a, b) => {

    // ersätt null med ett uttryck
    // som returnerar falskt om både a och b är sanna, men som returnerar sant i alla andra situationer
    const result = null

    return result

}
// Uncomment to run manually
// uppg14()

// "XOR"
const uppg15 = (a, b) => {

    // ersätt null med ett uttryck som returnerar sant om a eller b är sanna, men returnerar falskt om ingen av dem eller båda två är sanna 
    const result = null

    return result

}
// Uncomment to run manually
// uppg15({age: 18})

const uppg16 = () => {


    const a = console.log(15 % 3 == 0) || 7 && console.log(5)

    return null // Ersätt null med det värde a kommer få. (Utan att returnera variabeln a)

}
// Uncomment to run manually
// uppg16()

const uppg17 = () => {

    // Konvertera 0 från ett falsy värde till ett faktiskt false-värde, genom att peta in logiska operatorer
    return 0

}
// Uncomment to run manually
// uppg16()



module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11, uppg12,
    uppg13, uppg14, uppg15, uppg16, uppg17
}