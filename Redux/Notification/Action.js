import {ADD_NOTIFICATION , DELL_NOTIFICATION} from './Type'

export const addNotify = (notify)=>{
    return{
        type:ADD_NOTIFICATION,
        payload:notify
    }
}
export const delNotify = ()=>{
    return{
        type:DELL_NOTIFICATION
    }
}