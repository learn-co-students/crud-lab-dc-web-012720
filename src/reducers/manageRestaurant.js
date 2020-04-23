
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[], reviews: []}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {text: action.restaurant, id: cuid()}
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            const remainingRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
            return {...state, restaurants: remainingRestaurants}
        case "ADD_REVIEW":
            const review = {text: action.review.text, restaurantId: action.review.restaurantId, id:cuid()}
            return {...state, reviews: [...state.reviews, review]}
        case "DELETE_REVIEW":
            const remainingReviews = state.reviews.filter(review => review.id !== action.reviewId)
            return {...state, reviews: remainingReviews}
        default: return state
    }
}
