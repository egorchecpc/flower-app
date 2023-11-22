import data from '../../data'
const ADD_TO_CART = 'ADD-TO-CART' 
const LIKE_FLOWER = 'LIKE-FLOWER'
let initialState = data;


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_FLOWER: {
            return state.map((f) => {
              if (f.id === action.id) {
                return { ...f, like: !f.like };
              } else {
                return f;
              }
            });
          }
        case ADD_TO_CART: {
          return state.map((f) => {
            if (f.id === action.id) {
              return { ...f, cart: !f.cart };
            } else {
              return f;
            }
          });
        }
        default: return state;
    }
}

export const likeFlower = (id) => ({type:LIKE_FLOWER, id:id})
export const addToCart = (id) => ({type:ADD_TO_CART, id:id})

export default mainReducer