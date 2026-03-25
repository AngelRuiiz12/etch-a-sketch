const container = document.querySelector(".container")
const btn = document.querySelector("#btn")


function createGrid(size) {

    container.textContent = "";

    let squareSize = 960 / size

    for (let i = 0; i < size * size; i++) {

        const new_div = document.createElement("div")
        new_div.classList.add("square-div")
        new_div.style.width = squareSize + "px"
        new_div.style.height = squareSize + "px"

        new_div.addEventListener("mouseover", () => {
            new_div.style.backgroundColor = "black"
        })


        container.appendChild(new_div)

    }
}



createGrid(16)


btn.addEventListener("click", () => {

    let size = undefined

    do {

        size = parseInt(prompt("Select Size (Max. 100): "))

    } while (size > 100)

    createGrid(size)
})

