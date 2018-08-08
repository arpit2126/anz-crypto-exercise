export const currency = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            return action.currency;
        default:
            return state;
    }
};
