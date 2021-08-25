import React, {useState} from 'react';
import {Icon, Button, Toast, Root} from 'native-base';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { putUser } from '../../../Redux';

const UpdateProfile = ({navigation , route}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch()

  const [photo, setPhoto] = useState([]);

  const imageChoose = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto(response);
        
      }
    });
  };

  const update = ()=>{
    if(photo.uri === undefined){
      Toast.show({text:"Please select a picture" , type:"warning" , duration:3000})
      return
    }else{

      const request = {
        "id": route.params.user.id,
        "email": route.params.user.email,
        "userName": name ? name : route.params.user.userName,
        "phoneNumber": phone ? phone : route.params.user.phoneNumber,
        "address": route.params.user.address,
        "profilePicture": photo.uri
      }
      axios.put("http://papaberger.ir/api/user" , request)
      .then(res=>{
        if(res.status === 200){
          
          dispatch(putUser(res.data))
          navigation.navigate("home")
          
        }
      })
      .catch(err=>console.log(err))
    }
  }
    
    

  return (
    <Root>
    
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginTop: 30,
          marginRight: 'auto',
          alignItems: 'center',
        }}>
        <View style={{width: 150, height: 150, borderRadius: 100}}>
          {!photo.uri ? (
            <View>
              <Image
                source={require('../../../assets/Image/profile.png')}
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: 100}}
              />
              <Icon
                onPress={imageChoose}
                type="FontAwesome5"
                name="pencil-alt"
                style={{
                  color: '#555',
                  fontSize: 16,
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: '#FFF',
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                }}
              />
            </View>
          ) : (
            <View>
              <Image
                source={{uri: photo.uri}}
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: 100}}
              />
              <Icon
                onPress={imageChoose}
                type="FontAwesome5"
                name="pencil-alt"
                style={{
                  color: '#555',
                  fontSize: 16,
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: '#FFF',
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                }}
              />
            </View>
          )}
        </View>

        <View style={{width: '100%', marginTop: 40}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
                textAlign: 'center',
              }}
              onChangeText={e => setName(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#bbb"
              keyboardType="phone-pad"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
                textAlign: 'center',
              }}
              onChangeText={e => setPhone(e)}
            />
          </View>
        </View>

        <View style={{width: '60%', marginTop: 50}}>
          <Button warning block onPress={update}>
            <Text>Update Profile</Text>
          </Button>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Text style={{color: '#FEB500'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </Root>
  );
};

export default UpdateProfile;
