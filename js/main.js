let inputBox = document.querySelector("#input-box");
let list = document.querySelector("#list-container");
let deleteBtn = document.querySelector("#delete_button");

function updateDeleteButtonVisibility() {
    if (list.children.length === 0) {
        deleteBtn.style.display = "none";
    } else {
        deleteBtn.style.display = "";
    }
}


function addTask(){
    let inputText = inputBox.value; 
    if (inputText === ""){
        alert("You Need To Write Something"); 

    }else{
        // creates the li 
        let newEntry = document.createElement('li'); 
        // creates checkbox
        let checkbox = document.createElement('input'); 
         checkbox.setAttribute('type', 'checkbox');
         
        
        let taskText = document.createElement('span');
        taskText.textContent = inputText;
        
        // create button 
        let xBtn =  document.createElement('button'); 
        xBtn.textContent = "x"; 
        // add button to new entry;
        newEntry.appendChild(checkbox);
        newEntry.appendChild(taskText);
        newEntry.appendChild(xBtn);
        list.appendChild(newEntry); 
        xBtn.addEventListener("click", function() {
        xBtn.parentElement.remove();
        updateDeleteButtonVisibility();
        });
        
        
        checkbox.addEventListener("click", function() {
        taskText.classList.toggle("strike-through");})
        
        

        // deletes the task from the field
        inputBox.value = ""; 

        updateDeleteButtonVisibility();

        }

}

document.querySelector("#add_button").addEventListener("click", addTask);

document.querySelector("#delete_button").addEventListener("click", deleteButton);


function deleteButton() {
    list.innerHTML = '';
    updateDeleteButtonVisibility();
}


updateDeleteButtonVisibility();


