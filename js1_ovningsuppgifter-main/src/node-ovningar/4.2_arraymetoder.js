
/***
 *        ___                                     
 *       /   |  ______________ ___  __            
 *      / /| | / ___/ ___/ __ `/ / / /_____       
 *     / ___ |/ /  / /  / /_/ / /_/ /_____/       
 *    /_/  |_/_/  /_/   \__,_/\__, /   __         
 *       ____ ___  ___  / /__/____/___/ /__  _____
 *      / __ `__ \/ _ \/ __/ __ \/ __  / _ \/ ___/
 *     / / / / / /  __/ /_/ /_/ / /_/ /  __/ /    
 *    /_/ /_/ /_/\___/\__/\____/\__,_/\___/_/     
 *                                                
 */

// ["hip","hip"]!


/***
 *       _  __ _         _      __
 *      / |/ /(_)_  __ _(_)_  <  /
 *     /    // /| |/ // _ `/  / / 
 *    /_/|_//_/ |___/ \_,_/  /_/  
 *                                
 */


const uppg1 = () => {

    const fruit = "banana"

    const fruits = ["apple", "orange"]

    // Lägg till fruit (bananen) sist i arrayen fruits ( -> ["apple", "orange", "banana]")

    //console.log(fruits)

    return fruits;

}
// Uncomment below to run manually
uppg1()


// ---------------------------------------------------------------------- //


const uppg2 = () => {

    const fruit1 = "pineapple"
    const fruit2 = "banana"

    const fruits = ["apple", "orange"]

    // Lägg till fruit1 och fruit2 först i fruits ( -> ["pineapple", "banana", "apple", "orange"])

    return fruits;
}
// Uncomment below to run manually
// uppg2()


// ---------------------------------------------------------------------- //


const uppg3 = () => {

    const fruits = ["banana", "apple", "orange"]

    // ta bort "orange" ur listan


    return fruits;
}
// Uncomment below to run manually
// uppg3()


// ---------------------------------------------------------------------- //


const uppg4 = () => {

    const fruits = ["banana", "apple", "orange"]

    // ta bort "banana" ur listan


    return fruits;

}
// Uncomment below to run manually
// uppg4()


// ---------------------------------------------------------------------- //


const uppg5 = () => {

    const fruits = ["banana", "apple", "orange"]

    // ta bort "apple" ur listan



    return fruits;
}
// Uncomment to run manually
// uppg5()


// ---------------------------------------------------------------------- //


const uppg6 = () => {

    const fruits = ["banana", "apple", "orange"]

    // ta fram vilken position (index) som "orange" befinner sig på i listan

    return index;

}
// Uncomment to run manually
uppg6()


// ---------------------------------------------------------------------- //


const uppg7 = () => {

    const fruits = ["banana", "apple", "orange"]

    // vänd på listan ( -> ["orange", "apple", "banana"])


    return fruits;

}
// Uncomment to run manually
// uppg7()


// ---------------------------------------------------------------------- //


const uppg8 = () => {

    const fruits = ["banana", "apple", "orange"]

    // skriv ut alla frukterna i consolen med hjälp av .forEach()

    fruits.forEach(fruit => console.log(fruit))


}
// Uncomment to run manually
uppg8()


// ---------------------------------------------------------------------- //


const uppg9 = () => {

    const fruits = ["banan", "äpple", "citron"]

    // Lagra listans frukter i en variabel,
    // som håller löpande text på formatet "Idag har jag ätit [frukt1], [frukt2], [frukt3]"


    return textMessage // ersätt null med din variabel

}
// Uncomment to run manually
uppg9()



/***
 *        _   __ _          _       ___ 
 *       / | / /(_)_   __ _(_) _   |__ \
 *      /  |/ // /| | / // __ `/   __/ /
 *     / /|  // / | |/ // /_/ /   / __/ 
 *    /_/ |_//_/  |___/ \__,_/   /____/ 
 *                                      
 */



const uppg10 = () => {

    const employees = [
        { name: "Alice", age: 52, department: "IT" },
        { name: "Bob", age: 24, department: "HR" },
        { name: "Charlie", age: 32, department: "Sales" }
    ]

    // skriv ut namnet (och enbart namnet) på alla anställda i consolen med hjälp av .forEach()


}
// Uncomment to run manually
uppg10()


// ---------------------------------------------------------------------- //


/***
 *        ____                                                          _  ____ __             
 *       / __ ) ____   ____   __  __ _____ __  __ ____   ____   ____ _ (_)/ __// /_ ___   _____
 *      / __  |/ __ \ / __ \ / / / // ___// / / // __ \ / __ \ / __ `// // /_ / __// _ \ / ___/
 *     / /_/ // /_/ // / / // /_/ /(__  )/ /_/ // /_/ // /_/ // /_/ // // __// /_ /  __// /    
 *    /_____/ \____//_/ /_/ \__,_//____/ \__,_// .___// .___/ \__, //_//_/   \__/ \___//_/     
 *                                            /_/    /_/     /____/                            
 */



const uppg11 = (fruits) => {

    // Om det finns en eller flera "banana" i listan, plocka bort den / dem

    return fruits

}
// Uncomment to run manually
// uppg11(["banana", "apple", "orange"])


module.exports = {
    uppg1, uppg2, uppg3, uppg4, uppg5, uppg6, uppg7, uppg8, uppg9, uppg10, uppg11
}



