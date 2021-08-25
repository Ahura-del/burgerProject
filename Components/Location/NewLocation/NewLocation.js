import {Button , Toast , Root} from 'native-base';
import React ,{useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const NewLocation = ({navigation}) => {

    const[city , setCity] = useState("")
    const[ address, setAddress] = useState("")
    const[appartment , setAppartment] = useState("")
    const[floor , setFloor] = useState("")

const locationBtn = ()=>{
    if(city==="" || address==="" || appartment===""|| floor===""){
        Toast.show({text:"Please Set Location" , buttonText:"Ok" , type:"warning"})
        return
    }else{
        navigation.navigate("location" ,{city , address , appartment , floor})
    }
}

  return (
      <Root>
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View
        style={{
          width: '90%',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{marginVertical: 40 , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
          <Text style={{fontFamily: 'Poppins', color: '#FEB500', fontSize: 24}}>
            Location
          </Text>
          <Text ></Text>
        </View>
        <View style={{marginBottom: 50}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="City"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              onChangeText={e=>setCity(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Address"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              onChangeText={e=>setAddress(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Appartment"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              onChangeText={e=>setAppartment(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
          <TextInput
            placeholder="Floor"
            placeholderTextColor="#bbb"
            style={{
              fontFamily: 'Poppins',
              width: '100%',
              height: 50,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}
            onChangeText={e=>setFloor(e)}
          />
        </View>
        </View>
        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button block warning onPress={locationBtn}>
            <Text style={{fontFamily: 'Poppins'}}>Set location</Text>
          </Button>
        </View>
        <View style={{marginTop:100}}>
        <Text style={{fontFamily: 'Poppins', color: '#FEB500'}} onPress={()=>{navigation.navigate("location")}}>Back</Text>
      </View>
      </View>
      
    </View>
    </Root>
  );
};

export default NewLocation;
