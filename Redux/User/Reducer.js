import {GET_USER, UPDATE_USER} from './Type'

const initialState = {
    user:[],
   
   
}


const userReducer = (state = initialState , action)=>{
    switch(action.type){
        case GET_USER : 
            return{
                user:action.payload
            }
            case UPDATE_USER : 
            return{
                user:action.payload
            }
            default : return state
    }
}

export default userReducer