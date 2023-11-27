import {connect} from "react-redux";
import CartScreen from "./CartScreen";
import { likeFlower, addToCart, removeFromCart } from "../../redux/mainReducer";

const CartScreenContainer = ({flowers, navigation}) => {
    return (
        <CartScreen flowers={flowers} navigation={navigation} likeFlower={likeFlower} addToCart={addToCart} removeFromCart={removeFromCart}/>
    )
}

const mapStateToProps = (state) => {
    return {
        flowers: state.main.filter(flower => flower.cart === true)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        likeFlower: (id) => {
            let action = likeFlower(id);
            dispatch(action);
            console.log('2`')
        },
        addToCart: (id) => {
            let action = addToCart(id);
            dispatch(action)
        },
        removeFromCart: (id) => {
            let action = removeFromCart(id);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreenContainer)