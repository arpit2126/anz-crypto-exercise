import React from 'react';

const css = require('./PricePanel.css');

export const PricePanel = (props) => {
    let {value, type, valueSymbol, percentage=0} = props;
    return <output
        className={ `${percentage}` > 0 ? `${css['positivePanel'+ type]}` : `${css['negativePanel'+type]}` }
        >
        ${value}
        ${valueSymbol}
    </output>;
}