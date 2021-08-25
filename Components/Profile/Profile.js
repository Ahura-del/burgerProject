import {Button, Icon, Root, Toast} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  BackHandler,
  Modal,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {delNotify} from '../../Redux';
import {withBadge} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';
import {useEffect} from 'react';
import axios from 'axios';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState([]);
  const getUser = useSelector(state => state.user.user);

  useEffect(() => {
    setUserProfile(getUser);
  }, []);

  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;
  const BadgeIconNotify = withBadge()(Icon);

  const stateCart = useSelector(state => state.cart.cart);
  const BadgeIcon = withBadge(stateCart.length)(Icon);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');

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

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  // Log out
  const logOut = () => {
    AsyncStorage.removeItem('user');
    BackHandler.exitApp();
  };

  // remove account
  const showModal = () => {
    setModalVisible(true);
  };
  const reauthenticat = currentPass => {
    const user = auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(user.email, currentPass);
    return user.reauthenticateWithCredential(cred);
  };

  const removeAccount = () => {
    if (password == '') {
      Toast.show({
        text: 'Please enter your password!',
        type: 'danger',
        duration: 3000,
      });
      return;
    } else {
      reauthenticat(password)
        .then(() => {
          const user = auth().currentUser;

          user
            .delete()
            .then(async () => {
              AsyncStorage.removeItem('user');
              BackHandler.exitApp();
              await axios.delete(`http://papaberger.ir/api/user/${user.email}`);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(err => {
          if (err.code === 'auth/wrong-password') {
            Toast.show({text: 'The password is Invalid!', type: 'danger'});
          } else if (err.code === 'auth/-') {
            Toast.show({text: 'Please check your connection!', type: 'danger'});
          }
        });
    }
  };

  return (
    <Root>
      <View style={{backgroundColor: '#000', height: '100%'}}>
        <View style={{height: 400, marginTop: -80}}>
          <Image
            source={require('../../assets/Image/jgy2.png')}
            resizeMode="cover"
            style={{width: '100%', height: '100%', overlayColor: '#000'}}
            blurRadius={50}
          />
        </View>

        <View
          style={{
            zIndex: 10,
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}>
          <View
            style={{
              flex: 1,
              width: '90%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{fontFamily: 'Poppins', fontSize: 22, color: '#000'}}>
                Profile
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Icon
                  type="FontAwesome5"
                  name="heart"
                  style={{fontSize: 20, marginRight: 15, color: '#000'}}
                />

                {checkNotify ? (
                  <TouchableOpacity
                    style={{width: 30, height: 30}}
                    onPress={() => {
                      navigation.navigate('notify', {
                        title: notifySate.title,
                        desc: notifySate.body,
                        img: notifySate.android.imageUrl,
                      });
                      dispatch(delNotify());
                    }}>
                    <BadgeIconNotify
                      type="FontAwesome"
                      name="bell"
                      style={{fontSize: 20, color: 'red'}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{width: 30, height: 30}}
                    onPress={() => navigation.navigate('notify')}>
                    <Icon
                      type="FontAwesome5"
                      name="bell"
                      style={{fontSize: 20}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                marginTop: 50,
                marginBottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: 150, height: 150, borderRadius: 100}}>
                {!photo.uri ? (
                  <View>
                    <Image
                      source={
                        userProfile.profilePicture
                          ? {uri: userProfile.profilePicture}
                          : require('../../assets/Image/profile.png')
                      }
                      resizeMode="cover"
                      style={{width: '95%', height: '98%', borderRadius: 100}}
                    />
                    <Icon
                      onPress={() =>
                        navigation.navigate('updateProfile', {
                          user: userProfile,
                        })
                      }
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
                      onPress={() => navigation.navigate('updateProfile')}
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
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: '#FEB500',
                    marginBottom: 10,
                  }}>
                  {userProfile.userName}
                </Text>

                <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
                  + {userProfile.phoneNumber}
                </Text>
              </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: '#FEB500',
                    marginBottom: 15,
                    marginLeft: 10,
                    fontSize: 16,
                  }}>
                  Account
                </Text>

                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity style={{padding: 15}}>
                    <Text style={{fontFamily: 'Poppins'}}>Location</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity
                    style={{padding: 15}}
                    onPress={() => {
                      navigation.navigate('changePass');
                    }}>
                    <Text style={{fontFamily: 'Poppins'}}>Change Password</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity
                    style={{padding: 15}}
                    onPress={() => {
                      navigation.navigate('shipping');
                    }}>
                    <Text style={{fontFamily: 'Poppins'}}>Shipping</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity
                    style={{padding: 15}}
                    onPress={() => {
                      navigation.navigate('payment');
                    }}>
                    <Text style={{fontFamily: 'Poppins'}}>Payment</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity style={{padding: 15}} onPress={logOut}>
                    <Text style={{fontFamily: 'Poppins'}}>Logout</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity style={{padding: 15}} onPress={showModal}>
                    <Text style={{fontFamily: 'Poppins'}}>Remove Account</Text>
                  </TouchableOpacity>
                </View>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(false);
                  }}>
                  <View
                    style={{
                      width: '90%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '80%',
                        borderRadius: 10,
                        backgroundColor: '#000',
                        padding: 20,
                      }}>
                      <View>
                        <Text
                          style={{
                            color: '#FFF',
                            textAlign: 'center',
                            paddingBottom: 20,
                            fontFamily: 'Poppins',
                          }}>
                          please enter your password for remove your account{' '}
                        </Text>
                      </View>
                      <View style={{marginBottom: 20}}>
                        <TextInput
                          placeholder="Type your password!"
                          style={{
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            textAlign: 'center',
                            fontFamily: 'Poppins',
                          }}
                          secureTextEntry
                          onChangeText={e => setPassword(e)}
                        />
                      </View>
                      <View>
                        <Button block danger onPress={removeAccount}>
                          <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
                            Remove
                          </Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>

              <View>
                <Text
                  style={{
                    color: '#FEB500',
                    marginBottom: 15,
                    marginLeft: 10,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                  }}>
                  Notification
                </Text>

                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      padding: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignContent: 'center',
                    }}>
                    <Text style={{fontFamily: 'Poppins'}}>
                      App Notification
                    </Text>
                    <View>
                      <Switch
                        trackColor={{false: 'gray', true: '#FEB500'}}
                        thumbColor="#FEB500"
                        ios_backgroundColor="gray"
                        onValueChange={value => setToggle1(value)}
                        value={toggle1}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>
                  <View
                    style={{
                      padding: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignContent: 'center',
                    }}>
                    <Text style={{fontFamily: 'Poppins'}}>
                      Location Tracking
                    </Text>
                    <View>
                      <Switch
                        trackColor={{false: 'gray', true: '#FEB500'}}
                        thumbColor="#FEB500"
                        ios_backgroundColor="gray"
                        onValueChange={value => setToggle2(value)}
                        value={toggle2}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginBottom: 20}}>
                <Text
                  style={{
                    color: '#FEB500',
                    marginBottom: 15,
                    marginLeft: 10,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                  }}>
                  Other
                </Text>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity style={{padding: 15}}>
                    <Text style={{fontFamily: 'Poppins'}}>Language</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#e1e1e1',
                    }}></View>

                  <TouchableOpacity style={{padding: 15}}>
                    <Text style={{fontFamily: 'Poppins'}}>Currency</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{backgroundColor: '#FEB500', width: '100%'}}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-around',
                flexDirection: 'row',
                paddingTop: 5,
                paddingBottom: 5,
              }}>
              <Icon
                type="FontAwesome5"
                name="home"
                style={{
                  fontSize: 20,
                  padding: 8,
                  borderRadius: 10,
                  color: '#000',
                }}
                onPress={() => {
                  navigation.navigate('home');
                }}
              />
              <Icon
                type="FontAwesome5"
                name="th-large"
                style={{
                  padding: 8,
                  fontSize: 20,
                  borderRadius: 10,
                  color: '#000',
                }}
                onPress={() => {
                  navigation.navigate('category');
                }}
              />

              {stateCart.length !== 0 ? (
                <BadgeIcon
                  type="FontAwesome5"
                  name="shopping-cart"
                  style={{
                    padding: 8,
                    fontSize: 20,
                    borderRadius: 10,
                    color: '#000',
                  }}
                  onPress={() => navigation.navigate('cart')}
                />
              ) : (
                <Icon
                  type="FontAwesome5"
                  name="shopping-cart"
                  style={{
                    padding: 8,
                    fontSize: 20,
                    borderRadius: 10,
                    color: '#000',
                  }}
                  onPress={() => {
                    navigation.navigate('cart');
                  }}
                />
              )}

              <Icon
                type="FontAwesome"
                name="user"
                style={{
                  backgroundColor: '#000',
                  padding: 8,
                  fontSize: 20,
                  borderRadius: 10,
                  color: '#FEB500',
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
                onPress={() => {
                  navigation.navigate('profile');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Root>
  );
};

export default Profile;
