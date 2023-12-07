let quotes = [
  `“A journey of a thousand miles begins with one single step.”`,
  `“The greatest glory in living lies not in never falling, but in rising every time we fall.”`,
  `“The way to get started is to quit talking and begin doing.”`,
  `“Tell me and I forget. Teach me and I remember. Involve me and I learn.”`,
  `“In the end, it's not the years in your life that count. It's the life in your years.”`,
  `“Never let the fear of striking out keep you from playing the game.”`,
  `“Life is either a daring adventure or nothing at all.”`,
  `“You miss 100% of the shots you don’t take.”`,
  `“Life is not measured by the number of breaths we take, but by the moments that take our breath away.”`,
  `“It does not matter how slowly you go as long as you do not stop.”`,
  `“Remember that not getting what you want is sometimes a wonderful stroke of luck.”`,
  `“Our lives begin to end the day we become silent about things that matter.”`,
  `“Dreaming, after all, is a form of planning.”`,
  `“Life is what we make it, always has been, always will be.”`,
  `“The only way to do great work is to love what you do.”`,
  `“If you can dream it, you can achieve it.”`,
  `“Almost everything will work again if you unplug it for a few minutes, including you.”`,
  `“What you do speaks so loudly that I cannot hear what you say.”`,
  `“The power of imagination makes us infinite.”`,
  `“Don’t count the days, make the days count.”`,
  `“A year from now you may wish you had started today.”`,
  `“Do, or do not. There is no try.”`,
  `“Not everything that is faced can be changed, but nothing can be changed until it is faced.”`,
  `“The way to get started is to quit talking and begin doing.”`,
  `“Be who you are and say what you feel, because those who ind don't matter and those who matter don't mind.”`,
  `“We cannot direct the wind, but we can adjust the sails.”`,
  `“If life were predictable it would cease to be life, and be without flavor.”`,
  `“When you reach the end of your rope, tie a knot in it and hang on.”`,
  `“Don't judge each day by the harvest you reap but by the seeds that you plant.”`,
  `“The only impossible journey is the one you never begin.”`,
  `“Only a life lived for others is a life worthwhile.”`,
  `“Do not let making a living prevent you from making a life”`,
  `“Life is ours to be spent, not to be saved.”`,
  `“In three words I can sum up everything I've learned about life: it goes on.”`,
  `“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.”`,
  `“Success is not final; failure is not fatal: It is the courage to continue that counts.”`,
  `“If you really look closely, most overnight successes took a long time.”`,
  `“I find that the harder I work, the more luck I seem to have.”`,
  `“I never dreamed about success, I worked for it.”`,
  `“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”`,
  `“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.”`,
  `“Things work out best for those who make the best of how things work out.”`,
  `“Always bear in mind that your own resolution to success is more important than any other one thing.”`,
  `“Success is walking from failure to failure with no loss of enthusiasm.”`,
  `“If you are not willing to risk the usual, you will have to settle for the ordinary.”`,
  `“Whether you think you can or you think you can't, you're right.”`,
  `“The question isn't who is going to let me; it's who is going to stop me.”`,
  `“Believe you can and you're halfway there.”`,
  `“Winning isn't everything, but wanting to win is.”`,
  `“Don't be afraid to give up the good to go for the great.”`,
  `“It is easy to sit up and take notice, what's difficult is getting up
  and taking action.”`,
];

function roll() {
  let randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomQuoteNumber];
  document.getElementById("quote-number").innerHTML = randomQuoteNumber;
  document.getElementById("quote").innerHTML = randomQuote;
}

console.log(randomQuoteNumber);
console.log(randomQuote);
