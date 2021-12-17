// Love Maintainer (Loving message generator)

var now = new Date(); // today's date

var year = now.getFullYear(); // Year
var month = now.getMonth()+1; // Month
var day = now.getDate(); // Date

var stDate = new Date(2019, 10, 31); // Input your starting date of relationship
var endDate = new Date(year, month, day);

// calculates the date difference between starting date of relationship and today's date.
var btMonths = endDate.getTime() - stDate.getTime();
var btDay = btMonths / (1000*60*60*24);

console.log(`You are in relationship for ${btDay} days`);

// randomly displays loving quotes.
function random_quote(quotes)
{
return quotes[Math.floor(Math.random()*quotes.length)];    
}

let quotes = 
["When you find that one that's right for you, you feel like they were put there for you, you never want to be apart.",
"The best thing to hold onto in life is each other.",
"It’s always better when we’re together.",
"Sometimes all you need is a hug from the right person and all your stress will melt away.",
"Love is when you sit beside someone doing nothing, yet you feel perfectly happy.",
"Love makes your soul crawl out from its hiding place.",
"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
"The best thing to hold onto in life is each other.",
"You may hold my hand for a while, but you hold my heart forever.",
"The first time you touched me, I knew I was born to be yours."
 ]
console.log(`Today's love quote: ${random_quote(quotes)}`);

// Random mixed arrays for food suggestion.
const randoms = [
  ['We must ', 'Anything except ', 'We should '],
  ['order ', 'home-cook ', 'eat out '],
  ['Chinese', 'Kebab', 'Pasta', 'Japanese', 'Burger', 'Fish and Chips', 'Indian']
];
//Generates random mixed message suggesting what to have together for dinner.
function generateMessage(random){
  let randMessage = '';
  let randIndex = 0;
  for(let i = 0; i < random.length; i++){
      randIndex = Math.floor(Math.random() * random[i].length);
      randMessage += random[i][randIndex];
  }
  return randMessage + '.';
}
console.log(`Today's menu suggestion: ${generateMessage(randoms)}`);