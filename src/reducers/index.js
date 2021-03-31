import userReducer from "./login.reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
