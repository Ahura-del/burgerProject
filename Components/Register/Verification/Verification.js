import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {Icon, Root, Toast} from 'native-base';
import auth from '@react-native-firebase/auth';
import {useDispatch , useSelector} from 'react-redux';
import {fetchUser, putUser} from '../../../Redux';
import axios from 'axios';
const Verification = ({navigation, route}) => {
 
  const dispatch = useDispatch();
const getEmail = useSelector(state=>state.user.user)
  const code = route.params.code;
  const stCode = String(code);

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const maxNum = 9999 ;
  const minNum = 1000;
  const randomNum = (Math.floor(Math.random()*(maxNum - minNum +1))+ minNum)
  const userEmail = auth().currentUser.email;
  const roteEmail = route.params.user.email;
  

  const phoneNum = route.params.codePhone + route.params.phoneNumber

  useEffect(()=>{
 
    try {
      dispatch(fetchUser(`http://papaberger.ir/api/user/${roteEmail}`))
      
    } catch (error) {
      console.log(error);
    }
  
  },[])




  const request = {
    "id":randomNum,
    "userName":route.params.user.name,
    "email":route.params.user.email,
    "profilePicture":route.params.user.pic ? route.params.user.pic : "" ,
    "address":"",
    "phoneNumber":phoneNum.toString()
  }
  const requestPut = {
    "id": getEmail.id,
    "email": route.params.user.email,
    "userName":  route.params.user.name,
    "phoneNumber": phoneNum,
    "address":"",
    "profilePicture": route.params.user.pic ? route.params.user.pic : getEmail.profilePicture
  }

  const verify = () => {
    
    if (num1 === '' || num2 === '' || num3 === '' || num4 === '') {
      Toast.show({
        text: 'Please enter the verification number in fields',
        type: 'danger',
        duration: 3000,
      });
      return;
    }
    if (
      stCode[0] == num1 &&
      stCode[1] == num2 &&
      stCode[2] == num3 &&
      stCode[3] == num4
    ) {

      if(getEmail.email !== undefined){
        
        console.log(getEmail.email);
        axios({
          method:"PUT",
          url:"http://papaberger.ir/api/user",
          headers:{
            "Content-Type":"application/json"
          },
          data : requestPut
        })
       .then((res)=>{
         if(res.status === 200){
          dispatch(putUser(res.data))
          AsyncStorage.setItem('user', userEmail);
          navigation.navigate('notification');
         }
       })
      }else{
    
        axios({
        method : "POST",
        url:"http://papaberger.ir/api/user",
        headers:{
          "Content-Type":"application/json"
        },
        data : request
        
      })
       .then(res=>{
         if(res.status === 200){
          AsyncStorage.setItem('user', userEmail);
          navigation.navigate('notification');
         }
       })
.catch(err=>console.log(err))
      }
    }  else {
      Toast.show({
        text: 'The verify code is invalid!',
        type: 'danger',
        duration: 3000,
      });
      return;
    }
  };

  let timer = () => {};
  const [timeLeft, setTimeLeft] = useState(60);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(60);
    clearTimeout(timer);
    startTimer();

    navigation.navigate('phoneNum')
  };
 
  return (
    <Root>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          
          <Image
            source={require('../../../assets/Image/upshape.png')}
            style={{width: '33%', height: '100%'}}
          />

          <View>
            <Text
              style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 18}}>
              Enter
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: 18}}>
              Verification code
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
              Enter code we just sent via SMS to
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
              +{route.params.codePhone} {route.params.phoneNumber}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TextInput
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: '#FEB500',
                width: 70,
                height: 70,
                textAlign: 'center',
                fontSize: 20,
              }}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={e => setNum1(e)}
            />
            <TextInput
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: '#FEB500',
                width: 70,
                height: 70,
                textAlign: 'center',
                fontSize: 20,
              }}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={e => setNum2(e)}
            />
            <TextInput
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: '#FEB500',
                width: 70,
                height: 70,
                textAlign: 'center',
                fontSize: 20,
              }}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={e => setNum3(e)}
            />
            <TextInput
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: '#FEB500',
                width: 70,
                height: 70,
                textAlign: 'center',
                fontSize: 20,
              }}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={e => setNum4(e)}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={verify}
                style={{
                  backgroundColor: '#FEB500',
                  paddingVertical: 12,
                  paddingHorizontal: 50,
                  borderRadius: 10,
                }}>
                <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
                  Verify
                </Text>
              </TouchableOpacity>

              {timeLeft === 0 ? (
                <TouchableOpacity onPress={start}>
                  <Text style={{color: '#FEB500', marginLeft: 20}}>
                    Resend code
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text style={{color: '#FEB500', marginLeft: 50}}>
                  00:{timeLeft}
                </Text>
              )}
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View></View>

          <Image
            source={require('../../../assets/Image/downshape.png')}
            style={{width: '33%', height: '100%'}}
          />
        </View>
      </View>
    </Root>
  );
};

export default Verification;
