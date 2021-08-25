import {Button, Icon} from 'native-base';
import React, {useEffect} from 'react';
import {View, Text, Image, Animated , TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {LogBox} from 'react-native';
import {responsiveWidth , responsiveHeight} from 'react-native-responsive-dimensions'
import {useDispatch , useSelector} from 'react-redux'
import {addCart, decreaseCart, delCart} from '../../../../Redux'
const CheckOutItem = props => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const dispatch = useDispatch()
 useSelector(state=>state.cart)
 
  const rightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={{justifyContent: 'center'}}>
        <Button block danger style={{height: 60}} onPress={()=>dispatch(delCart(props.data.id))}>
          <Animated.Text style={{transform: [{scale}], height: 60}}>
            <Icon type="FontAwesome5" name="trash" style={{fontSize: 50}}  />
          </Animated.Text>
        </Button>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={rightActions}>
      <View
        style={{
          width: '90%',
          marginBottom: 10,
          marginTop: 20,
          backgroundColor: '#FEB500',
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'flex-end',
          height: 120,
          borderRadius: 10,
          marginLeft: 'auto',
          zIndex: 9,
         
        }}>
        <Image
          source={{uri:props.data.pic}}
          style={{
            width: responsiveWidth(28),
            height: responsiveHeight(15),
            position: 'absolute',
            top: -25,
            left: -40,
            zIndex: 10,
          }}
        />

        <View
          style={{
            width: '75%',
            height: '100%',

            paddingRight: 10,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 5,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 18,
                      paddingBottom: 10,
                      fontFamily: 'Poppins',
                    }}>
                    {props.data.name}
                  </Text>
                </View>
                <View>
                  <Text style={{fontFamily: 'Poppins', fontSize: 10}}>
                    1hrs
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Icon
                  type="FontAwesome"
                  name="star"
                  style={{fontSize: 10, color: 'yellow', marginRight: 5}}
                />
                <Icon
                  type="FontAwesome"
                  name="star"
                  style={{fontSize: 10, color: 'yellow', marginRight: 5}}
                />
                <Icon
                  type="FontAwesome"
                  name="star"
                  style={{fontSize: 10, color: 'yellow', marginRight: 5}}
                />
                <Icon
                  type="FontAwesome"
                  name="star"
                  style={{fontSize: 10, color: 'yellow', marginRight: 5}}
                />
                <Icon
                  type="FontAwesome"
                  name="star"
                  style={{fontSize: 10, color: 'yellow', marginRight: 5}}
                />
              </View>
              <Text style={{fontFamily: 'Poppins', fontSize: 10}}>
                By Navgivan Hotel
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <TouchableOpacity onPress={()=>dispatch(decreaseCart(props.data))}>
                  <Icon
                  type="FontAwesome5"
                  name="minus-circle"
                  style={{fontSize: 18}}
                />
                  </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text>{props.data.count}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={()=>dispatch(addCart(props.data))}>
                <Icon
                type="FontAwesome5"
                name="plus-circle"
                style={{fontSize: 18}}
              />
                </TouchableOpacity>
                </View>
              </View>
              <Text style={{fontFamily: 'Poppins', fontSize: 18}}>${props.data.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default CheckOutItem;
