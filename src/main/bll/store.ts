import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import employeesReducer from "./employess-reducer";

const rootReducer = combineReducers({
    employees: employeesReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;