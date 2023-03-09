//accessing the html elements
//const containerEle=document.getElementById('contai')
const containerEle=document.querySelector('#contain')
// in the below products is the function name
function products(){
    fetch('https://fakestoreapi.com/products?limit=100')
    .then(res=>res.json())// json is the function
    .then(item=>{console.log(item)//[{ => } this is the arrow function}]
    item.map((data)=>{
        containerEle.innerHTML +=`<div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">

         <i class="fa-sharp fa-solid fa-sailboat"></i>
         <img src="images/image jaguar logo.jpg">

        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
          <p class="price">${data.price}</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>`

    })})
}//normal function formate
products();
//arrow function
//const products=()=>{}



