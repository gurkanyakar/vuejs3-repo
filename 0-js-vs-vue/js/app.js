const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");


addBtn.addEventListener("click", () => {
    if(todoText.value === ""){
        alert("bir text girin");
    }else{
        //alert(todoText.value);
        const listElement = document.createElement("li");
        listElement.textContent = todoText.value;
        todoList.append(listElement);
    }
})