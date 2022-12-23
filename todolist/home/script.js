let $=document;
let title=$.querySelector(".title");
let describe=$.querySelector(".describe");
let Date=$.querySelector(".Date");
let btn=$.querySelector(".btn");
let message_section=$.querySelector(".message_section");
let close=$.querySelector(".close");

// let date= new Date();
// console.log(date);
// let second=date.getSeconds();
// let minut=date.getMinutes();
// let hour=date.getHours();
// let time=`${hour}:${minut}:${second}`

let id;
id=+1;

function post_todo(e){
    e.preventDefault();

    let todos={
        title:title.value,
        describe:describe.value,
        Date:Date.value,
        id: id+1,
        // createdAt:time,
        // updateAt:time,
        // checked:false,
    }

    fetch("https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos",{
        method:"POST",
         headers:{
        "content-type":"application/json"
        },
        body:JSON.stringify(todos)
    })
     .then(res=> res.json())
     .then(data=>{
        console.log(data);
        message_section.style.display="block"
     })  
}



close.addEventListener("click",function(){
    message_section.style.display="none"
})



let Url=new URLSearchParams(location.search);
let target_id=Url.get("id");
// console.log(target_id);

if(target_id){
    btn.addEventListener("click",edit_todo)
}else{
    btn.addEventListener("click",post_todo)
}

function get_data(){
    fetch("https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos")
    .then(res=> res.json() )
    .then(data =>{
        data.forEach(item =>{

            if(target_id==item.id){
                title.value=item.title
                describe.value=item.description
                Date.value=item.dueDate
                btn.innerHTML="save"
            }
            // else{
            //     alert("this todo not found")
            // }
         })   
  })
 }
 get_data()

function edit_todo(e){

    e.preventDefault();
    let todos={
        title:title.value,
        description:describe.value,
        dueDate:Date.value,
    }
    fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${target_id}`,{
        method:"PUT",
        headers:{
            "content-type" :"application/json"
            },
            body:JSON.stringify(todos)
    })
        .then((res) => res.json())
        .then(data => {

          
            title.value=""
            describe.value=""
            Date.value=""
            btn.innerHTML="submit"
            message_section.style.display="block";
        })
    }
    
   