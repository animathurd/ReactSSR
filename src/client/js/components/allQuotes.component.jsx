import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllQuotes } from "../actions";

class AllQuotes extends Component {
  constructor(props) {
    super(props);
    props.getAllQuotes();
  }

  render() {
    return (
      <div>
        <h1>All Quotes</h1>
        {this.props.quotes.map(quote => (
          <div className="row" key={quote.quote}>
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
  }
}

const mapStateToProps = state => ({ quotes: state.quotes.allQuotes });

export default connect(
  mapStateToProps,
  { getAllQuotes }
)(AllQuotes);
