// CODE EXPLAINED channel

const list = document.getElementById("list")

list.addEventListener("click", function(event){
    let element = event.target // <i class = "de fa fa-trash-o" join = "delete" id = "0"></i>
    const elementJOB = event.target.attributes.job.value // delete or complete
    if(elementJOB === "complete"){
        completeToDo(element)
    }else if(elementJOB === "delete") {
        removeToDo(element)
    }
})

const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

function addToDo(toDo, id, done,) {

    if(trash) {
        return
    }
    const DONE = done ? CHECK : UNCHECK
    const LINE = done ? LINE_THROUGH : ""

    const text = `
    <li class = "item">
        <i class = "co fa fa-circle-thin" job = "complete" id="${id}"></i>
        <p class = "text"> ${toDo} </p>
        <i class = "de fa fa-trash-o" job = "delete" id="${id}"></i>
    </li>`

    const position = "beforeend"

    list.insertAdjacentHTML(position, text)
}
const input = document.getElementById("input")

document.addEventListener("keyup" , function(event){
    if(event.keyCode === 13) {
        const toDo = input.value
        if(toDo) {
            addToDo(toDo,id, false, false)
            list.push (
                {
                name: toDo,
                id: id,
                done: false, 
                trash: false
                }
            )
            input.value = ""
            id++ 
        }
    }
})

let LIST, id
let data = localStorage.getItem("TODO")
if(data) {
    LIST = JSON.parse(data)
    loadToDo(LIST)
    id = LIST.length
}else {
    LIST = []
    id = 0
}
function loadToDo(array) {
    array.forEach(function(item)){
        addToDo(item.name, item.id, item.done, item.trash)
    }
}

const clear = document.querySelector("clear")

clear.addEventListener("clear", function(){
    localStorage.clear()
    location.reload()
})

const dataElement = document.getElementById("data")

let options = {weekday:'long', month:'short', day:'numeric'}
let today = new Date()
dateElement.innerHTML = today.toLocateDateString("en-US", options)