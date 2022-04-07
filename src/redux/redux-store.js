import {addGoodsReducer} from "./addGoods-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    addGoods: addGoodsReducer
})

let store = createStore(reducers)
window.store = store

export default store