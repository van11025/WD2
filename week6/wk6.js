import { Todo } from './todo.js';

let tList = [];



function genList(tList) {
    let table = document.querySelector('#list');
    table.innerHTML = "";
    tList.forEach(
        lItem => {
            table.innerHTML +=
            `<tr>
            <td><input type="checkbox" data-li="${lItem.id}"></td>
            <td><p>${lItem.content} </p></td>
            <td><button>X</button></td>
            </tr>
            `
        }
        );
    

    let checkIt = document.querySelectorAll('input[type="checkbox"]');
    checkIt.forEach((todoCheck) =>{
        todoCheck.addEventListener("click", (e) =>{
            let id = e.target.id;
            let selectedTodo = tList.find(Todo => Todo.id == id);
            console.log(selectedTodo.check);
            selectedTodo.check = !selectedTodo.check;
            console.log(selectedTodo.check);
        });
    });
};
    
    
    
    
if (localStorage.getItem('todo')) {
    tList = JSON.parse(localStorage.getItem('todo'))
    genList(tList);  
};
    




let submit = document.querySelector('#subT')
.addEventListener('click', (e) => {
    let content = document.querySelector('#newTodo');
    if(content.value){
    let newItem = new Todo(content.value);
    tList.push(newItem);
    localStorage.setItem('todo', JSON.stringify(tList));
    genList(tList);
    content.value = '';}
});
    



    //  ${todoItem.Completed ? 'checked': ''}