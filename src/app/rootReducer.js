import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/users";
import { globalReducer } from "../features/global";

const rootReducer = combineReducers({
  users: userReducer,
  global: globalReducer,
});

export default rootReducer;
