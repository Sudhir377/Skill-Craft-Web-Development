const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.onclick = function(){

    if(input.value === ""){
        return;
    }

    const li = document.createElement("li");

   li.innerHTML =
input.value +
" <button class='delete'>X</button>";

    li.onclick = function(){
        li.style.textDecoration = "line-through";
    };

    taskList.appendChild(li);

    input.value = "";
};