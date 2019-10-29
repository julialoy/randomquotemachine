import React, { Component } from 'react';

const LANGUAGES = {
  "en": "English",
  "sv": "Svenska",
  "ru": "Русский"
}

class Quote extends Component {
  state = {
    currentQuote: "",
    currentAuthor: "",
    currentBook: "",
    currentLang: "",
    currentIndex: null,
    currentAvailableLangs: []
  };

  fetchNewQuote = () => {
    let newQuoteObj = this.props.getRandomQuote();

    while (newQuoteObj.selectIndex === this.state.currentIndex) {
      newQuoteObj = this.props.getRandomQuote();
    }

    this.setState( prevState => {
      return({
        currentQuote: prevState.currentQuote = newQuoteObj.selectQuote,
        currentAuthor: prevState.currentAuthor = newQuoteObj.selectAuthor,
        currentBook: prevState.currentBook = newQuoteObj.selectBook,
        currentLang: prevState.currentLang = newQuoteObj.selectLang,
        currentIndex: prevState.currentIndex = newQuoteObj.selectIndex,
        currentAvailableLangs: prevState.currentAvailableLangs = newQuoteObj.selectAvailLangs
      });
    });
  }

  fetchQuoteTranslation = (evt) => {
    let newLangQuoteObj = this.props.quoteLangRequest(evt.target.id, this.state.currentIndex);
    this.setState( prevState => {
      return({
        currentQuote: prevState.currentQuote = newLangQuoteObj.updateQuote,
        currentAuthor: prevState.currentAuthor = newLangQuoteObj.updateAuthor,
        currentBook: prevState.currentBook = newLangQuoteObj.updateBook,
        currentLang: prevState.currentLang = newLangQuoteObj.updateLang
      });
    });
  }

  fetchFirstQuote= () => {
    if (this.state.currentQuote === "") {
      this.fetchNewQuote();
    }
  }

  render() {
    this.fetchFirstQuote();
    return (
      <div className="rounded" id="quote-box">
        <div className="row" id="text">
          { this.state.currentQuote }
        </div>
        <div className="row justify-content-end" id="author">
          &mdash;{ this.state.currentAuthor }
        </div>
        <div className="row justify-content-end" id="button-group-lang">
          { this.state.currentAvailableLangs.map( (item) =>
            <button className="btn btn-outline-secondary" type="button" onClick={this.fetchQuoteTranslation} id={item} key={item}>{LANGUAGES[item]}</button>
          )}
        </div>
        <div className="row justify-content-end" id="button-group-quote">
          <button className="btn btn-outline-secondary" type="button" id="tweet-quote-btn"><a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter"></i> Tweet Quote!</a></button>
          <button onClick={this.fetchNewQuote} type="button" className="btn btn-outline-secondary" id="new-quote">New Quote!</button>
        </div>
      </div>
    );
  }
};

export default Quote;