const okBtn = document.querySelector(".myButton");

okBtn.addEventListener("click", function(){
    console.log("click!");
const myInput = document.querySelector(".myInput");
const funToDo = myInput.value;
const noInput = document.querySelector(".noInput");
const myList = document.querySelector(".myList");

if(funToDo.length == 0){
    console.log("no text");
    noInput.classList.add("error");
    return;
} else{
    noInput.classList.remove("error");
}
    console.log("text added"); 
    const funList = document.createElement("li");
    funList.classList.add("funList");
    const funItem = document.createElement("span");
    funItem.classList.add("funItem");
    funItem.innerText = funToDo;
    funList.append(funItem);
    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerText = "delet"; 
    funList.append(delBtn);
    myList.append(funList); 

    delBtn.addEventListener("click", function(){
        funList.remove();
    });

myInput.value = "";

}
);