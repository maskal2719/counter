import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";
import app from "../App";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
