import axios from 'axios'
import {GET_USER,UPDATE_USER} from './Type'


export const fetchUser = (url)=>{
    return async (dispatch)=>{
        try {
            await axios.get(url)
            .then(res =>{
                dispatch(getUser(res.data))
            })
        } catch (error) {
            console.log(error);
        }
    }
}
 


export const getUser = (user )=>{
    return{
        type:GET_USER,
        payload:user,
       
    }
}

export const putUser =(user)=>{
    return{
        type:UPDATE_USER,
        payload:user
    }
}