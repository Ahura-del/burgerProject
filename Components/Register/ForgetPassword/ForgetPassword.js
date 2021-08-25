
import React from 'react';
import {
  View,
  Text,
  Image,

  TouchableOpacity,
  TextInput,
} from 'react-native';

const ForgetPassword = () => {
  return (
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
          <Text style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 18}}>
            Forget
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: 18}}>
            Password
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
            Enter code we just sent to
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
            hello@exmple.com
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
          />
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#555',
                paddingVertical: 12,
                paddingHorizontal: 50,
                borderRadius: 10,
              }}>
              <Text style={{fontFamily: 'Poppins', color: '#fff'}}>Back</Text>
            </TouchableOpacity>
            <Text style={{color: '#FEB500', marginLeft: 20}}>Resend code</Text>
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
  );
};

export default ForgetPassword;
