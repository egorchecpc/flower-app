import data from '../../data'
const CHANGE_CART_STATUS = 'CHANGE-CART-STATUS' 
const LIKE_FLOWER = 'LIKE-FLOWER'
let initialState = data;


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_FLOWER: {
            console.log('like in reducer')
            return state.map((f) => {
              if (f.id === action.id) {
                return { ...f, like: !f.like };
              } else {
                return f;
              }
            });
            
          }
        case CHANGE_CART_STATUS: {
          console.log('change state in reducer')
          return state.map((f) => {
            if (f.id === action.id) {
              return { ...f, cart: true};
            } else {
              return f;
            }
          });
        }
        default: return state;
    }
}

export const likeFlower = (id) => ({type:LIKE_FLOWER, id:id});
export const changeCartStatus = (id) => ({ type: CHANGE_CART_STATUS, id: id });

export default mainReducer