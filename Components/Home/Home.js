import {H2, Icon} from 'native-base';
import React, {useEffect, useState,Fragment} from 'react';
import {View, Text, Image, TouchableOpacity , ActivityIndicator} from 'react-native';
import PopularMeal from './popularMeal/PopularMeal';
import {useDispatch, useSelector} from 'react-redux';
import {addCart, addNotify, delNotify, fetchUser } from '../../Redux';
import {withBadge} from 'react-native-elements';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";

import Connection from '../Connection/Connection';
import axios from 'axios';

const Home =  ({navigation}) => {
  const dispatch = useDispatch();
 
  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;
 
  useEffect(()=>{
 
    const getEmail = async()=>{
      try {
       const loginEmail = await AsyncStorage.getItem("user")
      
       if(loginEmail){
         if(loginEmail.includes('"')){
           const firstChar = loginEmail.substring(0 , loginEmail.length-1);
           const fulChar = firstChar.substring(1);
          dispatch(fetchUser(`http://papaberger.ir/api/user/${fulChar}`))
         }else{
          const fulChar1 = loginEmail
          dispatch(fetchUser(`http://papaberger.ir/api/user/${fulChar1}`))

         }
         
       }
    
      } catch (error) {
        
      }
    
    }
 
    getEmail()
  },[])

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    navigation.navigate('notify', {
      title: remoteMessage.notification.title,
      desc: remoteMessage.notification.body,
      img: remoteMessage.notification.android.imageUrl,
    });
  });


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch(addNotify(remoteMessage.notification));


    });

    return unsubscribe;
    
  }, []);

  const [data, setData] = useState([]);
  const stateCart = useSelector(state => state.cart.cart);
  const BadgeIcon = withBadge(stateCart.length)(Icon);
  // const fetchData = useSelector(state => state.product.homeProduct);
  const BadgeIconNotify = withBadge()(Icon);
  const [isLoading , setisLoading] = useState()
  // useEffect(() => {
  //   const test = [];

  //   for (let i = 0; i < 2; i++) {
  //   test.push(fetchData[i]);
  //   }
  //   setData(test);
  // }, [fetchData]);

  useEffect(()=>{
    const fetchItem = async ()=>{
      try {
        await axios.get('http://papaberger.ir/api/product')
        .then(res => {
          const responseData = res.data.reverse()
          const homeProduct = []
          for( let i=0 ; i<2 ; i++){
            homeProduct.push(responseData[i])
          }
          setData(homeProduct)
        })
        .catch(err=> console.log(err))
      } catch (error) {
        console.log(error);
      }
    }
    fetchItem()
  },[])

useEffect(()=>{
  NetInfo.fetch().then(state => {
    setisLoading(state.isConnected)

  });
  
},[])

 
 const loadingData = ()=>{
      
        
  if(!isLoading){
    return (
      <Fragment>
      <Connection />
      </Fragment>
    )
  }else{
    return (
<Fragment>
<View style={{flex: 1, flexDirection: 'column'}}>
<View style={{flex: 2, flexDirection: 'column', position: 'relative'}}>
  <Image
    source={require('../../assets/Image/welcome2.png')}
    resizeMode="cover"
    style={{width: '100%', height: '100%'}}
  />
  <View
    style={{
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 3,
      marginTop: 20,
    }}>
    <View
      style={{
        flexDirection: 'row',

        justifyContent: 'space-around',
      }}>
      <View>
        <H2 style={{marginBottom: 10}}>Explore</H2>
        <Text style={{fontFamily: 'Poppins', fontSize: 18}}>
          What would you like to eat?
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          type="FontAwesome5"
          name="heart"
          style={{fontSize: 25, marginRight: 15}}
         
        />
        {checkNotify ? (
          <TouchableOpacity
            style={{width: 30, height: 30}}
            onPress={() => {
              navigation.navigate('notify', {
                title: notifySate.title,
                desc: notifySate.body,
                img: notifySate.android.imageUrl,
              });

              dispatch(delNotify());
            }}>
            <BadgeIconNotify
              type="FontAwesome"
              name="bell"
              style={{fontSize: 25, color: 'red'}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{width: 30, height: 30}}
            onPress={() => navigation.navigate('notify')}>
            <Icon
              type="FontAwesome5"
              name="bell"
              style={{fontSize: 25}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  </View>
</View>
<View style={{flex: 1, backgroundColor: '#000'}}>
  <View
    style={{
      position: 'absolute',
      top: -85,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      width: '100%',
      height: '50%',
      backgroundColor: '#000',
    }}>
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',

        justifyContent: 'space-between',
        width: '85%',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
      <Text
        style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 14}}
        
        >
        Popular Today
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('category');
        }}>
        <Text
          style={{color: '#fff', fontFamily: 'Poppins', fontSize: 14}}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View
    style={{
      height: '100%',
      backgroundColor: '#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '85%',
      marginRight: 'auto',
      marginLeft: 'auto',
    }}>
    {data.map(item => (
      <PopularMeal
        key={item.id}
        Image={item.pic}
        name={item.name}
        desc={item.info}
        price={item.price}
        mealDitail={() => {
          navigation.navigate('fullDetail', {
            item,
          });
        }}
        shopMeal={() => {
          dispatch(addCart(item));
        }}
      />
    ))}
  </View>
</View>

<View style={{backgroundColor: '#FEB500', width: '100%'}}>
  <View
    style={{
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom: 5,
    }}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('home');
      }}>
      <Icon
        type="FontAwesome5"
        name="home"
        style={{
          backgroundColor: '#000',
          fontSize: 20,
          padding: 8,
          borderRadius: 10,
          color: '#FEB500',
        }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('category');
      }}>
      <Icon
        type="FontAwesome5"
        name="th-large"
        style={{
          padding: 8,
          fontSize: 20,
          borderRadius: 10,
          color: '#000',
        }}
      />
    </TouchableOpacity>

    {stateCart.length !== 0 ? (
      <TouchableOpacity onPress={() => navigation.navigate('cart')}>
        <BadgeIcon
          type="FontAwesome5"
          name="shopping-cart"
          style={{
            padding: 8,
            fontSize: 20,
            borderRadius: 10,
            color: '#000',
          }}
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('cart');
        }}>
        <Icon
          type="FontAwesome5"
          name="shopping-cart"
          style={{
            padding: 8,
            fontSize: 20,
            borderRadius: 10,
            color: '#000',
          }}
        />
      </TouchableOpacity>
    )}
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('profile');
      }}>
      <Icon
        type="FontAwesome"
        name="user"
        style={{
          padding: 8,
          fontSize: 20,
          borderRadius: 10,
          color: '#000',
        }}
      />
    </TouchableOpacity>
  </View>
</View>
</View>
 
</Fragment>
    )
  }
      
}
  return (
   <Fragment>
   {loadingData()}
   </Fragment>
  );
};

export default Home;
