import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {Root, Toast} from 'native-base';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../../../Redux';
import CodeInput from 'react-native-confirmation-code-input';
import axios from 'axios';
const Verification = ({navigation, route}) => {
  const dispatch = useDispatch();
  const code = route.params.code;
  const stCode = String(code);
  const inputRef = useRef('codeInputRef2');

  const userEmail = auth().currentUser.email;
  const roteEmail = route.params.user.email;

  const phoneNum = route.params.codePhone + route.params.phoneNumber;

  useEffect(() => {
    try {
      dispatch(fetchUser(`http://papaberger.ir/api/user/${roteEmail}`));
    } catch (error) {
      console.log(error);
    }
  }, []);
  const maxNum = 9999;
  const minNum = 1000;
  const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  const request = {
    "id": randomNum,
    "userName": route.params.user.name,
    "email": route.params.user.email,
    "profilePicture": route.params.user.pic ? route.params.user.pic : "",
    "address": "",
    "phoneNumber": phoneNum.toString(),
  };

  const onFinishCheckingCode2 = async (code) => {
    if (code) {
      try {
        const response = await axios.post(
          'http://papaberger.ir/api/user',
          request,
        );
        if (response.status === 200) {
          AsyncStorage.setItem('user', userEmail);
          navigation.navigate('notification');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
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

    navigation.navigate('phoneNum');
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
            <CodeInput
              ref={inputRef}
              keyboardType="numeric"
              codeLength={4}
              size={70}
              className="border-box"
              activeColor="#FEB500"
              inactiveColor="#FEB500"
              compareWithCode={stCode}
              cellBorderWidth={2}
              autoFocus={false}
              codeInputStyle={{
                fontWeight: '800',
                fontSize: 20,
                color: '#fdfdfdfd',
              }}
              onFulfill={isValid => onFinishCheckingCode2(isValid)}
            />
          </View>
          <View
            style={{
              
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <View style={{  flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={()=>navigation.navigate('phoneNum')}
                style={{
              
                  backgroundColor: '#FEB500',
                  paddingVertical: 12,
                  paddingHorizontal: 50,
                  borderRadius: 10,
                }}>
                <Text style={{fontFamily: 'Poppins', color: '#fff'}}>Back</Text>
              </TouchableOpacity>
              {timeLeft === 0 ? (
              <TouchableOpacity  onPress={start}>
                <Text style={{color: '#FEB500', marginLeft: 20}}>
                  Resend code
                </Text>
              </TouchableOpacity>
              ) : (
              <Text style={{color: '#FEB500', marginLeft: 50 }}>
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
