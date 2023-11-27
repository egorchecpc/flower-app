import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";
import { likeFlower, addToCart, removeFromCart } from "../../redux/mainReducer";

const HomeScreenContainer = ({flowers, navigation, likeFlower, addToCart}) => {
    return (
        <HomeScreen flowers={flowers} navigation={navigation} likeFlower={likeFlower} addToCart={addToCart} removeFromCart={removeFromCart}/>
    )
}

const mapStateToProps = (state) => {
    return {
        flowers: state.main
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        likeFlower: (id) => {
            let action = likeFlower(id);
            dispatch(action)
            console.log(2)
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)