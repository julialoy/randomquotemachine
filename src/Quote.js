import React, { Component } from 'react';

class Quote extends Component {
  state = {
    currentQuote: "It is our choices . . . that show what we truly are, far more than our abilities.",
    currentAuthor: "Albus Dumbledore"
  };

  fetchNewQuote = () => {
    let newQuoteObj = this.props.getQuote();

    while (newQuoteObj.selectQuote === this.state.currentQuote) {
      newQuoteObj = this.props.getQuote();
    }

    this.setState( prevState => {
      return({
        currentQuote: prevState.currentQuote = newQuoteObj.selectQuote,
        currentAuthor: prevState.currentAuthor = newQuoteObj.selectAuthor
      });
    });
  }

  render() {
    return (
      <div className="rounded" id="quote-box">
        <div className="row" id="text">
          "{ this.state.currentQuote }"
        </div>
        <div className="row justify-content-end" id="author">
          &mdash;{ this.state.currentAuthor }
        </div>
        <div className="row justify-content-end" id="button-group">
          <button className="btn btn-outline-secondary" type="button" id="tweet-quote-btn"><a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter"></i> Tweet Quote!</a></button>
          <button onClick={this.fetchNewQuote} type="button" className="btn btn-outline-secondary" id="new-quote">New Quote!</button>
        </div>
      </div>
    );
  }
};

export default Quote;