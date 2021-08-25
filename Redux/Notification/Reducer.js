import {ADD_NOTIFICATION , DELL_NOTIFICATION} from './Type'



const initialState = {
    notify : {}
}



 const notifyReducer = (state = initialState , action)=>{
    switch(action.type){
        case ADD_NOTIFICATION : 
        return{
            notify:action.payload
        }
        case DELL_NOTIFICATION :
            return{
                notify :{}
            }
        default : return state
    }
}

export default notifyReducer