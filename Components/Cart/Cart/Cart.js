import {Button, Icon} from 'native-base';
import React, {Fragment} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CartItem from './CartItem/CartItem';
import {useSelector} from 'react-redux';
import {withBadge} from 'react-native-elements';
import {delNotify} from '../../../Redux';

const Cart = ({navigation}) => {
  const cartState = useSelector(state => state.cart.cart);
  const BadgeIcon = withBadge(cartState.length)(Icon);
  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;
  const BadgeIconNotify = withBadge()(Icon);

  return (
    <Fragment>
      {cartState.length !== 0 ? (
        <ScrollView style={{backgroundColor: '#000'}}>
          <View
            style={{
              width: '95%',
              backgroundColor: '#000',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{fontFamily: 'Poppins', fontSize: 24, color: '#FEB500'}}>
                Burgers
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Icon
                  type="FontAwesome5"
                  name="heart"
                  style={{fontSize: 20, marginRight: 15, color: '#FEB500'}}
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
                      style={{fontSize: 20, color: '#FEB500'}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{marginTop: 40, marginLeft: 'auto'}}>
              {cartState.map(item => (
                <CartItem
                  key={item.id}
                  pic={item.pic}
                  name={item.name}
                  id={item.id}
                  price={item.price}
                  count={item.count}
                />
              ))}
            </View>

            <View
              style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
              <Button
                block
                warning
                onPress={() => {
                  navigation.navigate('checkOut');
                }}>
                <Text style={{fontFamily: 'Poppins'}}>Check Out</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{backgroundColor: '#000', flex: 1}}>
          <View
            style={{
              backgroundColor: '#000',
              width: '90%',
              justifyContent: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
              alignItems: 'center',
              flex: 1,
            }}>
            <View
              style={{
                width: '100%',
                backgroundColor: '#000',
                height: '50%',
                justifyContent: 'center',
                borderStyle: 'dashed',
                borderWidth: 3,
                borderColor: '#FEB500',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingBottom: 20,
                  color: '#FEB500',
                  fontSize: 20,
                }}>
                Add Food ...
              </Text>
              <Icon
                type="FontAwesome5"
                name="plus"
                style={{textAlign: 'center', color: '#FEB500', fontSize: 60}}
              />
            </View>
          </View>
        </View>
      )}

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

          {cartState.length !== 0 ? (
            <BadgeIcon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#FEB500',
                backgroundColor: '#000',
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
                color: '#FEB500',
                backgroundColor: '#000',
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
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#000',
            }}
            onPress={() => {
              navigation.navigate('profile');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default Cart;
