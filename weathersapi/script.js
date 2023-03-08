const inputEle=document.getElementById("location-input")
const tempEle=document.getElementById("temp")
const weatherEle=document.getElementById("weather-info")
const headingEle = document.querySelector('#info h3')
const locationEle=document.getElementById("location-info")
const iconEle=document.getElementById("icon")
const buttonEle=document.getElementById("btn")
//
const apikey="c98f1a93491e9b0ac2b6bbe2049621b3"

//functionality
buttonEle.onclick=function(){
    if(inputEle.value==''){
        alert('please enter the location')
    }
    else{
        let loc=inputEle.value
       url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&cnt=5&units=metric&appid=${apikey}`
       //fetching the data from 
       fetch(url).then(res=>res.json())
       //this is resole state
       .then(data=>{
               console.log(data);
               headingEle.textContent = data.name;
               tempEle.textContent = Math.floor(data.main.temp)
               console.log(data.weather[0])
            })
       //reject state
       .catch(()=>{
        alert('invalied location')
       })

       inputEle.value==''
    }
}
