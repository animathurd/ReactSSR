import React from 'react';
var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ]
const App = () => (
    <div>
        <h1>SSR is Awesome!</h1>
        {quotes.map(quote => (<p key={quote[1]
        }>
            {quote[0]} - <i>{quote[1]}</i>
        </p>))}
    </div>
);

export default App;