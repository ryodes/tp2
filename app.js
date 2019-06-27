const directory = document.querySelector('.directory');
const formAddContact = document.forms[0];
const input = document.querySelector('input');

let textTodo;

formAddContact.onsubmit = function (e) {
    e.preventDefault();

    textTodo = input.value;

    creerTodoList(textTodo);

    //stock les balises <a> en cas de click, barrer/débarrer le texte
    let elementList = document.querySelectorAll('a');

    //parcour la liste pour voir ou on a cliqué
    for (let i = 0; i < elementList.length; i++) {
        elementList[i].onclick = onlineDeline;
    }

    //stock les boutons avec un nom de classe 'delete'
    let bt = document.getElementsByClassName('delete');

    //Supprime les zone de texte quand le bouton 'delete' est pressé
    for (let j = 0; j < bt.length; j++) {
        bt[j].onclick = function () {
            directory.removeChild(document.getElementsByClassName('todo')[j]);
        }
    }
}

//barre débarre en fonction du nom de classe
function onlineDeline() {
    if (this.className == '')
        this.className = 'line';
    else
        this.className = '';
}

