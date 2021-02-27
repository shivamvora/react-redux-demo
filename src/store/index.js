import {createStore} from "redux";

import userReducers from "./reducers/userReducers";

const store = createStore(userReducers);

export default store;