import {Icon} from 'native-base';
import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {useDispatch , useSelector} from 'react-redux'
import {delCart} from '../../../../Redux'
const CartItem = props => {
  const dispatch = useDispatch()
   useSelector(state=>state.cart)

  return (
    <View
      style={{
        width: '90%',
        marginBottom: 40,
        backgroundColor: '#FEB500',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'flex-end',
        height: 100,
        borderRadius: 10,
      }}>
      <Image
        source={{uri : props.pic}}
        style={{
          width: '45%',
          height: '100%',
          position: 'absolute',
          top: -35,
          left: -55,
          zIndex: 10,
        }}
      />

      <View
        style={{
          width: '70%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '70%',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text
              style={{fontFamily: 'Poppins', fontSize: 16, paddingBottom: 10}}>
              {props.name}
            </Text>
            <Text style={{fontFamily: 'Poppins', fontSize: 10}}>
              By Navgivan Hotel
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins', fontSize: 18}}>${props.price}</Text>
            <Text>X {props.count}</Text>
          </View>
        </View>
        <View style={{paddingRight: 10, paddingTop: 8}}>
         <TouchableOpacity onPress={() => dispatch(delCart(props.id))} style={{ width:20 , height:20}} >
         <Icon
         type="FontAwesome5"
         name="times"
         style={{fontSize: 18}}
         
       />
         
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
