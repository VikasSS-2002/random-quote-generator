const mainQuote = document.querySelector(".main-quote");
const persons = document.querySelector("#author");
const button = document.querySelector(".btn");
const quoteArray = [
    {
        quote:"Everything you've ever wanted is on the other side of fear." ,
        some:"— George Addair"
    },
    {
        quote:"An unexamined life is not worth living.",
       some:" — Socrates"
    },
    {
        quote:"Before anything else, preparation is the key to success.",
        some:"— Alexander Graham Bell"
    },
    {
        quote:"The successful warrior is the average man, with laser-like focus.",
        some:" — Bruce Lee"
    },
    {
        quote:"Keep your face to the sunshine and you can never see the shadow." ,
        some:"— Helen Keller"
    },
    {
        quote:"Believe you can and you're halfway there.",
        some:"— Theodore Roosevelt"
    },
    {
        quote:"The only person you are destined to become is the person you decide to be." ,
        some:"— Ralph Waldo Emerson"
    },
    {
        quote:"I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        some:" — Mother Teresa"
    },
    {
        quote:"I have learned over the years that when one's mind is made up, this diminishes fear.",
        some:"— Rosa Parks"
    },
    {
        quote:"Whatever the mind of man can conceive and believe, it can achieve.",
        some:" — Napoleon Hill"
    },
    {
        quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." ,
        some:"— Henry Ford"
    },

];

button.addEventListener("click",function()
{
    let random = Math.floor(Math.random()*quoteArray.length);
    mainQuote.innerHTML =quoteArray[random].quote;
    persons.innerHTML = quoteArray[random].some;
})