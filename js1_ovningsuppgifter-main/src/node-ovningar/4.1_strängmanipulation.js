
/***
 *       _____  __         _   _                                              
 *      / ___/ / /_ _____ (_)_(_)____   ____ _                                
 *      \__ \ / __// ___// __ `// __ \ / __ `/______                          
 *     ___/ // /_ / /   / /_/ // / / // /_/ //_____/                          
 *    /____/ \__//_/    \__,_//_/ /_/ \__, /                                  
 *        __  ___               _    /____/      __        __   _             
 *       /  |/  /____ _ ____   (_)____   __  __ / /____ _ / /_ (_)____   ____ 
 *      / /|_/ // __ `// __ \ / // __ \ / / / // // __ `// __// // __ \ / __ \
 *     / /  / // /_/ // / / // // /_/ // /_/ // // /_/ // /_ / // /_/ // / / /
 *    /_/  /_/ \__,_//_/ /_//_// .___/ \__,_//_/ \__,_/ \__//_/ \____//_/ /_/ 
 *                            /_/                                             
 */

// "Strängarna borde testa att vara lite mer källkritiska."

/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */


//                              OBS!

// Det här är i hög grad en träning också i att självständigt läsa och vänja sig med dokumentation
// Det finns gott om metoder kopplade till strängar, och många kommer man att behöva titta upp när man programmerar
// Besök https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/
// Under sidomenyn "Methods" finns ett uppslag med metoder kopplade till strängar, och under properties nämns
// det särskilda attributet .length som anger hur många tecken ett ord innehåller.
// Kika runt bland de sidomenyerna för att se hur du ska kunna lösa de olika uppgifterna, genom att se om du kan hitta
// någon metod där som kan tänkas göra det du behöver göra för att läsa uppgiften

const uppg1 = () => {

    const word = "Hej"

    // Gör word till enbart stora bokstäver ("Hej" -> "HEJ")

    return null // returnera en variabel som håller ditt resultat

}
// Uncomment below to run manually
// uppg1()


const uppg2 = () => {

    const word = "Tjena"

    // Gör word till enbart små bokstäver ("Tjena" -> "tjena")

    return null // returnera en variabel som håller ditt resultat
}
// Uncomment below to run manually
// uppg2()

const uppg3 = (word) => {

    // Räkna antalet bokstäver i ordet

    return null // returnera en variabel som håller ditt resultat
}
// Uncomment below to run manually
// uppg3("Bil")


const uppg4 = (word) => {

    return null // returnera true eller false beroende på om word slutar med bokstaven "a"
}
// Uncomment below to run manually
// uppg4("mygga")


const uppg5 = (word) => {

    return null // returnera true eller false beroende på om word börjar med bokstaven "a"
}
// Uncomment to run manually
// uppg5("arbetskamrat")



const uppg6 = (sentence) => {

    return null // returnera true eller false beroende på om sentence innehåller "cykel"
}
// Uncomment to run manually
// uppg6("Jag har en bil, en cykel och en båt")


/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */


const uppg7 = (sentence) => {

    // returnera en ny mening där alla "nåt" i sentence har ersatts med "något"

    return null

}
// Uncomment to run manually
// uppg7("Jag har handlat nåt i affären, men det är nåt som är hemligt fram tills din födelsedag")

const uppg8 = (number) => {

    const word = "Hej"

    // Skapa en ny sträng som håller word repeterad så många gånger som number är (T.ex. om number är 3, "Hej" -> "HejHejHej")

    return null // returnera en variabel som håller ditt resultat

}
// Uncomment to run manually
// uppg8(5)

const uppg9 = () => {

    const sentence = "Det här är en exempelmening"

    // Splitta upp meningen ovan till en lista, där varje enskilt ord blir ett eget element ("Det här är en exempelmening" -> ["Det","här","är","en","exempelmening"])

    return null // returnera en variabel som håller ditt resultat

}
// Uncomment to run manually
// uppg9("Gunnar")

const uppg10 = (sentence) => {

    return null // returnera de 10 första tecknen i sentence


}
// Uncomment to run manually
// uppg10("Det här är en exempelmening")


/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */


const uppg11 = (number) => {

    // En vanlig kodtest-uppgift är att konvertera ett vanligt tal i vårt vanliga decimala talsystem, till romerska siffror (Som en sträng, "III", "IV" etc.)
    // Du hittar en tabell här: https://www.javatpoint.com/roman-number-1-to-100
    // En lösning involverar enbart String-metoderna repeat och replace se om du kan hitta den
    // Din lösning skall ha stöd för (minst) värden upp till 50;

    const base = "I";

    return null // returnera den romerska siffran

}
// Uncomment to run manually
// uppg11(13)


const uppg12 = (sentence) => {

    // I en del språk (t.ex. tyska) versaliserar man alla substantiv 
    // (t.ex. "Ich habe ein Auto geschenkt", där "Auto" betyder bil och därför har stor första bokstav)
    // För varje exempelmening du får in som innehåller ordet "en" eller "ett", versalisera första bokstaven i nästkommande ord 
    // (vi låtsas inte om att adjektivt o.dyl. finns)


    return null // returnera den modifierade meningen

}
// Uncomment to run manually
// uppg12("Jag har köpt mig en bil, en båt och ett hus")




module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11, uppg12
}



