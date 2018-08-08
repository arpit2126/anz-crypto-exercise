import React, { Component }from 'react';
const css = require('./CurrencyListHeader.css');

export class CurrencyListHeader extends Component {
    render(){
        return (
            <div className={css.cryptoHeader}>
                <div className={css.cryptoName}>Crypto Name</div>
                <div className={css.cryptoPrice}>Price</div>
                <div className={css.cryptoChange}>% Change(24H)</div>
            </div>
        );
    }
}