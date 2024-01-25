const randomQouteBtn = document.getElementById("random-quote-btn")
const randomQouteElement = document.getElementById("random-quote")
const randomQouteAuthorElement = document.getElementById("random-qoute-author")

const dogBtn = document.getElementById("dog-btn")
const dogImg = document.getElementById("dog-img")

const ipBtn = document.getElementById("ip-btn")
const ip = document.getElementById("ip")
const ipCountry = document.getElementById("ip-country")
const ipCity = document.getElementById("ip-city")
const ipISP = document.getElementById("ip-isp")

const ipWeather = document.getElementById("ip-weather")
const map = document.getElementById("map")

// Här är en hel del förifyllt för uppgift 1 - gör klart resten :)
randomQouteBtn.addEventListener("click", () => {


    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            randomQouteElement.innerText = `"${"<ersätt den här strängen med citatet du har fått från api:et>"}"`
            randomQouteAuthorElement.innerText = `- ${"<ersätt den här strängen med upphovsmannen du har fått från api:et>"}`

        })

})

// Samma sak för uppgift 2 - fyll i det som behövs.
dogBtn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dogImg.src = "<ersätt den här strängen med image-url:en du har fått från api:et>"
            dogImg.hidden = false
        })
})

ipBtn.addEventListener("click", () => {

    // Bygg klart resten :)
    const getIpInfo = ip => fetch(`http://ip-api.com/json/${ip}`)


    fetch("https://api.ipify.org/?format=json")
        .then(res => res.json())
        .then(data => {
            ip.innerText = data.ip
            getIpInfo(data.ip)
        })

})

/***
 * Kodsnuttar du kan ha nytta av sen till uppgift 4
 * 
 * Hantering av kart-widgeten. Zoom kan man öka eller minska efter eget önskemål, 
 * Värdena till variabler för long- och lat hämtas från tidigare värden i uppgift 3
 * const zoom = 0.2
 * const url = `https://www.openstreetmap.org/export/embed.html?bbox=${long - zoom},${lat - zoom},${long + zoom},${lat + zoom}&marker=${lat},${long}`
 * 
 * 
 * // Anrop till väder-API:et som Norges Meteorologiska Institut tillhandahåller
 * fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`)
 * 
 * */
