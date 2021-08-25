import React from 'react';
import {View, Text, Image } from 'react-native';

const SubNotify = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FEB500',
        borderRadius: 10,
        padding:15,
        marginTop:15
      }}>
      <View style={{flex: 1, width: 65, height: 65}}>
        <Image
          source={{uri:props.img}}
          style={{borderRadius: 100 , borderWidth:1 , borderColor:"#FEB500"}}
          height="100%"
          width="100%"
        />
      </View>
      <View style={{flex: 3, marginLeft: 15}}>
        <View >
          <Text style={{color: '#fff' , fontSize:24,fontFamily:"Poppins"}}>{props.title}</Text>
        </View>
        <View>
          <Text style={{color: '#ccc' ,paddingTop:10 ,fontSize:12 ,overflow:"hidden",fontFamily:"Poppins"}}>{props.desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default SubNotify;
