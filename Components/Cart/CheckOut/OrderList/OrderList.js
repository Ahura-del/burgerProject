import React from 'react';
import {View, Text} from 'react-native';

const OrderList = (props) => {
  const totalPrice = props.count * props.price
  return (
    <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
          {props.name}   x  {props.count}
        </Text>
        <Text style={{fontFamily: 'Poppins', color: '#fff'}}>${totalPrice}</Text>
      </View>
    </View>
  );
};

export default OrderList;
