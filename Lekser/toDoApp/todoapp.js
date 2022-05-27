const inputEl = document.querySelector('input')
const doList = document.querySelector('#todoList')
const delAll = document.querySelector('#del-btn')
const addBtn = document.querySelector('#add-btn')

const addTodo = (e) => {
    if ( !inputEl.value.trim() ) return
    if ( e.key && e.key !== "Enter" ) return

    const toDoItem = document.createElement('span')
    toDoItem.classList.add('task')
    toDoItem.textContent += inputEl.value
    
    const delBtn = document.createElement('button')
    delBtn.textContent = "🗑️"
    delBtn.classList.add('button')
    delBtn.addEventListener('click', () => { toDoItem.remove() })    
    
    toDoItem.append(delBtn)
    doList.append(toDoItem)
    inputEl.value = ""
}

addBtn.addEventListener('click', addTodo)
inputEl.addEventListener('keydown', addTodo)

delAll.addEventListener('click', () => {
    const allSpan = document.querySelectorAll('span')
    allSpan.forEach(toDoSorted => toDoSorted.remove())
})