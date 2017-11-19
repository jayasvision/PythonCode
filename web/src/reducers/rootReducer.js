import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import homeReducer from "./HomeReducer";
import authReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
	routing: routerReducer,
	home: homeReducer,
	authReducer: authReducer,
	form: formReducer,
});
export default rootReducer;
