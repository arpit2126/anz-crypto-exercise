import React, { Component }from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { CurrencyDropdown, PricePanel,CurrencyListHeader } from '../../components';
import { getCurrencyList, setCurrency } from '../../actions/index';
import { bindActionCreators } from 'redux';
const css = require('./CryptoCcyList.css');
const options = ["SGD", "AUD", "EUR", "GBP", "USD", "VND"];
export class CryptoCcyList extends Component {
    constructor(props){
        super(props);
        this.props.setCurrency();
        this.props.getCurrencyList('SGD');
    }
    getPrice(data){
        let currencyProperty = `price_${this.props.currency.toLowerCase()}`;
        return `${numeral(data[currencyProperty]).format('0,0.00')}`;
    }
    renderList() {
        if(this.props.currencyList === undefined){
            return <div> Loading ....</div>;
        }
        return this.props.currencyList.map((data) => (
            <div className={css.cryptoRow}>
                <div className={css.cryptoName}>{data.name}</div>
                <div className={css.cryptoPrice}>
                    {`${this.props.currency}`}
                    </div>
                <div className={css.cryptoChange}>
                    <PricePanel
                        value={data.percent_change_24h}
                        type='Percentage'
                        valueSymbol='%'
                        percentage={data.percent_change_24h}
                    />
                    <PricePanel
                        value={this.getPrice(data)}
                        type='Price'
                        valueSymbol=''
                        percentage={data.percent_change_24h}
                    />
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                    <CurrencyDropdown
                        options={options}
                        getCurrencyList={this.props.getCurrencyList}
                        setCurrency = {this.props.setCurrency}
                    />
                    <CurrencyListHeader/>
                    {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
      return {
          currencyList: state.currencyList,
          currency: state.currency
      }
};

const mapDispatchtoProps= (dispatch) => {
        return bindActionCreators({getCurrencyList, setCurrency}, dispatch);
}

export const CryptoCcyListContainer = connect(mapStateToProps,mapDispatchtoProps)(CryptoCcyList);