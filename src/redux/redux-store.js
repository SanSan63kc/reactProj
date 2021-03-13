import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./frends-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    frendsPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers)

window.store=store

export default store