import {Button} from 'native-base';
import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';

const Payment = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',

          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 24}}>
            Payment
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Poppins'}}>Add New</Text>
        </View>

        <View style={{width: '100%', height: 200, marginBottom: 20}}>
          <Image
            source={require('../../../assets/Image/cart.png')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <View style={{marginBottom: 30}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Card Number"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Holder Name"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Month/year"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="CVC"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
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

        <View style={{marginTop: 70, marginBottom: 20}}>
          <Text style={{color: '#FEB500'}} onPress={()=>{navigation.navigate("profile")}}>Back</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;
