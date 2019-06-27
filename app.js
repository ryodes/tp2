const directory = document.querySelector('.directory');
const formAddContact = document.forms[0];
const input = document.querySelector('input');

//stock les boutons avec un nom de classe 'delete'
let bts = document.getElementsByClassName('delete');

let textTodo;

formAddContact.onsubmit = function (e) {
    e.preventDefault();

    textTodo = input.value;
    if (textTodo.length>0){
        creerTodoList(textTodo.trim());
        formAddContact.reset();
    }

    //stock les balises <a> en cas de click, barrer/débarrer le texte
    let elementLists = document.querySelectorAll('a');

    //parcour la liste pour voir ou on a cliqué
    for (let i = 0; i < elementLists.length; i++) {
        elementLists[i].onclick = onlineDeline;
    }
}


//barre débarre en fonction du nom de classe
function onlineDeline() {
    if (this.className == '')
        this.className = 'line';
    else
        this.className = '';
}

