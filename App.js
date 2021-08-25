import React, {Fragment, useEffect, useState} from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './Components/Welcome/Welcome';
import SingIn from './Components/Register/Singin/SingIn';
import Password from './Components/Register/Password/Password';
import ForgetPassword from './Components/Register/ForgetPassword/ForgetPassword';
import SingUp from './Components/Register/Singup/SingUp';
import SetPhoneNum from './Components/Register/SetPhoneNum/PhoneNumber';
import Verification from './Components/Register/Verification/Verification';
import Notification from './Components/Notification/Notification';
import Notify from './Components/Notification/Notify/Notify'
import Location from './Components/Location/Location';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import SubCategory from './Components/Category/SubCategory/SubCategory';
import FullDetail from './Components/Category/FullDetail/FullDetail';
import Cart from './Components/Cart/Cart/Cart';
import CheckOut from './Components/Cart/CheckOut/CheckOut';
import Profile from './Components/Profile/Profile';
import ChangePass from './Components/Profile/ChangePass/ChangePass';
import Shipping from './Components/Profile/Shiping/Shipping';
import Payment from './Components/Profile/Payment/Payment';
import NewShipping from './Components/Profile/Shiping/NewShipping/NewShipping';
import UpdateProfile from './Components/Profile/UpdateProfile/UpdateProfile'
import NewLocation from './Components/Location/NewLocation/NewLocation'
import Connection from './Components/Connection/Connection'
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
// import { ActivityIndicator } from 'react-native';


const Stack = createStackNavigator();

const App = () => {

   
  const [fetchData, setFetchData] = useState('');

  const loadData = async ()=>{
    try {
      const getData = await AsyncStorage.getItem('user');

      if (getData !== null) {
        setFetchData('home');
      } else {
        setFetchData('welcome');
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    loadData()
   
  }, []);

  

  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        {fetchData == 'home' ? (
          <Fragment>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="category" component={Category} />
            <Stack.Screen name="subCategory" component={SubCategory} />
            <Stack.Screen name="fullDetail" component={FullDetail} />
            <Stack.Screen name="setShipping" component={NewShipping} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="checkOut" component={CheckOut} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="changePass" component={ChangePass} />
            <Stack.Screen name="shipping" component={Shipping} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="updateProfile" component={UpdateProfile} />
            <Stack.Screen name="notify" component={Notify} />
            <Stack.Screen name="connection" component={Connection} />
          </Fragment>
        ) : (
          <Fragment>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="singin" component={SingIn} />
            <Stack.Screen name="pass" component={Password} />
            <Stack.Screen name="forgetPass" component={ForgetPassword} />
            <Stack.Screen name="singup" component={SingUp} />
            <Stack.Screen name="phoneNum" component={SetPhoneNum} />
            <Stack.Screen name="verification" component={Verification} />
            <Stack.Screen name="notification" component={Notification} />
            <Stack.Screen name="notify" component={Notify} />

            <Stack.Screen name="location" component={Location} />
            <Stack.Screen name="setLocation" component={NewLocation} />

            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="category" component={Category} />
            <Stack.Screen name="subCategory" component={SubCategory} />
            <Stack.Screen name="fullDetail" component={FullDetail} />
            <Stack.Screen name="setShipping" component={NewShipping} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="checkOut" component={CheckOut} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="changePass" component={ChangePass} />
            <Stack.Screen name="shipping" component={Shipping} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="updateProfile" component={UpdateProfile} />
            <Stack.Screen name="connection" component={Connection} />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
};

export default App;
