// UI

//22NF 


const formel = document.querySelector('form');
// console.log(formel);
const inputel = document.getElementById('input');
// console.log(inputel);
const todoul = document.getElementById('todos');
// console.log(todoul);

const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);


if (todos) {
    todos.forEach(todo => addtodo(todo));
}






formel.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log('hay');
    addtodo();
});

function addtodo(todo) {
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if (todo) {
        todotext = todo.text;
    }



    if (todotext) {

        const li = document.createElement('li');


        if (todo && todo.complete) {
            li.classList.add('completed');
        }







        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        inputel.value = '';
        updatelocalstorage();
        // console.log(li);

        //add line through by left click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        //remove by rightclick  li 
        li.addEventListener('contextmenu', (e) => {
            // console.log('right click');
            li.remove();

            updatelocalstorage();

            e.preventDefault();
        });



    } else {
        window.alert('Enter your todo');
    }

}



function updatelocalstorage() {
    // console.log('storage');

    let todolis = document.querySelectorAll('li');

    let todos = [];

    todolis.forEach(todoli => {

        // todos.push(todoli.innerText);
        todos.push({
            text: todoli.innerText,
            complete: todoli.classList.contains('completed')
        });

    });

    localStorage.setItem('todos', JSON.stringify(todos));

    // console.log(todos);
}















