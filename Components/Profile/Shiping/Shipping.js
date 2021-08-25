import {Button} from 'native-base';
import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Shipping = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View
        style={{
          width: '90%',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{marginVertical: 40 , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
          <Text style={{fontFamily: 'Poppins', color: '#FEB500', fontSize: 24}}>
            Shipping
          </Text>
          <Text style={{fontFamily: 'Poppins',color:"#fff"}} onPress={()=>{navigation.navigate("setShipping")}}>Add New</Text>
        </View>
        <View style={{marginBottom: 50}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="City"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Address"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Appartment"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
          <TextInput
            placeholder="Floor"
            placeholderTextColor="#bbb"
            style={{
              fontFamily: 'Poppins',
              width: '100%',
              height: 50,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}
          />
        </View>
        </View>
        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button block warning>
            <Text style={{fontFamily: 'Poppins'}}>Update Profile</Text>
          </Button>
        </View>
        <View style={{marginTop:100}}>
        <Text style={{fontFamily: 'Poppins', color: '#FEB500'}} onPress={()=>{navigation.navigate("profile")}}>Back</Text>
      </View>
      </View>
      
    </View>
  );
};

export default Shipping;
