
/***
 *     _    __              _         __     __           
 *    | |  / /____ _ _____ (_)____ _ / /_   / /___   _____
 *    | | / // __ `// ___// // __ `// __ \ / // _ \ / ___/
 *    | |/ // /_/ // /   / // /_/ // /_/ // //  __// /    
 *    |___/ \__,_//_/   /_/ \__,_//_.___//_/ \___//_/     
 *                                                        
 */

// ("Vad är din favoritvariabel? Svårt att säga, det varierar lite". (Haskell: (-_-)))


/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */


const uppg1 = () => {

    // Här skapar / deklarerar du dina variabler "age", "firstname" samt "city" 
    // samt tilldelar dem relevanta värden av relevant datatyp

    // Den här raden kan du ignorera just nu och i de kommande uppgifterna
    return { age, firstname, city }
}
// Uncomment below to run manually
// uppg1()


const uppg2 = () => {

    // Variabeln "hasPet" skall enbart kunna vara sann eller falsk
    // Skapa variabeln "hasPet" och tilldela den värdet sant eller falskt
    // Skriv namnet på den datatyp som hasPet är, som värde till hasPetType

    return { hasPet, hasPetType }
}
// Uncomment below to run manually
// uppg2()

const uppg3 = () => {

    // skriv ut namnet 'Alice' i consolen


}
// Uncomment below to run manually
// uppg3()


const uppg4 = () => {

    // Skapa en variabel "nameOfDeclaration" med ett värde av typen sträng,
    // och där strängens värde är namnet på någon av de två variabeldeklarationerna där man kan ändra på värdet i efterhand

    return nameOfDeclaration;
}
// Uncomment below to run manually
// uppg4()


const uppg5 = () => {

    let age = 5;

    // Byt här nedan värdet på variabeln från 5 till en annan siffra


    return age
}
// Uncomment to run manually
// uppg5()

const uppg6 = () => {

    // Skapa en lista / array med variabelnamnet "numberList", innehållande 4 valfria siffror
    // Printa ut listan i consolen


    return numberList
}
// Uncomment to run manually
// uppg6()

const uppg7 = () => {

    /*** 
     * Skapa två variabler, age & name
     * tilldela dem värdena 27 respektive "Alice"
     * Sammanför dina variabler age & name i ett objekt
     * Som du tilldelar till en tredje variabel, "person"
     * Skriv ut personens namn i konsolen (via person-objektet)
     * Skriv ut personens ålder i konsolen (via person-objektet)
    */

    return person
}
// Uncomment to run manually
// uppg7()

const uppg8 = () => {

    /***
     * Skapa ett objekt, med attributen age och name (utan att skapa enskilda variabler för dessa först)
     * age skall ha värdet 39 och name ha värdet "Johan"
     * tilldela objektet till en variabel 'person'
     */

    return person
}
// Uncomment to run manually
// uppg8()

const uppg9 = () => {

    /**
     * Från variabeln 'possibleAgesList' och variabeln 'person'
     * printa ut det andra värdet ur listan och printa ut värdet på attributet fname hos personen
     */
    const possibleAgesList = [12, 45, 64]
    const person = { age: 27, fname: "Alice", lname: "Alicedottir" }

}
// Uncomment to run manually
// uppg9()

const uppg10 = () => {

    // initialisera en variabel age, med en sådan variabeldeklaration så att resterande kod fungerar


    // Modifiera ej nedanstående koden
    // De två närmsta raderna ser bara till att testet misslyckas om vi inte initializerat något alls ovan
    if (age === undefined)
        throw new Error()

    age = 12;
}
// Uncomment to run manually
// uppg10()

const uppg11 = () => {

    // Initializera en variabel age med en sådan variabeldeklaration så att resterande kod _ej_ fungerar

    // Modifiera ej den här koden
    age = 12;
}
// Uncomment to run manually
// uppg11()

const uppg12 = () => {

    // Initializera en variabel age med värdet 5 och med en sådan variabeldeklaration så att resterande kod fungerar
    // Fundera över lämpligheten i att använda den här sortens deklaration, och mer allmänt när vilken sorts deklaration kan vara vettig

    // Modifiera ej nedanstående koden
    // De två närmsta raderna ser bara till att testet misslyckas om vi inte deklerarat något alls ovan
    if (age === undefined)
        throw new Error()

    var age = 12;
}
// Uncomment to run manually
//uppg12()



/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */



const uppg13 = (keyName, value) => {

    /*** 
     * I den här uppgiften får du två variabler redan från början, keyName och value
     * Du kan använda "keyName" och "value" som variabler som vanligt. Men, deras värde kan vara olika 
     * Du kan ändra dem genom att ändra nedanför där det nu står uppg13("name", "Mats")
     * De värdena kan man ändra, för att variablerna skall hålla andra värden i den här uppgiften
     * Just nu finns ett tomt objekt som tilldelas till variabeln 'person'
     * Modifiera koden, så att objektet istället håller ett key-value-par
     * Där det värde som 'keyName' håller blir key
     * och det värde som 'value' håller blir value
     * Om t.ex. 'keyName' har värdet "name" och value har värdet "Gunnar", så skall det skapas ett objekt {"name": "Gunnar"}
     */


    // Provkör gärna och dubbelkolla att objektet blivit korrekt
    // Om ej - sök efter skillnaden på 'dot notation' och 'bracket notation'
    console.log(person)
    return person
}
/***
 * Uncomment below to run manually.
 * Här kan du experimentera med olika värden som kan användas i uppgiften
 *  Du kan t.ex. modifiera förifyllda uppg13("name", "Mats") till t.ex. uppg13("age", 12)
 */
// uppg13("name", "Mats")

const uppg14 = (keyName, newValue) => {

    /*** 
     * Precis som i uppgiften ovan får du här in två variabler, keyName & newValue
     * I den här uppgiften har 'person' redan ett antal olika attribut
     * ändra på det attribut som matchar keyName, till dess nya värde den får från newValue
     * if-satser, switch-statements eller liknande flödeslogik är ej en godkänd lösning.
     */

    const person = {
        fname: "Gunilla",
        lname: "Gunillasdottir",
        age: 17,
        city: 'Abisko',
        occupation: 'Nurse',
        email: 'gunilla@example.org',
        phone: '+46-12345678',
        favoriteFood: 'Pasta',
        favoriteDrink: 'Milk',
        favoriteColor: 'Green',
        favoriteBand: 'Torsson',
        favoriteAuthor: 'Moa Martinsson',
        favoritePoet: 'Nils Ferlin',
        favoriteEpos: 'Aniara',
        favoriteMovies: [
            'Hur avlångt är egentligen detta land?',
            'Motorsågen',
            'Smala sussie',
            'Kvarteret Korpen',
            'Mannen på taket',
            'Sånger från andra våningen'
        ]
    }

    // Skriv här nedan kod, för att ändra värde på det attribut 
    // som matchar 'keyName', innan person returneras

    return person

}
/***
 * Uncomment below to run manually.
 * Här kan du experimentera med olika värden som kan användas i uppgiften
 * Du kan t.ex. modifiera förifyllda uppg14("favoriteFood", "Hamburger") till t.ex. uppg14("favoriteDrink", "Guarana Antartica")
 */
// uppg14("favoriteFood", "Hamburger")




module.exports = { uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11, uppg12, uppg13, uppg14 }