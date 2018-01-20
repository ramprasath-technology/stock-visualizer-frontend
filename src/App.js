import React, { Component } from 'react';
import Search from './search/Search';
import './App.css';
import commonData from './common';

class App extends Component {

  constructor(props) {
    super(props);
    this.getStock = this.getStock.bind(this);

    this.state = {
      stocks: ''
    };
  }

  getStock(symbol) {
    console.log(`symbol is ${symbol}`);
    const url = commonData.baseUrl + "stocks";

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {    
       this.setState(prevState => ({
         stocks: [...prevState.stocks, data]
       }));
    }).catch((error) => {
      console.log(error);
    });

  }



  render() {
    return (
      <div className="App">
        <Search getStock={this.getStock} />
      </div>
    );
  }
}

export default App;
