let title = document.querySelector('#title');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let button = document.querySelector('#button');

// Here comes the array of quotes
const quotesArray = [{
    title: 'Macbeth',
    quote: '“Out, out brief candle, life is but a walking shadow...a tale told by an idiot, full of sound and fury, signifying nothing.”',
    author: 'William Shakespeare'
}, {
    title: 'Never Lose a Holy Curiosity',
    quote: '“The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.”',
    author: 'Albert Einstein'
}, {
    title: 'Chess',
    quote: '“Chess is the struggle against the error.”',
    author: 'Johannes Zukertort'
}, {
    title: 'Chess Quotes',
    quote: '“Unlike other games in which lucre is the end and aim, [chess] recommends itself to the wise by the fact that its mimic battles are fought for no prize but honor. It is eminently and emphatically the philosopher’s game.”',
    author: 'Paul Morphy'
}, {
    title: 'Chess Interviews',
    quote: '“In chess, we get a fighting game which is purely intellectual and excludes chance.”',
    author: 'Richard Reti'
}, {
    title: 'The Picture of Dorian Gray',
    quote: '“The books that the world calls immoral are books that show the world its own shame.”',
    author: 'Oscar Wilde'
}, {
    title: 'The Picture of Dorian Gray',
    quote: '“The only way to get rid of temptation is to yield to it.”',
    author: 'Oscar Wilde'
}, {
    title: 'A Brief History of Time',
    quote: '“Even if there is only one possible unified theory, it is just a set of rules and equations. What is it that breathes fire into the equations and makes a universe for them to describe? The usual approach of science of constructing a mathematical model cannot answer the questions of why there should be a universe for the model to describe. Why does the universe go to all the bother of existing?”',
    author: 'Stephen Hawking'
}, {
    title: 'A Brief History of Time',
    quote: '“Ever since the dawn of civilization, people have not been content to see events as unconnected and inexplicable. They have craved an understanding of the underlying order in the world. Today we still yearn to know why we are here and where we came from. Humanitys deepest desire for knowledge is justification enough for our continuing quest. And our goal is nothing less than a complete description of the universe we live in.”',
    author: 'Stephen Hawking'
},
];

//  function that will replace innerText

button.addEventListener('click', function newQuote() {

    let randomQuote = Math.floor(Math.random() * quotesArray.length);

    title.innerHTML = quotesArray[randomQuote].title;
    quote.innerHTML = quotesArray[randomQuote].quote;
    author.innerHTML = quotesArray[randomQuote].author;

    console.log(Math.random);
    console.log(Math.floor(Math.random));

});

