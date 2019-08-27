import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';

class App extends Component {
  state = {
    quotes: [
      {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "Albus Dumbledore"
      },
      {
        quote: "Of course it is happening inside your head . . . but why on nearth should that mean it is not real?",
        author: "Albus Dumbledore"
      },
      {
        quote: "We could all have been killed---or worse, expelled.",
        author: "Hermione Granger"
      },
      {
        quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
        author: "Albus Dumbledore"
      },
      {
        quote: "We've all got both light and dark inside us. What matters is the part we choose to act on.",
        author: "Sirius Black"
      },
      {
        quote: "No . . . it is my mercy, and not yours, that matters now.",
        author: "Albus Dumbledore"
      },
      {
        quote: "I solemnly swear that I am up to no good.",
        author: "Fred and George Weasley"
      }
    ]
  };
  
  getQuote = () => {
    const randIndx = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    const newQuote = this.state.quotes[randIndx].quote;
    const newAuthor = this.state.quotes[randIndx].author;
    return ({ 
      selectQuote: newQuote,
      selectAuthor: newAuthor
    });
  }

  render() {
    return (
        <div id="quote-container">
          <Quote 
            getQuote={this.getQuote}
          />
        </div>
    );
  };  
};

export default App;
