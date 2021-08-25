import {Button, Toast, Root} from 'native-base';
import React, {useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const SingUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  
  


 const singUpBtn = async(email1 , password ) => {


    try{
    if (email == '' || name == '' || pass == '') {
      Toast.show({
        text: 'Please Fill All Fields',
        buttonText: 'Ok',
        type: 'danger',
        duration: 3000,
      });
      return;
    } else if (pass.length < 6) {
      Toast.show({
        text: 'Please Enter Password With 6 Character',
        buttonText: 'Ok',
        type: 'danger',
        duration: 3000,
      });
      return;
    } else {
      
      const res = await auth()
      .createUserWithEmailAndPassword(email1, password )
      .then(async(response)=>{
        if(response.additionalUserInfo.isNewUser){
          
           navigation.navigate('phoneNum',{email , name});
        }


      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
         
          Toast.show({text:'That email address is already in use!' , buttonText: 'Ok',
          type: 'danger',
          duration: 3000,})
        }
    
        if (error.code === 'auth/invalid-email') {
         
          Toast.show({text:'That email address is invalid!' , buttonText: 'Ok',
          type: 'danger',
          duration: 3000,})
        }
    
        
      });
      
    }
  }catch(err){console.log(err);}
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
              Let's Create
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: 18}}>
              Your Account
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
              Enter Email
            </Text>
            <TextInput
              keyboardType="email-address"
              placeholder="hello@example.com"
              style={{color: '#fff', fontFamily: 'Poppins'}}
              placeholderTextColor="#fff"
              value={email}
              onChangeText={e => {
                setEmail(e);
              }}
            />

            <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>
              Full Name
            </Text>
            <TextInput
              placeholder="Micra Solution"
              style={{color: '#fff', fontFamily: 'Poppins'}}
              placeholderTextColor="#fff"
              value={name}
              onChangeText={e => {
                setName(e);
              }}
            />

            <Text style={{color: '#FEB500', fontFamily: 'Poppins'}}>
              Enter Password
            </Text>
            <TextInput
              placeholder="********"
              secureTextEntry={true}
              style={{color: '#fff', fontFamily: 'Poppins'}}
              placeholderTextColor="#fff"
              onChangeText={e => {
                setPass(e);
              }}
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <Button warning block onPress={()=>singUpBtn(email , pass)}>
              <Text style={{fontFamily: 'Poppins'}}>Sing Up</Text>
            </Button>
          </View>

          <View style={{marginTop:10}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("singin")}}>
          <Text style={{color:"#fff", fontFamily: 'Poppins', textAlign:"center" , fontSize:12}}>Have Account?</Text>
          </TouchableOpacity>
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

export default SingUp;
