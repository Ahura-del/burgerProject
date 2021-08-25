
import React , {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
} from 'react-native';
import {Button} from 'native-base'

const Notification = ({navigation}) => {
 
    const [toggle, setToggle] = useState(false);
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
          source={require('../../assets/Image/upshape.png')}
          style={{width: '33%', height: '100%'}}
        />
        <View>
          <Text style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 18}}>
            Enable
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: 18}}>
            Notification
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
            Stay notified about new food
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
            Updates ,menu and receipt
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
          <Text style={{color:"#FEB500" , fontFamily: 'Poppins'}}>Updates</Text>
          <Text style={{color:"#fff" , fontFamily:"Poppins"}}>Show Notification</Text>
          </View>
          <View>
          <Switch
        trackColor={{false: 'gray', true: '#fff'}}
        thumbColor="#FEB500"
        ios_backgroundColor="gray"
        onValueChange={(value) => setToggle(value)}
        value={toggle}
      />
          </View>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
        <Button warning block onPress={()=>{navigation.navigate("location")}} >
               <Text style={{fontFamily: 'Poppins'}}>Save</Text>
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
          source={require('../../assets/Image/downshape.png')}
          style={{width: '33%', height: '100%'}}
        />
      </View>
    </View>
  );
};

export default Notification;
