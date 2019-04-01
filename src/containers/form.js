import React from 'react';
import { connect } from 'react-redux';
import { actualOrderCards, correctOrderCards, numCorrectReset } from '../actions/actions.js';
import { createCorrectOrder, createActualOrder } from '../initialState';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: "1"
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render(){
        return (
            <div>
                <form
                onSubmit={e => {
                    e.preventDefault();
                    let suits = [];
                    switch(this.state.value){
                        case "1":
                            suits = ["Spades"];
                            break;
                        case "2":
                            suits = ["Spades", "Clubs"];
                            break;
                        case "3":
                            suits = ["Spades", "Clubs", "Diamonds"];
                            break;
                        case "4":
                            suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
                            break;
                        default:
                            suits = ["Spades"];
                    }
                    
                    this.props.dispatch(correctOrderCards(createCorrectOrder(suits)));
                    this.props.dispatch(actualOrderCards(createActualOrder(suits)));
                    this.props.dispatch(numCorrectReset());
                }}
                >
                    <label>
                        <input
                        type="radio"
                        name="suits"
                        value = "1"
                        checked={this.state.value === "1"}
                        onChange={(e) => this.handleChange(e)}
                        />
                        <span class="Form_Text">1 Suit</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="suits"
                        value = "2"
                        checked={this.state.value === "2"}
                        onChange={(e) => this.handleChange(e)}
                        />
                        <span class="Form_Text">2 Suits</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="suits"
                        value = "3"
                        checked={this.state.value === "3"}
                        onChange={(e) => this.handleChange(e)}
                        />
                        <span class="Form_Text">3 Suits</span>
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="suits"
                        value = "4"
                        checked={this.state.value === "4"}
                        onChange={(e) => this.handleChange(e)}
                        />
                        <span class="Form_Text">4 Suits</span>
                    </label>
                    <br />
                    <input
                    type="submit"
                    value="New Game"
                    />
                    <br />
                </form>
            </div>
        )
    }
}

export default connect()(Form);