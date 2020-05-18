/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
array of objects storing individual, famous quotations and their attributes.
***/
const quotes = [
  { 
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
    source: "Nelson Mandela",
    citation: "",
    year: null,
    tag: "inspirational"
  }, 
  { 
    quote: "The way we get started is to quit talking and begin doing." ,
    source: "Walt Disney",
    citation: "" ,
    year: null,
    tag: "inspirational"
  }, 
  { 
    quote: "If life were predictable it would cease to be life, and be without flavor." ,
    source: "Eleanor Roosevelt",
    citation: "",
    year: null,
    tag: "inspirational"
  }, 
  { 
    quote: "People say nothing is impossible, but I do nothing every day." ,
    source: "A. A. Milne",
    citation: "",
    year: null,
    tag: "funny" 
  }, 
  {
    quote: "Frankly, my dear, I don't give a damn.",
    source: "Rhett Butler",
    citation: "Gone With the Wind",
    year: 1939,
    tag: null
  },
  {
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    source: "Gold Hat", 
    citation: "Treasure of the Sierra Madre",
    year: 1948,
    tag: null,
  },
  {
    quote: "It is by logic that we prove, but by intuition that we discover.",
    source: "Henri Poincar",
    citation: "",
    year: null,
    tag: "science"
  }, 
  {
    quote: "The greatest use of life is to spend it on something that will outlast it.",
    source: "William James",
    citation: "",
    year: null,
    tags: "inspiration"
  },
  {
    quote: "Nobody puts baby in a corner.",
    source: "Johnny Castle",
    citation: "Dirty Dancing",
    year: 1987,
    tag: null
  }
]


/***
 * `getRandomNumber` function 
 * generates a random number between 0 and a number passed in as an argument. 
***/
function getRandomNumber(max) { 
 return Math.floor(Math.random() * max)
}

/***
 * `getRandomQuote` function 
 *  accepts an array as an argument
 *  passes the length of that array  minus 1 into the getRandomNumber function 
 *  returns the object at the index of the randomly generated number. 
 * ***/
function getRandomQuote(arr){
  const maxIndex = arr.length -1;
  const rdmIndex = getRandomNumber(maxIndex);
  const rdmQuote = arr[rdmIndex];
  return rdmQuote;
}
/***
 * `randomBackgroundColor` function 
 *  generates random RGB values using getRandomNumber
 *  sets the background-color value of the body equal to random RGB
 * ***/
function randomBackgroundColor() {
  let red = getRandomNumber(256);
  let green = getRandomNumber(256);
  let blue = getRandomNumber(256);
  const body = document.querySelector('body');
  body.style.backgroundColor=`rgb(${red}, ${green}, ${blue}`
}

/***
 * `printQuote` function
 * generates a random quote using the getRandomQuote function
 * builds a string of HTML with information from the random quote object and sets it to 'quoteHTML' 
 * replaces the innerHTML of 'quote-box' div with 'quoteHTML' 
 * sets the background to a random color for every new quote by calling 'randomBackgroundColor'
***/
function printQuote(){
  let rdmQuote = getRandomQuote(quotes);
  let quoteHTML = `<p class='quote'>${rdmQuote.quote}</p>`; 
  quoteHTML += `<p class='source'>${rdmQuote.source}`;
  if (rdmQuote.citation) { 
    quoteHTML += `<span class='citation'>${rdmQuote.citation}</span>`
  } 
  if(rdmQuote.year){ 
    quoteHTML += `<span class='year'>${rdmQuote.year}</span>`
  }
  quoteHTML += `</p>`
  if (rdmQuote.tag) {
    quoteHTML += `<p class='tag'>${rdmQuote.tag}</p>`
  }
  document.getElementById('quote-box').innerHTML = quoteHTML;
  randomBackgroundColor();
}

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)