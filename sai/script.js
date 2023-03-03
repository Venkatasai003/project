const Quotes=[
    {
        quote:`We grow fearless when we do the things we fear.`,
        author:`sai`,
        color:`red`,
    },
    {
        quote:`"Impossible is just an opinion."`,
        author:`sai`,
    },
    {
        quote:`" we do the things we fear."`,
        author:`sai`,
    },
    {
        quote:`Don't Count the Days, Make the Days Count. ...`,
        author:`sai`,
    },
    {
        quote:`Don't Wait for Opportunity, Create it.`,
        author:`sai`
    },
    {
        quote:`Either Run the Day or the Day Runs You`,
        author:`sai`
    },
    {
        quote:`The Real Risk is Doing Nothing`,
        author:`sai`
    },
    {
        quote:`Success is Walking from Failure to Failure`,
        author:`sai`
    },
    {
        quote:`Action is the Foundational Key to Success`,
        author:`sai`
    },
    {
        quote:`Success isnt Always about Greatness. Its about Consistency`,
        author:`sai`
    },
    {
        quote:`80% of Success is Showing Up`,
        author:`sai`
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
const RandomQuote=()=>{
    //logic to generate random quotes
    let index=Math.floor(Math.random()*(Quotes.length));
    //to display the out put
    DisplayElem.innerHTML= Quotes[index].quote;
    AuthorElem.innerHTML=`~`+Quotes[index].author;
}
//button functionality
//Btn.onclick=randomQuote.
Btn.addEventListener('click',RandomQuote)