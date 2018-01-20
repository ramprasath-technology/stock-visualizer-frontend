import React, { Component } from 'react';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };

        this.setStockSymbol = this.setStockSymbol.bind(this);
        this.searchStock = this.searchStock.bind(this);
    }

    setStockSymbol(event) {
        this.setState(
            {
                searchTerm: event.target.value
            }
        );
    }

    searchStock(event) {
        event.preventDefault();
        this.props.getStock(this.state.searchTerm);      
    }


    render() {
        return (
            <form onSubmit={this.searchStock}>
                <div>
                    <label for="stockSearch">
                        Enter stock symbol to search: 
                    </label>
                    
                        <input type="text" value={this.state.searchTerm} name="stockSearch" id="stockSearch" onChange={this.setStockSymbol} />
                        <button type="submit" disabled={!this.state.searchTerm}>
                            Submit
                        </button>
                </div>

            </form>
        );
    }
}