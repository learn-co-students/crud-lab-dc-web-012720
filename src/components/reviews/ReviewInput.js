import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor () {
    super()
    this.state = {
      text: ""
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  handleOnChange = event => {
    this.setState({text: event.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <input type = "text" placeholder = "Restaurant Review" name = "review" value = {this.state.text} onChange = {this.handleOnChange}> 
          </input>
          <input type = "submit">
          </input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
