(function(){
  var quotes = [
      {
        "quote":"Believe you can and you’re halfway there.",
        "name":"Theodore Roosevelt"
      },
      {
        "quote":"Do or do not. There is no try.",
        "name":"Yoda"
      },
      {
        "quote":"Strive not to be a success, but rather to be of value.",
        "name":"Albert Einstein"
      },
      {
        "quote":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "name":"Henry Ford"
      },
      {
        "quote":"The only way to do great work is to love what you do.",
        "name":"Steve Jobs"
      },
      {
        "quote":"If you are born poor it’s not your mistake, but if you die poor it’s your mistake.",
        "name":"Bill Gates"
      },
      {
        "quote":"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "name":"Albert Einstein"
      },
      {
        "quote":"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
        "name":"Albert Einstein"
      },
      {
        "quote":"Look deep into nature, and then you will understand everything better.",
        "name":"Albert Einstein"
      },
      {
        "quote":"A person who never made a mistake never tried anything new.",
        "name":"Albert Einstein"
      },
      {
        "quote":"Once you stop learning, you start dying.",
        "name":"Albert Einstein"
      },
      {
        "quote":"Everything has beauty, but not everyone can see.",
        "name":"Confucius"
      },
      {
        "quote":"The journey of a thousand miles begins with one step.",
        "name":"Lao Tzu"
      },
      {
        "quote":"The Way Get Started Is To Quit Talking And Begin Doing.",
        "name":"Walt Disney"
      },
      {
        "quote":"All our dreams can come true, if we have the courage to pursue them.",
        "name":"Walt Disney"
      },
      {
        "quote":"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        "name":"Winston Churchill"
      },
      {
        "quote":"Creativity Is Intelligence Having Fun.",
        "name":"Albert Einstein"
      }
      {
        "quote":"The person who follows the crowd will usually go no further than the crowd. The person who walks alone is likely to find himself in places no one has ever seen before.",
        "name":"Albert Einstein"
      }
      {
        "quote":"Not all who wander are lost.",
        "name":"J.R.R. Tolkien"
      }
      {
        "quote":"If nobody hates you, you're doing something wrong",
        "name":"House"
      }
    ]
    //Pick a random quote from the array of quotes and display that quote on #quote
    var randomQuoteNumber = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomQuoteNumber];
    $("#quote").html('<q>' + randomQuote.quote + '</q>' + ' - ' + randomQuote.name);
  }
)();
