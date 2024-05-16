// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

// Classes names
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

// Variables
let LIST, id

// Show todays data
const options = {weekday : "long", month:"short", day:"numeric"}
const today = new Date()

dateElement.innerHTML = today.toLocaleDateString("en-US", options)

// Add to do function
function addToDo(toDo, id, done, trash) {

    if(trash){return}

    const DONE = done ? CHECK : UNCHECK
    const LINE = done ? LINE_THROUGH : ""

    const item = `
    <li class="item">
        <i class="fa ${DONE} co" job="complete" id="0"></i>
        <p class="text ${LINE}">${toDo}</p>
        <i class="fa fa-trash-o de" job="delete" id="0"></i>
    </li>
    `
    const positon = "beforeend"

    list.insertAdjacentHTML(positon, item)
}

// add an item to the list user the enter key
document.addEventListener("keyup", function(even){
    if(event.keyCode === 13){
        const toDo = input.value

        // if the input isn't empty
        if(toDo) {
            addToDo(toDo, id, false, false)
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            })

            id++
        }
        input.value = ""
    }
})


