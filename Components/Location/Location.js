import {Button, Icon} from 'native-base';
import React from 'react';
import {Image, View, Text} from 'react-native';

const Location = ({navigation , route}) => {

  return (
    <View style={{flex: 1, flexDirection: 'column' , backgroundColor:"#000"}}>
      <View style={{flex: 2 }}>
      <View style={{position:"absolute"  , zIndex:3 , left:30 , top:30}}>
      <Icon type="MaterialIcons" name="arrow-back" style={{color:"#fff"}} onPress={()=>navigation.navigate("notification")} />
      </View>
        <Image
          source={require('../../assets/Image/location.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%' , position:"relative"}}
        />
      </View>
      <View style={{flex: 1,width: '90%', marginLeft: 'auto', marginRight: 'auto', justifyContent:"space-around" }}>
        
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              
              justifyContent: 'space-around',
              alignItems:"center",
              
            }}>
            <View style={{flex: 2, marginRight: 10}}>
              <Text style={{color: '#FEB500', fontSize: 18, fontFamily: 'Poppins'}}>
              {route.params=== undefined ? "Nana Varachha" : route.params.city}
                
              </Text>
              <Text style={{color: '#fff', fontSize: 10, fontFamily: 'Poppins'}}>
              {route.params=== undefined ? "Yogi Chowk Ground, Chikuwadi" : route.params.address}
                
              </Text>
              <Text style={{color: '#fff', fontSize: 10, fontFamily: 'Poppins'}}>
              {route.params=== undefined ? "Nana Varachha, Surat, Gujarat" : route.params.appartment}, {route.params=== undefined ? "India" : route.params.floor}
              
              </Text>
            </View>
            <View style={{flex: 1, marginTop: 20}}>
              <Button warning block onPress={()=>{navigation.navigate("setLocation")}}>
                <Text style={{fontFamily: 'Poppins'}}>CHANGE</Text>
              </Button>
            </View>
          </View>
          <View>
            <Button warning block onPress={()=>{navigation.navigate("home")}}>
              <Text style={{fontFamily: 'Poppins'}} >Confirm Location</Text>
            </Button>
          </View>
       
      </View>
    </View>
  );
};

export default Location;
