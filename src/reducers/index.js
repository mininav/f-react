import { combineReducers } from "redux";
import products from "./products";
import productTree from "./productTree";
import measuresReducer from './measuresReducer'

export default combineReducers({
    measuresReducer,
    products,
    productTree
})
