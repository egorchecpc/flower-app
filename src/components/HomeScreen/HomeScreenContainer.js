import {connect} from "react-redux";
import HomeScreen from "./HomeScreen";
import { likeFlower, changeCartStatus } from "../../redux/mainReducer";

const HomeScreenContainer = ({flowers, navigation, likeFlower, changeCartStatus}) => {
    return (
        <HomeScreen flowers={flowers} navigation={navigation} likeFlower={likeFlower} changeCartStatus={changeCartStatus}/>
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
            console.log('like in Home container')
            let action = likeFlower(id);
            dispatch(action)
        },
        changeCartStatus: (id) => {
            console.log('change in Home container')
            let action = changeCartStatus(id);
            dispatch(action)
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)