const inputEl = document.querySelector('input')
const doList = document.querySelector('#todoList')
const delAll = document.querySelector('#del-btn')
const addBtn = document.querySelector('#add-btn')

// Creating a todo function that would handle checks, create and delete 
const addTodo = (e) => {
    // First "listen for" value in the input field , if empty return
    if ( !inputEl.value.trim() ) return
    // if "key" has been pressed and it's not enter run function 
    if ( e.key && e.key !== "Enter" ) return
    
    // Create a span thats added to a classlist that we can style in css and than insert input.value 
    const toDoItem = document.createElement('span')
    toDoItem.classList.add('task')
    toDoItem.textContent += inputEl.value
    
    // Same in the previous were we created and added to an exiciting class + create an eventlistner to delete our todo's 
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