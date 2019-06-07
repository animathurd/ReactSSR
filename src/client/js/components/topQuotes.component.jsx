import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopQuotes } from "../actions";

class TopQuotes extends Component {
  constructor(props) {
    super(props);
    props.getTopQuotes();
  }

  render() {
    return (
      <div>
        <h1>Top Quotes</h1>
        {this.props.quotes.map(quote => (
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h3 key={quote.source}>
                  <i>{quote.quote}</i>
                </h3>
                <p> - {quote.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ quotes: state.quotes.topQuotes });

export default connect(
  mapStateToProps,
  { getTopQuotes }
)(TopQuotes);
