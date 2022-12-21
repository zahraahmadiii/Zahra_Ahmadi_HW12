let wraper_todo=document.querySelector(".wraper_todo");
// console.log(wraper_todo);
let trash=document.querySelector(".trash");
// console.log(trash);
let modal=document.querySelector(".modal");
// console.log(modal);
let btn2=document.querySelector(".btn2");
// console.log(btn2);
let btn1=document.querySelector(".btn1");
// console.log(btn1);
let home=document.querySelector(".home")
// console.log(home);
let overlay=document.querySelector(".overlay")
// console.log(overlay);
// let all_li=document.querySelectorAll(".page ");
// console.log(all_li);

let all_id;

function get_todo(){
    wraper_todo.innerHTML=""
    fetch('https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/?page=1&limit=5')
    .then(res=> res.json() )
    .then(data=>{
        data.forEach(item =>{
            all_id=item.id
            wraper_todo.insertAdjacentHTML("beforeend",
            `
            <div class="todo">
            <div class="row1">
            <span class="left">
             <input type="checkbox"  name="first" value="checking-email">
             <label for="first"> ${item.title}</label>
            </span>
             <span class="date">${item.dueDate}</span>
            
             <span class="right">              
                <a href="../home/home.html?id=${all_id}" onclick="edit_todo()"> <iconify-icon class="edit"  icon="material-symbols:edit-outline-rounded"></iconify-icon><a>
                <a onclick="delete_todo()" ><iconify-icon class="trash" icon="tabler:trash"></iconify-icon><a>
            </span>
            </div>
             <p class=" row2 text">${item.description} </p>
           </div>
            
         `)
        }
    )
})
}

 window.addEventListener("load",get_todo)


function delete_todo(){
// console.log(all_id);
modal.style.display="block";
overlay.style.display ="block";
}

btn2.addEventListener("click",function(){
    modal.style.display="none";
    overlay.style.display ="none";
})

btn1.addEventListener("click",function(){
    modal.style.display="none";
    overlay.style.display ="none";
    fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${all_id}`,{ method:"DELETE"})
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        get_todo() })
})





// let last_page;
// all_li.forEach(item=>{
//     console.log(item);
//     last_page=item.innerHTML
//     console.log(last_page);
// })


let page=document.getElementsByClassName("page")
// console.log(page);
let currentValue=1;
function activeLink(event){
    console.log(event.target);

    for(p of page){
        p.classList.remove("active")
    }
    event.target.classList.add("active")
    currentValue=event.target.value;
}

