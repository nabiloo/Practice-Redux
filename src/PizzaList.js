import React, { Component } from "react"

import { connect } from 'react-redux'

class PizzaList extends Component {

    state = {
        newPizzaName: ""
    }

    handleAddClick = () => {
        const action = {
            type: 'ADD_PIZZA',
            payload: {
                id: this.props.pizzas.length + 1,
                name: this.state.newPizzaName
            }
        }


        this.props.dispatch(action)


    }

    render() {

        return <div>
            <ul>{
                this.props.pizzas.map((pizza) => {

                    return <li key={pizza.id}>{pizza.name}</li>
                })
            }</ul>

            <p>
                <input value={this.state.newPizzaName}
                    onChange={event => {
                        this.setState({ newPizzaName: event.target.value })
                    }}
                />
                <button onClick={this.handleAddClick}>Add pizza!</button>

            </p>

        </div>
    }
}





function mapStateToProps(state) {
    return {
        pizzas: state
    }
}





export default connect(mapStateToProps)(PizzaList)