import storage from "redux-persist/lib/storage"
import { combineReducers } from 'redux'
import { authReducer } from "./reducer/authReducer"
import { persistReducer } from "redux-persist"

const perstConfig = {
    key: 'root',
    version: 1,
    storage
}

const root = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(perstConfig, root)
export default persistedReducer