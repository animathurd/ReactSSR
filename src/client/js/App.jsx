import React from 'react';
import quotes from './quotes';

const App = () => (
    <div className="container">
        <h1>Quotes by some great people...</h1>
        {
            quotes.map(quote => (
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                        <h3 key={quote.source}>
                            {quote.quote}
                        </h3>
                        <p><i>{quote.source}</i></p>
                        </div>
                    </div>
                </div>
                )
            )
        }
    </div>
);

export default App;