//project using event delegation

const form = document.forms[0];
const input = document.querySelector(".form-todo input[type='text']")
const ul= document.querySelector(".todo-list");

form.addEventListener("click", function(e){
     e.preventDefault();
     const newInputText = input.value;
     const newLi = document.createElement("li");
     const newLiInnerHtml = `
     <span class="text">${newInputText}</span>
     <div class="todo-buttons">
     <button class="todo-btn done">Done</button>
     <button class="todo-btn remove">Remove</button>
     </div>
     `;

     newLi.innerHTML= newLiInnerHtml;
     ul.append(newLi);


      
     input.value= "";
})


ul.addEventListener("click", function(e){
//   console.log(e.target)

//check if user clicked on done button
if(e.target.classList.contains("remove")){
     const targetedLi = e.target.parentNode.parentNode;
     // console.log(targetedLi);

     targetedLi.remove();
}

if(e.target.classList.contains("done")){
     const liSpan = e.target.parentNode.previousElementSibling;
     liSpan.style.textDecoration= "line-through";

}
})