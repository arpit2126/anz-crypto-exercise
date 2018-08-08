import { combineReducers } from 'redux';
import { currencyList } from "./reducer_currency_list";
import { currency } from "./reducer_currency";

export const rootReducer = combineReducers({
    currencyList: currencyList,
    currency: currency
});
