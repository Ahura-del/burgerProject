import React from 'react';
import {View, Text, Image} from 'react-native';

const CheckOutPayment = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: props.color1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        width: 250,
      }}>
      <Image
        source={require('../../../../assets/Image/mastercard.png')}
        resizeMode="center"
        style={{width: '50%', height: '50%'}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 10}}>* * * *</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: 'Poppins', marginRight: 10}}>4</Text>
          <Text style={{fontFamily: 'Poppins', marginRight: 10}}>5</Text>
          <Text style={{fontFamily: 'Poppins', marginRight: 10}}>6</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckOutPayment;
