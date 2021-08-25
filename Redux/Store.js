import {createStore , combineReducers , applyMiddleware} from 'redux'
import cartReducer from './Cart/Reducer'
import productReducer from './Product/Reducer'
import {FetchProduct} from './Product/Action'
import userReducer from './User/Reducer'
import notifyReducer from './Notification/Reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    cart : cartReducer,
    product:productReducer,
    user:userReducer,
    notify:notifyReducer
})

const createStoreWithThunk = applyMiddleware(thunk)(createStore)
const Store = createStoreWithThunk(rootReducer)
Store.dispatch(FetchProduct())

export default Store