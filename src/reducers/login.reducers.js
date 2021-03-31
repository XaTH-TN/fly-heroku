import { loginConstants } from "../constants/login.constants";
import { setAuthority } from "../utils/authority";

const initialState = {
  loggedIn: false,
  user: {}
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case loginConstants.LOGIN_SUCCESS:
            setAuthority(action.user.id_token)
            return {
                ...state,
                loggedIn: true,
                user: {...action.user}
            }  
        case loginConstants.LOGOUT_REQUEST:
            localStorage.clear();
            return {
                loggedIn: false,
                user: {}
            }  
        default:
            return state;
    }
}

export default loginReducer;