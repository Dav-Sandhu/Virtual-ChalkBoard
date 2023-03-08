let mousepos = ""
let drawing = false

const root = document.getElementById("root")
const coordinates = document.createElement("div")
const board = document.createElement("div")

coordinates.className = "coordinates"
board.className = "board"

root.appendChild(coordinates)
root.appendChild(board)

addEventListener("mousemove", (e) => {
    mousepos = e.x + ", " + e.y
    coordinates.innerText = mousepos
    root.appendChild(coordinates)
})

board.addEventListener("mousemove", (e) => {
    if (drawing){
        const div = document.createElement("div")
        div.className = "dot"
        div.style.top = e.y - 10 + "px"
        div.style.left = e.x - 10 + "px"
        board.appendChild(div)
        root.appendChild(board)
    }
})

addEventListener("mousedown", () => {drawing = true})
addEventListener("mouseup", () => {drawing = false})