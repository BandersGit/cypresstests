
/***
 *       ____                             __                          
 *      / __ \ ____   ___   _____ ____ _ / /_ ____   _____ ___   _____
 *     / / / // __ \ / _ \ / ___// __ `// __// __ \ / ___// _ \ / ___/
 *    / /_/ // /_/ //  __// /   / /_/ // /_ / /_/ // /   /  __// /    
 *    \____// .___/ \___//_/    \__,_/ \__/ \____//_/    \___//_/     
 *         /_/                                                        
 */

// ("Täljare och nämnare"? "Prioriteringsregler"? Skulle man inte slippa sån't efter högstadiet?)


/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */


const uppg1 = () => {

    const a = 3;
    const b = 4;
    const sum = 0 // ersätt 0 med ett uttryck som adderar variablerna 'a' och 'b';

    return sum
}
// Uncomment below to run manually
// uppg1()


const uppg2 = () => {

    const a = 3;
    const b = 4;
    const c = 5;
    const sum = 0 // ersätt 0 med ett uttryck som adderar variablerna 'a', 'b' och 'c';

    return sum
}
// Uncomment below to run manually
// uppg2()

const uppg3 = () => {

    const a = 10;
    const b = 4;
    const difference = 0 // ersätt 0 med ett uttryck som subtraherar variabeln 'b' från 'a';

    return difference
}

// Uncomment below to run manually
// uppg3()


const uppg4 = () => {

    const a = 10;
    const b = 4;
    const result = 0 // ersätt 0 med ett uttryck som multiplicerar variabeln 'a' med 'b';

    return result
}
// Uncomment below to run manually
// uppg4()


const uppg5 = () => {

    const a = 10;
    const b = 5;
    const result = 0 // ersätt 0 med ett uttryck som dividerar variabeln 'a' med 'b';

    return result
}
// Uncomment to run manually
// uppg5()



const uppg6 = () => {

    // Kvoten av 10 / 3 kan skrivas som 3.333, eller vid heltalsdivision, 3 med rest 1. Dvs, 1 "blir över"
    const a = 10;
    const b = 3;
    const result = 0 // ersätt 0 med ett uttryck som returnerar resten från heltalsdivisionen a / b

    return result
}
// Uncomment to run manually
// uppg6()

const uppg7 = () => {

    const a = 3;
    const b = 4;
    const c = 7;

    // Ersätt 0 med ett grupperat uttryck (alltså m.h.a. paranteser), 
    // så att du med _en_ additionsoperator och _en_ multiplikationsoperator tillsammans med variablerna ovan få ut resultatet 49
    const result = 0

    return result
}
// Uncomment to run manually
// uppg7()



const uppg8 = () => {

    const a = "Hello"
    const b = " "
    const c = "World";
    const result = 0 // ersätt noll med ett uttryck som slår samman ("konkatenerar") sträng-värdena i variablerna 'a', 'b' och 'c'; 

    return result
}
// Uncomment to run manually
// uppg8()



/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */



const uppg9 = () => {

    const a = 10;
    const b = 3;
    const result = 0 // ersätt 0 med ett uttryck som upphöjer a med b

    return result
}
// Uncomment to run manually
// uppg9()

const uppg10 = () => {

    const a = 5
    const result = 0 // ersätt 0 med ett uttryck som negerar a (dess motsvarande negativa värde, så att t.ex. 5 blir -5)

    return result
}
// Uncomment to run manually
// uppg10()

const uppg11 = () => {

    let a = 1;

    a // Modifiera raden med en operator som ökar värdet på a med 1.

    return a;

}
// Uncomment to run manually
// uppg11()

const uppg12 = () => {

    let a = 5;

    a // Modifiera raden med en operator som minskar värdet på a med 1.

    return a;

}
// Uncomment to run manually
// uppg12()

const uppg13 = () => {

    const x = "3";

    const y = x // Modifiera raden med en unary-operator, som gör om a till ett nummer, så att i det här fallet y + y ger 6 (3 + 3) och inte "33" ("3" + "3").

    return y + y

}
// Uncomment to run manually
// uppg13()

const uppg14 = () => {

    let a = 5;

    a // addera 3 till a genom "addition assignment", (a += b), 

    return a;

}
// Uncomment to run manually
// uppg14()

const uppg15 = () => {

    const alice = { fname: "Alice", lname: "Alicedotter", age: 28 }
    const bob = { fname: "Bob", lname: "Bobsson", age: 39 }
    const charlie = { fname: "Charlie", lname: "Charlesqvist", age: 20 }

    // Plocka ut och addera ihop totalåldern från samtliga användare ovan till en variabel totalAge
    // (Du kan göra det över flera rader om du önskar)


    return totalAge

}
// Uncomment to run manually
// uppg15()

const uppg16 = () => {

    const persons = [
        { fname: "Alice", lname: "Alicedotter", age: 28 },
        { fname: "Bob", lname: "Bobsson", age: 39 },
        { fname: "Charlie", lname: "Charlesqvist", age: 20 }
    ]

    // Ta fram snittåldern från personerna i persons-arrayen
    // (Du kan göra det över flera rader om du önskar)

    return averageAge

}
// Uncomment to run manually
// uppg16()

const uppg17 = () => {

    let a = 4;

    let b = a; // lägg till den här raden operator(er), så att därefter 'a' är 5 och 'b' är 4

    return { a, b };

}
// Uncomment to run manually
// uppg17()

const uppg18 = () => {

    let a = 4;

    let b = a; // lägg till den här raden operator(er), så att därefter 'a' är 5 och 'b' är 5

    return { a, b };

}
// Uncomment to run manually
// uppg18()


