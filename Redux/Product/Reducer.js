import {GET_PRODUCT} from './Type'


const initialState = {
    product:[],
    
}


const productReducer = (state=initialState , action)=>{
    switch(action.type){
        case GET_PRODUCT :
            return{
               
                product:action.payload
            }
           
            default : return state
    }
}

export default productReducer