import React, { Component } from 'react';
import axios from "axios";

import QuoteItem from '../quotes/quote-item';


export default class Quotes extends Component {
  constructor(){
    super();

    this.state = {
      isLoading: false,
      data: []
    };

  }
 
  getQuoteItems() {
    axios
      .get("https://metime-content.herokuapp.com/quotes")
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  quoteItems() {

    return this.state.data.map(item => {
      return (<QuoteItem key={item.title}content={item.content} />
      );
    });
  }

  componentDidMount() {
    this.getQuoteItems();
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
    <div className="quotes-wrapper">
      <div className="quote-content-wrapper">
        <ul>
       {this.quoteItems() }
       </ul>
      </div>
      </div>
      );
  }
}