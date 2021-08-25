import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const SingleCategory = props => {
  return (
    <View
      style={{
       
        height: 150,
        width: '45%',
        backgroundColor: '#FEB500',
        borderRadius: 10,
        position: 'relative',
      }}
      
      >
      <TouchableOpacity onPress={props.groupFunc}>
      <Image
        source={props.pic}
        resizeMode="contain"
        style={{
          width: '85%',
          height: '80%',
          position: 'absolute',
          top: -40,
          right: -20,
          zIndex:10
        }}
      />
      <View style={{marginTop: 100}}>
        <Text style={{paddingLeft: 10, fontFamily: 'Poppins', fontSize: 14}}>
          {props.name}
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default SingleCategory;
