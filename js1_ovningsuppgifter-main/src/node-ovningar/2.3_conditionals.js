
/***
 *       ______                   __ _  __   _                       __     
 *      / ____/____   ____   ____/ /(_)/ /_ (_)____   ____   ____ _ / /_____
 *     / /    / __ \ / __ \ / __  // // __// // __ \ / __ \ / __ `// // ___/
 *    / /___ / /_/ // / / // /_/ // // /_ / // /_/ // / / // /_/ // /(__  ) 
 *    \____/ \____//_/ /_/ \__,_//_/ \__//_/ \____//_/ /_/ \__,_//_//____/  
 *                                                                          
 */

// "Gunnar, skulle du kunna kila förbi affären och köpa ett par baguetter? Och om de har ägg, köp ett dussin vettja!"
//
//  ---
//
//  Gunnar: "De hade ägg! Här är bröden: 🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖"

/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */

const uppg1 = (number) => {

    // Om 'number' är 18 eller större, printa ut "Du är myndig"

}
// Uncomment below to run manually
// uppg1(18)


const uppg2 = (number) => {


    // Om 'number' är inom åldersspannet 13-19, printa ut "Du är en tonåring"


}
// Uncomment below to run manually
// uppg2(18)

const uppg3 = (age) => {

    // Om 'age' är 20 eller större, printa ut "Du är vuxen"
    // Om 'age' är inom åldersspannet 13-19, printa ut "Du är en tonåring"
    // Om 'age' är inom åldersspannet 0-12, printa ut "Du är ett barn"
    // I alla andra fall, skriv ut "ogiltigt värde, kan ej avgöra din ålderskategori"
    // Avslutningsvis, skriv ut "Tack för att du använt åldersbestämmaren 3000" (oavsett värde på age)
    // Fyll på utifrån den existerande strukturen nedan
    if (null) {
        // kod
    } else if (null) {
        // kod
    } else if (null) {
        // kod
    } else {
        // kod
    }
    // kod


}

// Uncomment below to run manually
// uppg3(5)


const uppg4 = (name) => {

    // Om name är "Gunnar", returnera true
    // Annars, returnera false

}
// Uncomment below to run manually
// uppg4()


const uppg5 = (month) => {

    // Använd ett switch-statement för att printa ut hur många dagar årets 6 första månader har
    // Du kan bortse från skottår
    // (month kan här ha värdena 'jan', 'feb', 'mar', 'apr', 'may', 'jun')
    // om det inte är en månad med något av ovan angivna värden, printa "ogiltigt värde"

}
// Uncomment to run manually
// uppg5('jan')



const uppg6 = (age) => {

    // Ersätt null, för att m.h.a. av ternary-operatorerna under returnera "myndig" resp. "omyndig" om villkoret är uppfyllt
    const isMyndig = (age >= 18) ? null : null;

    console.log(`Du är ${isMyndig}`)

}
// Uncomment to run manually
// uppg6(8)

/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */

const uppg7 = (weekday, hour) => {

    // En butik är öppen 07-21 på vardagar, 09-18 på lördagar och stängd på söndagar
    // Skriv logik som printar ut "öppet" respektive "stängt" beroende på variablerna weekday och hour 
    // (första timmen, dvs 7 respektive 9, räknas som öppen. Sista timmen, 21 & 18, räknas som stängd)
    // ('weekday' kommer kunna hålla värdena 'monday, 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')

}
// Uncomment to run manually
// uppg7("saturday", 15)



const uppg8 = (user, inputedUsername, inputedPassword) => {

    // I user finns attributen username samt password
    // Jämför dessa och returnera "Authorized" om de matchar inputedUsername respektive inputedPassword
    // Annars, returnera "UnAuthorized"

}
// Uncomment to run manually
// uppg8({ username: "Gunnar", password: "Hemligt" }, "Gunnar", "Hemligt")

/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */


const uppg9 = (player) => {

    // Använd valfri sökmotor för att finna information om en teknik kallad "Guard Clauses"
    // Nedan är logik för att hantera en spelare i ett spel, som skall utföra en attack
    // Mängden skada som spelaren gör skall sedan returneras
    // Skriv om logiken m.h.a. av s.k. Guard Clauses

    const baseAttack = 20;


    if (player !== null) {
        if (player.isFrozen) {
            return 0
        } else {
            if (!player.isDead) {
                if (player.selectedPrimaryWeapon) {
                    return baseAttack * player.selectedPrimaryWeapon.attackModifier
                } else {
                    return baseAttack;
                }
            } else {
                return 0;
            }
        }
    } else {
        throw new Exception("Player object null or undefined")
    }

}
// Uncomment to run manually
// uppg9("Gunnar")


module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9
}