const uppg19 = (a, b) => {

    // Skriv valfri kod så att värdena på a & b byter plats / swappas.

    return { a, b };

}
// Uncomment to run manually
// uppg19(3, 7)
// Obs! Koden skall funka även om du byter ut 3 och 7 ovan mot andra siffror


const uppg20 = (player, damage) => {

    // Skriv valfri kod så att värdet på player.health minskar med värdet på damage

    return player

}
// Uncomment to run manually
// uppg20({username: "SuperSlayer" , health: 100}, 25)
// Obs! Koden skall funka även om du byter ut siffrorna ovan




/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */

// En del av de här uppgifterna kommer vara svåra - och ibland kräva egen research




const uppg21 = (a, b) => {

    // Skriv valfri kod så att värdena på a & b byter plats / swappas, likt i uppg19
    // Den här gången får du dock _inte_ deklarera några nya variabler, bara arbeta med a & b


    return { a, b };

}


// Hoppsan! Vi har fått slut på både radbrytningar och semikolon. Inflationstider och så...
// Vilket är otur, för i den här uppgiften skulle vi göra flera saker:
// till objektet person, skall vi lägga till attributet key och dess value
// för att sedan returnera det modifierade objektet
// Kanske kan den obskyra komma-operatorn komma till nytta? 
// (Den gör mer verklig nytta senare med for-loopar och möjligen i samband med vissa lambdas till s.k. Higher-Order Functions. Men det är framtiden det...
const uppg22 = (person, key, value) => {
    return null
}
// Uncomment to run manually
// (uppg22({ age: 12 }, "name", "Gunnar"))


const uppg23 = (userPerm) => {

    // Tabell över möjliga användarbehörigheter i filsystem, UNIX-style
    const NONE = 0              // 000
    const EXECUTE = 1           // 001
    const WRITE = 2             // 010
    // EXEC + WRITE, 3          // 011
    const READ = 4              // 100
    // READ + EXEC, 5           // 101
    // READ + WRITE, 6          // 110
    // READ + WRITE + EXEC, 7   // 111

    // Tilldela användaren WRITE-behörighet m.h.a. en bitwise-operator
    // Obs! Vi vet inte vilka behörigheter som kan tänkas ligga i userPerm från början,
    // inkl. en redan existerande WRITE-behörighet. 

    return userPerm;

}
// Uncomment to run manually
//uppg23(5)


const uppg24 = (userPerm) => {

    // Tabell över möjliga användarbehörigheter i filsystem, UNIX-style
    const NONE = 0              // 000
    const EXECUTE = 1           // 001
    const WRITE = 2             // 010
    // EXEC & WRITE, 3          // 011
    const READ = 4              // 100
    // READ & EXEC, 5           // 101
    // READ & WRITE, 6          // 110
    // READ, WRITE & EXEC, 7    // 111

    // Ersätt 0 med ett uttryck, 
    // som m.h.a. en bitwise-operator togglar READ-behörigheten från userPerm
    // Obs! Vi vet inte vilka behörigheter som kan tänkas ligga i userPerm från början,
    // inkl. en redan existerande READ-behörighet

    return userPerm;

}
// Uncomment to run manually
// uppg24(5)


const uppg25 = (userPerm) => {

    // Tabell över möjliga användarbehörigheter i filsystem, UNIX-style
    const NONE = 0              // 000
    const EXECUTE = 1           // 001
    const WRITE = 2             // 010
    // EXEC + WRITE, 3          // 011
    const READ = 4              // 100
    // READ + EXEC, 5           // 101
    // READ + WRITE, 6          // 110
    // READ + WRITE + EXEC, 7   // 111

    // Ersätt 0 med ett uttryck, 
    // som m.h.a. en bitwise-operator berättar om användaren har EXECUTE-behörighet
    // Genom att returnera 0 som så ej är fallet alt. det tabell-värdet för rättigheten om sant
    // (t.ex. 7 och EXECUTE skall ge 1 eftersom EXECUTE ingår i 7, medan 6 och EXECUTE skall ge 0 eftersom 6 inte innehåller EXECUTE )


}
// Uncomment to run manually
// uppg25(5)


const uppg26 = (value) => {
    return value // använd bitwise-operatorer, för att trunkera värdet mot 0. (om 3.7 -> 3, om -3.7 -> 3)
}
// Uncomment to run manually
//uppg26(-3.7)


const uppg27 = (userPerm) => {

    // Tabell över möjliga användarbehörigheter i filsystem, UNIX-style
    const NONE = 0              // 000
    const EXECUTE = 1           // 001
    const WRITE = 2             // 010
    // EXEC & WRITE, 3          // 011
    const READ = 4              // 100
    // READ & EXEC, 5           // 101
    // READ & WRITE, 6          // 110
    // READ, WRITE & EXEC, 7    // 111

    // Ersätt 0 med ett uttryck, 
    // som m.h.a. en bitwise-operator plockar bort READ-behörigheten från userPerm
    // Obs! Vi vet inte vilka behörigheter som kan tänkas ligga i userPerm från början,
    // inkl. eller exkl. en redan existerande READ-behörighet

    return userPerm;

}
// Uncomment to run manually
// uppg27(5)


const uppg28 = (a, b) => {

    // Skriv valfri kod så att värdena på a & b byter plats / swappas, likt i uppg19 och uppg21
    // Den här gången får du dock _inte_ deklarera några nya variabler,
    // utan du får enbart använda bitwise-operatorer


    return { a, b };

}
// Uncomment to run manually
// uppg28(3, 8)

module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11, uppg12,
    uppg13, uppg14, uppg15, uppg16, uppg17, uppg18, uppg19, uppg20, uppg21, uppg22, uppg23, uppg24,
    uppg25, uppg26, uppg27, uppg28
}