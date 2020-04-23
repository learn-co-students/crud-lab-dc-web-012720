import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <div>
        <h1>Restaurant List:</h1>
        <ul>
          {this.props.restaurants.map(restaurant => <Restaurant restaurant = {restaurant} key = {restaurant.id} deleteRestaurant = {this.props.deleteRestaurant} />)}
        </ul>
      </div>
    );
  }
};

export default Restaurants;