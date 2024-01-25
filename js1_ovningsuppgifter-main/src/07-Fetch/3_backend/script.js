

const postContainer = document.getElementById("posts")
const form = document.getElementById("form")
const submitBtn = document.getElementById("submit-btn")


const getPosts = () => {
    fetch("http://localhost:3000/posts", {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.status == 304)
                throw new Error(304)

            return res.json()
        })
        .then(body => {

            const postEl = body.map(post => {
                const div = document.createElement("div")
                div.setAttribute("id", post.id)
                const titleElement = document.createElement("h3")
                const authorElement = document.createElement("p")
                const messageElement = document.createElement("p")

                titleElement.innerText = post.title
                messageElement.innerText = post.content
                authorElement.innerText = `- ${post.author}`

                div.append(titleElement)
                div.append(messageElement)
                div.append(authorElement)
                div.append(document.createElement("hr"))
                return div
            })

            postContainer.replaceChildren(...postEl)
        })
        .catch(err => console.log(err))
}

getPosts()


submitBtn.addEventListener("click", event => {
    event.preventDefault()

    console.log(form)
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const body = JSON.stringify(data)

    // Data bör vara ett javascript-objekt i strängformat, som kan sändas som body till 
    console.log(body)

    // Modifiera anropet, så att ett POST-anrop med bodyn ovan görs istället.
    fetch("http://localhost:3000/posts")

})
