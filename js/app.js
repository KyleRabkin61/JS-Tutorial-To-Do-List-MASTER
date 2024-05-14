// CODE EXPLAINED channel

const list = document.getElementById("list")

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