import {GET_PRODUCT } from './Type';

import axios from 'axios'


export const FetchProduct = ()=>{
return async (dispatch)=>{
    try{
    await axios.get('http://papaberger.ir/api/product')
    .then(res =>{
        dispatch(getProduct(res.data))
     
    })
    .catch(err=>console.log(err))

} catch (err){
    console.log(err);
}
}
}


export const getProduct = (product)=>{
    return{
        type:GET_PRODUCT,
        payload : product
    }
}

