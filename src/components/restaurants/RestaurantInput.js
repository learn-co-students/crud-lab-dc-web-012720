import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text:""})
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit} >
          <input type="text" placeholder="Restaurant Name" name = "restaurant" value = {this.state.text} onChange = {this.handleOnChange}>
          </input>
          <input type="submit">
          </input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
