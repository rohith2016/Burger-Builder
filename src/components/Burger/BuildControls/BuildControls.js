import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js';

const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {props.price}</p>
        {control.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => props.addIngredient(ctrl.type)}
                subract={() => props.subractIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>

    </div>
);

export default buildControls;