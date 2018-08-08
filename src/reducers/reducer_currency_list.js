export const currencyList = (state = [], action) => {
    switch (action.type) {
        case 'GET_CURRENCY_LIST':
        case 'FETCHING_CURRENCY_LIST':
            return [];
        case 'ADD_CURRENCY_LIST':
            return action.currencyList;
        case 'CLEAR_CURRENCY_LIST':
            return [];
        default:
            return state;
    }
};