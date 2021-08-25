import { Button, Root, Toast } from 'native-base'
import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';

const ChangePass = ({navigation}) => {
const [currentPass , setCurrentPass] = useState('')
const [newPasss , setNewPass]=useState('')
const [confirm , setConfirm]=useState('')


const reauthenticat = (currentPassword)=>{
    const user = auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(user.email , currentPassword);
    return user.reauthenticateWithCredential(cred)
}

    const changePass = ()=>{
        if(currentPass =="" || newPasss==""|| confirm==""){
            Toast.show({text:"Please Fill All Fields" , duration:3000 , type:"danger" , buttonText:"Ok"})
            return
        }else if(newPasss !== confirm){
            Toast.show({text:"The new password does not match with confirm password" , duration:3000 , type:"danger" ,  buttonText:"Ok"})
            return
        }else{
            reauthenticat(currentPass).then(()=>{
                const user = auth().currentUser;
                user.updatePassword(newPasss).then(()=>{
                    Toast.show({text:"The Password Was Changed!" , type:"success" , duration:3000 });
                    navigation.navigate("profile")
                }).catch((err)=>{
                   
                    console.log(err);
                })
            }).catch(error =>{
                if(error.code == "auth/wrong-password"){
                    Toast.show({text:"The Current Password is  Invalid" , type:"danger" , duration:3000 , buttonText:"Ok"})
                }
            });

        }
       
    }



    return (
        <Root>
        <View style={{backgroundColor:"#000" , height:"100%"}}>
            <View style={{width:"90%" , flexDirection:"column" , marginLeft:"auto" , marginRight:"auto"}}>
            <View style={{marginVertical:40}}>
            <Text style={{fontFamily: 'Poppins',color:"#FEB500" , fontSize:24}}>Change Password</Text>
            </View>
            <View style={{marginBottom:50}}>
            <View style={{marginBottom:15}}>
            <TextInput onChangeText={e=>setCurrentPass(e)} placeholder="Old Password" placeholderTextColor="#bbb" style={{fontFamily: 'Poppins',width:"100%" , height:50 , padding:10 , borderRadius:10 , backgroundColor:"#fff"}} />
            </View>
            <View style={{marginBottom:15}}>
            <TextInput onChangeText={e=>setNewPass(e)} placeholder="New Password" placeholderTextColor="#bbb" style={{fontFamily: 'Poppins',width:"100%" , height:50 , padding:10 , borderRadius:10,backgroundColor:"#fff"}} />
            </View>
            <View style={{marginBottom:15}}>
            <TextInput onChangeText={e=>setConfirm(e)} placeholder="Confirm Password" placeholderTextColor="#bbb" style={{fontFamily: 'Poppins',width:"100%" , height:50 , padding:10 , borderRadius:10,backgroundColor:"#fff"}} />
            </View>
            </View>
            <View style={{width:"70%" , marginRight:"auto" , marginLeft:"auto"}}>
            <Button block warning onPress={changePass}>
            <Text style={{fontFamily: 'Poppins'}}>Update Password</Text>
            </Button>
            </View>
            
            </View>
            <View style={{ position:"absolute", bottom:25 , left:20}}>
            <Text style={{fontFamily: 'Poppins',color:"#FEB500"}} onPress={()=>{navigation.navigate("profile")}}>Back</Text>
            </View>
        </View>
        </Root>
    )
}

export default ChangePass
