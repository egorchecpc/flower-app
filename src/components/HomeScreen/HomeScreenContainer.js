import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";
import { likeFlower, addToCart } from "../../redux/mainReducer";

const HomeScreenContainer = ({flowers, navigation, likeFlower, addToCart}) => {
    return (
        <HomeScreen flowers={flowers} navigation={navigation} likeFlower={likeFlower} addToCart={addToCart}/>
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
        },
        addToCart: (id) => {
            let action = addToCart(id);
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)