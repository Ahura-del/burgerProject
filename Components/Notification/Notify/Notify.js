import React, {Fragment} from 'react';
import {Icon} from 'native-base';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import SubNotify from './SubNotify';
const Notify = ({navigation, route}) => {
   
  return (
    <Fragment>
      <View style={{backgroundColor: '#000', flex: 1}}>
        <View
          style={{
            backgroundColor: '#000',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate("home")}>
            <Icon
              type="FontAwesome5"
              name="arrow-left"
              style={{color: '#FEB500', fontSize: 24}}
            />
          </TouchableOpacity>
        </View>
       {route.params === undefined ? (
           <View style={{flex:1 , backgroundColor:"#000"}}>
            <View style={{width:"85%" , marginLeft:"auto" , marginRight:"auto" , justifyContent:"center" , alignItems:"center" , flex:1}}>
            <Icon type="FontAwesome5" name="envelope" style={{fontSize:100 , color:"#FEB500"}} />
            <Text style={{color:"#FEB500" , fontSize:24 , fontFamily:"Poppins"}}>No Message !</Text>
            </View>
           </View>
       ):( <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
       <View style={{width: '85%', marginRight: 'auto', marginLeft: 'auto'}}>
       <SubNotify title={route.params.title} desc={route.params.desc} img={route.params.img}/>
       </View>
     </ScrollView>)}
      </View>
    </Fragment>
  );
};

export default Notify;
