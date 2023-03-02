//storing the values from user
const form=document.getElementById('form')
const input=document.getElementById('input')
const error=document.getElementById('error')
const post=document.getElementById('post')


form.addEventListener('click',(e)=>{
    e.preventDefault()
    formvalidation()
    console.log('form submitted')
})

const formvalidation=()=>{
    if(input.value===''){
          console.log('error')
          error.innerHTML='please enter some text'
    }
    else{
          console.log('succes')
          error.innerHTML=""
          acceptData()
    }
}

//to store the data from user
//created an objects with template literals
let data={}

const acceptData=()=>{
    data['name']=input.value
    console.log(date)
}

const showData=()=>{
    post.innerHTML+=
    `<div>
    <p>${data.name}</p>
    <span class="buttons">
        <i onClick='deleteData(this)' class="fa-sharp fa-solid fa-trash">></i>
        <i onClick='editData(this)' class="fa-sharp fa-solid fa-pen-to-square"></i>
    </span>
</div>`
}

//to delete the data entered by user
const deleteData=(e)=>{
e.parentElement.parentElement.remove()
}

//to edit the date by user

const editDate=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML  
    e.parentElement.parentElement.remove()
}





