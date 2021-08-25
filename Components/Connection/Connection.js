import { Icon } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'

const Connection = () => {
    return (
        <View style={{flex:1 , flexDirection:"column" , backgroundColor:"#000" , justifyContent:"center"  }}>
           <View style={{alignItems:"center"}}>
           <View>
           <Icon type='FontAwesome' name="wifi" style={{color:"#FEB500" , fontSize:50}} />
       </View>
       <View>
       <Text style={{color:"#FEB500" , fontSize:18 , marginTop:10}}> No Connection</Text>
       </View>
           
           </View>
        </View>
    )
}

export default Connection
