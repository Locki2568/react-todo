import {connect} from "react-redux";
import checkBox from "../components/checkBox";

const mapDispatchToProps = (dispatch) => ({
    filterCompleted: () => {
        dispatch({
            type : "FILTER",
            payload : ''
        })
    }
})
  
export default connect(null, mapDispatchToProps)(checkBox);