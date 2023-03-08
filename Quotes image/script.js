const quotes=[
    {
        quote:`sai`,
        author:`sai`,
        image:`image/nature image-1`,
    },
    {
        quote:``,
        author:`sai`,
        image:`image/nature image-2`,
    },
    {
        quote:``,
        author:`sai`,
        image:`image/nature image-3`,
    },
    {
        quote:``,
        author:`sai`,
        image:`image/nature image-4`,
    },
    {
        quote:`ram`,
        author:`sai`,
    },
    {
        quote:``,
        author:`sai`,
    },
    {
        quote:``,
        author:`sai`,
    },
    {
        quote:``,
        author:`sai`,
    },
    {
        quote:``,
        author:`sai`,
    },
    {
        quote:``,
        author:`sai`,
    },
    {
        quote:`shiva`,
        author:`sai`,
    },
    
]
//access the elements
const DisplayElem=document.getElementById('display');
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');

//function to generate different quotese
// normal function
//function randomQuote(){

//}
//arrow functions
const RandomQuotes=()=>{
    //logic to generate random quotes
    let index=Math.floor(Math.random()*(Quotes.length));
    //to display the out put
    DisplayElem.innerHTML= Quotes[index].image;
    AuthorElem.innerHTML=`~`+Quotes[index].author;
}
//button functionality
//Btn.onclick=randomQuote.
Btn.addEventListener('click',RandomQuote)