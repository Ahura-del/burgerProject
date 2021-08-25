import { Icon } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'

const CheckOutAddress = () => {
    return (
        <View
              style={{
                width: 260,
                padding: 15,
                backgroundColor: '#fff',
                borderRadius: 10,
                position: 'relative',
                marginTop:25,
                marginRight:20,
                marginLeft:20
              }}>
              <Icon
                type="FontAwesome"
                name="check-circle"
                style={{
                  color: '#FEB500',
                  fontSize: 30,
                  position: 'absolute',
                  top: -7,
                  right: -2,
                }}
              />
              <View>
                <Text style={{color: '#000'}}>201, Micra solution</Text>
                <Text style={{color: '#7e7e7e'}}>Nilkanth plaza</Text>
                <Text style={{color: '#7e7e7e'}}>kiranchowk, surat</Text>
              </View>
              <Icon type="FontAwesome5"  name="pencil-alt" style={{fontSize:18 , color:"#7e7e7e" , position:"absolute" , bottom:5, right:5}}/>
            </View>
    )
}

export default CheckOutAddress
