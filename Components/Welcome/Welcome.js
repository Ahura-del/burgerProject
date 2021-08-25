import React ,{ useEffect, useState } from 'react';
import { ScrollView} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import WelcomePages from './WelcomePages';
import Connection from '../Connection/Connection';
import { Fragment } from 'react';


const Welcome = ({navigation}) => {
 const [net , setNet] = useState()
 useEffect(()=>{
  NetInfo.fetch().then(state => {
    setNet(state.isConnected)
  });
  
 } , [])
  const setDelivery = ()=>{
    if(net){

      navigation.navigate('singup')
    }else{
      navigation.navigate('connection')
    }
  }
  const setSingin=()=>{
    if(net){

      navigation.navigate('singin')
    }else{
      navigation.navigate('connection')
    }
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      <WelcomePages
        image={require('../../assets/Image/welcome1.png')}
        header="Delivery Address"
        title1="Start your order by typing "
        title2="your address"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome2.png')}
        header="Customised Burger"
        title1="Customised your Pizza through the"
        title2="Burger Maker tool"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome3.png')}
        header="Your Burger is Coming?"
        title1="Submit your order and just wait"
        title2="for your Burger?"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
    </ScrollView>
  );
};

export default Welcome;
