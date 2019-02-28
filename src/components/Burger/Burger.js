import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)//map executes a function for each element of an array.
        .map(igKey => {// here we need to do this: cheese-> two cheese if (cheese:2) in state in BurgerBuilder.
            //console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                //console.log(i);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el);
        },[]);
    console.log(transformedIngredients);
    
    if(transformedIngredients.length===0){
        transformedIngredients=<p>PLEASE ADD INGREDIENTS!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default burger;