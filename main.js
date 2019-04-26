var task = document.querySelector('#addTask');
var taskList = document.querySelector('#tasks');

var checkboxy = document.getElementsByTagName('input');


var btn1 = document.querySelector('.done');


task.addEventListener('submit', addTask);

taskList.addEventListener('click', removeTask);

editBtn.addEventListener('click', editTask);


//dodawanie zadania 

function addTask(e){
    e.preventDefault();

    var newTask = document.querySelector('#task').value;

    var li = document.createElement('li');
    li.className = 'list-group-task';
    li.appendChild(document.createTextNode(newTask));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete';
    deleteBtn.appendChild(document.createTextNode('USUŃ'));
    li.appendChild(deleteBtn);

    //Odhaczenie zadania
    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = 'check';
    li.appendChild(checkBox);


    taskList.appendChild(li);
}

//usuwanie zadania

function removeTask(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Na pewno chcesz usunąć zadanie?')){
            var li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
}


//edycja


// filtrowanie
/*function returnDone(e){
   
    for (i = 0; i < checkboxy.length; i++) {
        if (checkboxy[i].type == 'checkbox') {
            if (!checkboxy[i].checked) {
                ///to je ukryj
                var li = checkboxy.target.parentElement;
                li.style.setProperty('display', 'none');
            }
        }
    }
}*/

