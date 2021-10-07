//define variables

const form=document.querySelector('#task-form');
const taskList=document.querySelector('.listing');
const clearBtn=document.querySelector('.clear-cont');
const taskInput=document.querySelector('#task');

//First load all event listeners

loadEventListners();

//write function for the same

function loadEventListners() {
 
    //add task event

    form.addEventListener('submit' , addTask);
     taskList.addEventListener('click', removeItem);
     clearBtn.addEventListener('click',clearTasks);

}


function addTask(e){

if(taskInput.value === ''){
 alert('Please enter a task');
}

const li=document.createElement('li');
li.className='listing-item';

li.appendChild(document.createTextNode(taskInput.value));
//create a link element for font awesome icon

const link=document.createElement('a');
link.className='del-item secondary-content';
link.innerHTML = '<i class="fa fa-minus"></i>';

li.appendChild(link);
taskList.appendChild(li);

//clear input for next entry
taskInput.value='';

    e.preventDefault();
}

function removeItem(e)
{

   if(e.target.parentElement.classList.contains('del-item')){
       e.target.parentElement.parentElement.remove();
   }
}

function clearTasks(e){
  taskList.innerHTML='';
}

