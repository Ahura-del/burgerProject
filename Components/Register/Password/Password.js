import {Button, Toast, Root} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
const Password = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const priveEmail = route.params.email;
// console.log(route.params.photo);
// //   const [photo, setPhoto] = useState([]);
// //   const imageChoose = () => {
// //     const options = {
// //       noData: true,
// //     };
// //     launchImageLibrary(options, response => {
// //       if (response.uri) {
// //         setPhoto(response);
// //       }
// //     });
// //   };

  



  const singInBtn = async (mail, pass) => {
    if (password == '') {
      Toast.show({
        text: 'Please Enter The Password!',
        type: 'danger',
        duration: 3000,
        buttonText: 'Ok',
      });
      return;
    } else {
      const res = await auth()
        .signInWithEmailAndPassword(mail, pass)
        .then(response => {
          if (response.user.email) {
            const data = JSON.stringify(response.user.email);
            AsyncStorage.setItem('user', data);
            navigation.navigate('home');
          }
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Toast.show({
              text: 'The Password is Worng!',
              buttonText: 'Ok',
              type: 'danger',
              duration: 3000,
            });
          }
        });
    }
  };

  const restPass = async email => {
    const res = await auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        Toast.show({
          text: 'Please check your Email',
          type: 'success',
          buttonText: 'Ok',
          duration: 3000,
        });
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          Toast.show({
            text: 'User not found!',
            type: 'danger',
            buttonText: 'close',
            duration: 3000,
          });
          return;
        }
      });
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>Enter</Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
              You Credential
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
          <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            {route.params.photo == "" ? (
                <View
                 
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                  }}></View>
              ) : (
                <Image
                  source={{uri: route.params.photo}}
                  style={{height: 100, width: 100, borderRadius: 100}}
                />
              )}
            <View style={{marginLeft: 20, width: '60%'}}>
              <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>
                Email Address
              </Text>
              <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
                {route.params.email}
              </Text>
            </View>
          </View>

          <View style={{marginBottom: -70}}>
            <View style={{marginBottom: 60, marginTop: 20}}>
              <Text style={{color: '#FEB500'}}>Enter Password</Text>
              <TextInput
                placeholder="✶✶✶✶✶✶"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                style={{color: '#fff', width: '50%'}}
                onChangeText={e => setPassword(e)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                warning
                block
                onPress={() => singInBtn(priveEmail, password)}>
                <Text style={{fontFamily: 'Poppins'}}>Sing in</Text>
              </Button>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{color: '#fff', paddingVertical: 20}}
                  onPress={() => restPass(priveEmail)}>
                  Rest your Password
                </Text>
                <Text
                  style={{color: '#fff', marginBottom: -20}}
                  onPress={() => {
                    navigation.navigate('singin');
                  }}>
                  Sing in a different account
                </Text>
              </View>
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

export default Password;
