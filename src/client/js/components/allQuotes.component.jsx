import React from "react";
import quotes from "../data/quotes";

const AllQuotes = () => (
  <div>
    <h1>All Quotes</h1>
    {quotes.map(quote => (
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h3 key={quote.source}>
              <i>{quote.quote}</i>
            </h3>
            <p>{quote.source}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AllQuotes;
