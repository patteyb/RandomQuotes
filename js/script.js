var arrQuotes = [
    {
        quote: 'Others have seen what is and asked why. I have seen what could be and asked why not.',
        saidBy: 'Pablo Picasso',
        citation: 'New Artist Review',
        year: '1912',
        tags: 'Motivational, Why not'
    },
    {
        quote: "A woman's mind is cleaner than a man's: she changes it more often.",
        saidBy: 'Oliver Herford',
        citation: '1902',
        year: '',
        tags: 'Funny, Woman, Changes'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        saidBy: 'Margaret Mead',
        citation: 'Life Magazine',
        year: '1953',
        tags: 'Positive, Unique'
    },
    {
        quote: "Try to be a rainbow in someone's cloud.",
        saidBy: 'Maya Angelou',
        citation: '',
        year: '1965',
        tags: 'Positive, Rainbow, Cloud'
    },
    {
        quote: "If opportunity doesn't knock, build a door.",
        saidBy: 'Milton Berle',
        citation: 'TV Weekly',
        year: '1975',
        tags: 'Inspriational, Build, Door'
    },
    {
        quote: 'We know what we are, but know not what we may be.',
        saidBy: 'William Shakespeare',
        citation: 'Hamlet',
        year: '',
        tags: 'Inspirational'
    },
    {
        quote: "In the end, it's not the years in your life that count, It's the life in your years.",
        saidBy: 'Abraham Lincoln',
        citation: '',
        year: '',
        tags: 'Life, Count'
    },
    {
        quote: 'Positive anything is better than negative nothing.',
        saidBy: 'Elbert Hubbard',
        citation: '',
        year: '',
        tags: 'Positive, Negative'
    },
    {
        quote: 'Keep your face to the sunshine and you cannot see a shadow.',
        saidBy: 'Helen Keller',
        citation: '',
        year: '1937',
        tags: 'Positive, Sunshine'
    },
    {
        quote: 'My fake plants died because I did not pretend to water them.',
        saidBy: 'Mitch Hedberg',
        citation: 'Comix Nightclub',
        year: '',
        tags: 'Funny, Fake, Pretend'
    }
];

// Set up an automatic quote retrieval
var flipper = setInterval(printQuote, 8000);

// Housekeeping variables and functions
var quotesSelected = [];
var numQuotesSelected = 0;
initialilzeQuotesSelectedArr();

function initialilzeQuotesSelectedArr() {
    for( var i = 0; i < arrQuotes.length; i++) {
        quotesSelected[i] = 0;
    }
}

// Return a randomly-selected quote from array 
function getRandomQuote() {

    var i = 0;

    // do until you select a quote that hasn't been shown yet
    do {
           i = Math.floor((Math.random() * arrQuotes.length));
    } while (quotesSelected[i]);

    // Update housekeeping variables
    quotesSelected[i] = 1;
    numQuotesSelected++;

    // If all quotes have been used, re-initialize housekeeping variables
    // and begin all over
    if (numQuotesSelected === arrQuotes.length) {
        initialilzeQuotesSelectedArr();
        numQuotesSelected = 0;
    }
    return arrQuotes[i];
}

function getRandomColor() {
    // Not using lighter colors due to white fonts
    return Math.floor(Math.random() * 200);
}

function getRandomRGB() {
    var red = getRandomColor();
    var green = getRandomColor();
    var blue = getRandomColor();
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function printQuote() {
	
	// Clear automatic retrival
	clearInterval(flipper);
	
    // get random quote and background color
    var quote = getRandomQuote();
    var rgb = getRandomRGB();

    // Change background color
    document.getElementById("main").style.backgroundColor = rgb;

    // Build html for quote, source, citation, year and tags
    var quoteHTML = '<p class="quote">' + quote.quote + '</p>';
    quoteHTML += '<p class="source">' + quote.saidBy; 

    if (quote.citation !== '') {
        quoteHTML += '<span class="citation">' + quote.citation + '</span>';
    }
    if (quote.year !== '') {
        quoteHTML += '<span class="year">' + quote.year + '</span>';
    }
    
    quoteHTML += '</p><p id="tags">' + quote.tags + '</p>';
    document.getElementById('quote-box').innerHTML = quoteHTML;
	
	// Reset automatic retrieval
	flipper = setInterval(printQuote, 8000);
}

// Load first quote
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



