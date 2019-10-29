import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';

class App extends Component {
  state = {
    quotes: [
      [
        {
          quote: "It does not do to dwell on dreams and forget to live.",
          author: "Albus Dumbledore", 
          book: "Harry Potter and the Sorcerer's Stone",
          lang: "en"
        },
        {
          quote: "Det duger inte att dröja sig kvar vid drömmar och glömma att leva, kom ihåg det.",
          author: "Albus Dumbledore",
          book: "Harry Potter och de Vises Sten",
          lang: "sv"
        },
        {
          quote: "Нельзя цепляться за мечты и сны, забывая о настоящем, забывая о своей жизни.",
          author: "Альбус Дамблдор",
          book: "Гарри Поттер и Философский Камень",
          lang: "ru"
        },
      ],
      [
        {
          quote: "Of course it is happening inside your head . . . but why on earth should that mean it is not real?",
          author: "Albus Dumbledore", 
          book: "Harry Potter and the Deathly Hallows",
          lang: "en"
        },
        {
          quote: "Det är klart att det händer inne i huvudet på dig . . . men varför i all världen skulle det betyda att det inte är verkligt?",
          author: "Albus Dumbledore",
          book: "Harry Potter och Dödsrelikerna",
          lang: "sv"
        },
        {
          quote: "Конечно, это происходит у тебя в голове . . . но кто сказал тебе, что поэтому оно не должно быть правдой?",
          author: "Альбус Дамблдор",
          book: "Гарри Поттер и Дары Смерти",
          lang: "ru"
        }
      ],
      [
        {
          quote: "We could all have been killed---or worse, expelled.",
          author: "Hermione Granger", 
          book: "Harry Potter and the Sorcerer's Stone",
          lang: "en"
        },
        {
          quote: "Vi kunde ha blivit dödade allihop---eller ännu värre, blivit relegerade.",
          author: "Hermione Granger",
          book: "Harry Potter och de Vises Sten",
          lang: "sv"
        },
        {
          quote: "Нас всех могли убить . . . или, что еще хуже, исключить из школы.",
          author: "Гермиона Грэйнджер",
          book: "Гарри Поттер и Философский Камень",
          lang: "ru"
        }
      ],
      [
        {
          quote: "No . . . it is my mercy, and not yours, that matters now.",
          author: "Albus Dumbledore", 
          book: "Harry Potter and the Half-Blood Prince",
          lang: "en"
        },
        {
          quote: "Nej . . . det är min nåd och onåd som gäller nu, inte tvärt om.",
          author: "Albus Dumbledore",
          book: "Harry Potter och Halvblodsprinsen",
          lang: "sv"
        }
      ],
      [
        {
          quote: "I solemnly swear that I am up to no good.",
          author: "Fred and George Weasley",
          book: "Harry Potter and the Prisoner of Azkaban",
          lang: "en"
        },
        {
          quote: "Jag svär högtidligt att jag har något rackartyg i kikarn.",
          author: "Fred och George Weasley",
          book: "Harry Potter och Fången från Azkaban",
          lang: "sv"
        },
        {
          quote: "Торжественно клянусь, что замышляю шалость, и только шалость.",
          author: "Фред и Джордж Уизли",
          book: "Гарри Поттер и Узник Азкабана",
          lang: "ru"
        } 
      ],
      [
        {
          quote: "It is our choices . . . that show what we truly are, far more than our abilities.",
          author: "Albus Dumbledore",
          book: "Harry Potter and the Chamber of Secrets",
          lang: "en"
        },
        {
          quote: "Det är våra val i livet . . . som visar vilka vi egentligen är, mycket mer än våra medfödda egenskaper.",
          author: "Albus Dumbledore",
          book: "Harry Potter och Hemligheternas Kammare",
          lang: "sv"
        },
        {
          quote: "Ведь человек---это не свойство характера, а сделанный им выбор.",
          author: "Альбус Дамблдор",
          book: "Гарри Поттер и Тайная Комната",
          lang: "ru"
        }
      ]
    ],
    defaultLang: "en"
  };
  
  handleQuoteLangRequest = (lang, ind) => {
    const langQuoteObj = this.state.quotes[ind].filter( (q) => q.lang === lang);
    const langQuote = langQuoteObj[0].quote;
    const langAuthor = langQuoteObj[0].author;
    const langBook = langQuoteObj[0].book;
    console.log("FETCH: ", langQuoteObj);
    return ({
      updateQuote: langQuote,
      updateAuthor: langAuthor,
      updateBook: langBook,
      updateLang: lang
    });
  }
  
  handleLanguageSwitch = (lang, ind) => {
    this.setState({defaultLang: lang});
    this.fetchQuoteTranslation(lang, ind);
  }

  handleAvailableLangsUpdate = (index) => {
    let langArray = [];
    for (let i = 0; i < this.state.quotes[index].length; i++) {
      langArray.push(this.state.quotes[index][i].lang);
    }
    return langArray;
  }

  getRandomQuote = () => {
    const randIndx = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    const selectQuoteObj = this.state.quotes[randIndx].filter( (q) => q.lang === this.state.defaultLang );
    const newQuote = selectQuoteObj[0].quote;
    const newAuthor = selectQuoteObj[0].author;
    const newBook = selectQuoteObj[0].book;
    const availLangs = this.handleAvailableLangsUpdate(randIndx);
    return ({ 
      selectQuote: newQuote,
      selectAuthor: newAuthor,
      selectBook: newBook,
      selectLang: this.state.defaultLang,
      selectIndex: randIndx,
      selectAvailLangs: availLangs
    });
  }

  render() {
    return (
        <div id="quote-container">
          <Quote 
            getRandomQuote={this.getRandomQuote}
            requestLangSwitch={this.handleLanguageSwitch}
            quoteLangRequest={this.handleQuoteLangRequest}
          />
        </div>
    );
  };  
};

export default App;
