import { Icon } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, Image } from 'react-native'
import { BoxShadow } from 'react-native-shadow'

const ItemSubCategory = (props) => {
    return (
        <View
        style={{
          backgroundColor: '#FEB500',
          width: '44%',
          height: 170,
          position: 'relative',
          zIndex:10,
          borderRadius: 10,
        }}>
        <Image
          source={{uri:props.pic}}
          resizeMode="cover"
          style={{
            width: '80%',
            height: '50%',
            position: 'absolute',
            top: -30,
            right: -20,
            zIndex: 5,
          }}
        />

        <View style={{marginTop: 70, paddingLeft: 10}}>
          <Text style={{fontSize: 14}}>{props.name}</Text>
          <Text style={{fontSize: 8, marginVertical: 10}}>
            {props.desc}
          </Text>
          <Text>${props.price}</Text>
        </View>
        <BoxShadow
        setting={{
          width: 50,
          height: 50,
          color: '#FEB500',
          border: 10,
          radius: 25,
          opacity: 0.5,
          x: 1,
          y: 1,
          style: {
            marginVertical: 5,
            position: 'absolute',
            bottom: -15,
            right: -12,
          },
        }}>
        <View
          style={{
            backgroundColor: '#000',
           
            width:50,
            height:50,
            borderRadius: 50,
            justifyContent:"center",
            alignItems:"center"
            
          }}>
          <TouchableOpacity
          onPress={props.shopMeal}>
         <Icon
         type="FontAwesome5"
         name="shopping-cart"
         style={{color: '#FEB500', fontSize: 20}}
       />
         </TouchableOpacity>
        </View>
          </BoxShadow>
      </View>
    )
}

export default ItemSubCategory
