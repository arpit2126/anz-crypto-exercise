export const GET_CRYPTOCCY_DATA = 'https://api.coinmarketcap.com/v1/ticker/?limit=5&convert=';

export const addCurrencyList = currencyList => ({
    type: 'ADD_CURRENCY_LIST',
    currencyList
});

export const setCurrency = (currency='SGD') => ({
    type: 'SET_CURRENCY',
    currency
});

export const clearCurrencyList = () => ({ type: 'CLEAR_CURRENCY_LIST' });

export const getCurrencyList = (currency='SGD') => (dispatch) => {
    fetch(`${GET_CRYPTOCCY_DATA}${currency}`, {method: 'GET'})
    .then(res => {
        if (res.status === 200) {
            res.json().then(currencyList => {
                dispatch(addCurrencyList(currencyList))
            });
        } else {
            throw new Error(res);
        }
    });
};
