const inputbox=document.getElementById("input")
const addTask=document.getElementById("button")
const list=document.getElementById("ul")
let todo=[]
function  addTodo(){
    const task=inputbox.value
    todo.push(task)
    renderTodo()
}
function createTodo(item, index){
    const li=document.createElement("li")
    li.innerText=item
    const deletibtn=document.createElement("button")
    deletibtn.innerText='Delete'
    deletibtn.addEventListener("click",()=>{
        deleteList(index)
    })
    li.appendChild(deletibtn)
    return li;
}
function deleteList(index){
    todo.splice(index,1)
    renderTodo()
}
function renderTodo(){
    list.innerText=""
    todo.forEach((item,index)=>{
        const li=createTodo(item,index)
        list.appendChild(li)
    })
}
addTask.addEventListener("click",addTodo)