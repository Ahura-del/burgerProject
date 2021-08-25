import { Body, Button, Container } from 'native-base'
import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import {
    responsiveFontSize,
    responsiveWidth
  } from 'react-native-responsive-dimensions';

const WelcomePages = ({ image , header , title1,title2 , setDelivery,setSingin}) => {
   
    return (
        <View style={style.container}>
        <View style={style.image}>
          <Image
            source={image}
            resizeMode="cover"
            style={{width: "100%", height: "100%"}}
          />
        </View>
        <View style={style.content}>
          <Container  style={{backgroundColor: '#000'}}>
            <Body>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  marginVertical: 20,
                  fontSize:responsiveFontSize(2)
                }}>
                {header}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: responsiveFontSize(1.3),
                }}>
                {title1}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: responsiveFontSize(1.3),
                }}>
                {' '}
                {title2}
              </Text>
              <Button  warning block style={{marginVertical:20}} onPress={setDelivery}>
                <Text style={{color: '#000', fontFamily: 'Poppins'}}>
                  Set Delivery Location
                </Text>
              </Button>
              <View>
                <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
                  Have an Account ?
                  <Text style={{color: '#FEB500'}} onPress={setSingin} > LOGIN</Text>
                </Text>
              </View>
            </Body>
          </Container>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
    container: {
        width:responsiveWidth(100),
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
    },
    image: {
      flex: 2,
    
    },
    content: {
      flex: 1,
    },
  });

export default WelcomePages
