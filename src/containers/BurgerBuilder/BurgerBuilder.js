import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from'../../components/UI/Modal/Modal.js';

const INGREDIENTS_PRICE = {
    salad: 20,
    cheese: 25,
    meat: 60,
    bacon: 50
};

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}

    // }

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        price: 50,
        purchasable: false
    }
    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        
        this.setState({ purchasable: sum > 0 });   
        
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        UpdatedIngredients[type] = newCount;

        const newPrice = this.state.price + INGREDIENTS_PRICE[type];
        //return 0;

        this.setState({ price: newPrice, ingredients: UpdatedIngredients });
        this.updatePurchaseState(UpdatedIngredients);
    }

    subractIngredientHandler = (type) => {
        if (this.state.ingredients[type] === 0) {
            return;
        }
        else {
            const newCount = this.state.ingredients[type] - 1;
            const UpdatedIngredients = {
                ...this.state.ingredients
            }
            UpdatedIngredients[type] = newCount;

            const newPrice = this.state.price - INGREDIENTS_PRICE[type];
            //return 0;

            this.setState({ price: newPrice, ingredients: UpdatedIngredients })
            //this.updatePurchaseState(); this wont get immediately updated state due to properties of setState
            this.updatePurchaseState(UpdatedIngredients);
        }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal/>
                <Burger ingredients={this.state.ingredients}></Burger>
                {/* <p>Current Price: {this.state.price}</p> it is printed outside buildcontrols*/}
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    subractIngredient={this.subractIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.price} />
            </Aux>
        )
    }
}

export default BurgerBuilder;