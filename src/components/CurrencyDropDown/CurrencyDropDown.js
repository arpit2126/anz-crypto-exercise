import React, { Component }from 'react';
const css = require('./CurrencyDropDown.css');

export class CurrencyDropdown extends Component {
    constructor(props){
        super(props);
        this.onchange = this.onchange.bind(this);
    }

    renderOptions(){
       return this.props.options.map((currency) => {
           return <option
                   onClick={()  => {

                   }}
                   key={currency}>
                   {currency}
               </option>
        })
    }

    onchange(e) {
        this.props.getCurrencyList(e.target.value)
        this.props.setCurrency(e.target.value)
    }

    render(){
        return (
            <select className={css.currencyDropdown} onChange={this.onchange}>
                {this.renderOptions()}
            </select>
        );
    }
}