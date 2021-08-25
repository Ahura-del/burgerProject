import axios from 'axios';
import {Button, Icon, Toast, Root} from 'native-base';
import React, {Fragment,  useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import {verifyCode} from '../../../Redux/index'


const PhoneNumber = ({navigation , route}) => {

  
  const withCallingCode = true;
  const withAlphaFilter = true;
  const [country, setCountry] = useState([]);
  const [countryCode, setCountryCode] = useState('');
  const [countryShow, setCountryShow] = useState(false);
  const [num, setNum] = useState('');
  const choseCountry = () => {
    if (countryShow) {
      setCountryShow(false);
    } else {
      setCountryShow(true);
    }
  };

  const onSelect = country => {
    setCountry(country);
    setCountryCode(country.cca2);
  };

  const signInWithPhoneNumber = async () => {
  
    try {
      if (num === '' || countryCode === '') {
        Toast.show({
          text: 'Please set the phone number',
          buttonText: 'ok',
          type: 'danger',
          duration: 3000,
        });
        return;
      } else {

const maxNum = 9999 ;
const minNum = 1000;
const randomNum = (Math.floor(Math.random()*(maxNum - minNum +1))+ minNum)


        const select = {
          
            "op" : "pattern",
            "user" : "09390241554",
            "pass":  "faraz3840221587",
            "fromNum" : "3000505",
            "toNum": "+"+country.callingCode+num,
            "patternCode": "a5nid5suye",
            "inputData" : 	[
              {
                "verification-code": randomNum
              }	
            ]
          
        }


         axios.post('https://ippanel.com/api/select' , select)
          .then(res =>{
         
            if(res.status === 200){
            
              navigation.navigate('verification', {
                phoneNumber: num,
                codePhone: country.callingCode,
                code : randomNum,
                user:route.params
              });
            }else{
              console.log("error on sending message , please try again");
            }
          })
          .catch(error =>{
            console.log(error);
          })
       
      }
    } catch (error) {console.log(error)}




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
              Set Phone
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: 18}}>
              Number
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>
              Your region
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                color: '#fff',
              }}
              onPress={choseCountry}>
              {countryShow ? (
                <Fragment>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CountryPicker
                      theme={DARK_THEME}
                      visible
                      {...{
                        country,
                        onSelect,
                        countryCode,
                        withCallingCode,
                        withAlphaFilter,
                      }}
                    />
                    <Text style={{color: '#fff'}}>+ {country.callingCode}</Text>
                  </View>
                </Fragment>
              ) : (
                <Text style={{color: '#fff'}}>select your country</Text>
              )}
              <Icon
                name="angle-down"
                type="FontAwesome"
                style={{color: '#fff'}}
              />
            </TouchableOpacity>

            <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>
              Enter Phone Number
            </Text>
            <TextInput
              placeholder="0854-7474-9384"
              style={{color: '#fff', fontFamily: 'Poppins'}}
              placeholderTextColor="#fff"
              keyboardType="numeric"
              onChangeText={e => setNum(e)}
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <Button warning block onPress={signInWithPhoneNumber}>
              <Text style={{fontFamily: 'Poppins'}}>Save Number</Text>
            </Button>
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

export default PhoneNumber;






