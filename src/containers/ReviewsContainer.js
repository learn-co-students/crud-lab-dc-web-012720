import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant = {this.props.restaurant} addReview = {this.props.addReview} restaurantId = {this.props.restaurant.id}/>
        <Reviews reviews = {this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} deleteReview = {this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
