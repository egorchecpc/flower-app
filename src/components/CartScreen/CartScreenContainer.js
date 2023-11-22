import {connect} from "react-redux";
import CartScreen from "./CartScreen";


const CartScreenContainer = ({flowers, navigation}) => {
    return (
        <CartScreen flowers={flowers} navigation={navigation}/>
    )
}

const mapStateToProps = (state) => {
    return {
        flowers: state.main
    }
}

export default connect(mapStateToProps, null)(CartScreenContainer)