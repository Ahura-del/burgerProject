import {H3, Icon} from 'native-base';
import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import ItemSubCategory from './ItemSubCategory/ItemSubCategory';
import {useDispatch, useSelector} from 'react-redux';
import {withBadge} from 'react-native-elements';
import {addCart,delNotify} from '../../../Redux';
import {useState} from 'react';
import {useEffect} from 'react';

const SubCategory = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const stateCart = useSelector(state => state.cart.cart);
  const BadgeIcon = withBadge(stateCart.length)(Icon);
  const fetchData = useSelector(state => state.product.product);
 
  useEffect(() => {
    setData(fetchData);
  }, []);

  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;

  const BadgeIconNotify = withBadge()(Icon);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'column', position: 'relative'}}>
        <Image
          source={require('../../../assets/Image/burger.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              marginRight: 'auto',
              marginLeft: 'auto',
              justifyContent: 'space-between',
            }}>
            <View>
              <H3 style={{marginBottom: 10}}>Burgers</H3>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                type="FontAwesome5"
                name="heart"
                style={{fontSize: 25, marginRight: 15}}
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
                    style={{fontSize: 25, color: 'red'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{width: 30, height: 30}}
                  onPress={() => navigation.navigate('notify')}>
                  <Icon
                    type="FontAwesome5"
                    name="bell"
                    style={{fontSize: 25}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1.5, backgroundColor: '#fff'}}>
        <View
          style={{
            backgroundColor: '#000',
            height: '100%',
            position: 'relative',
            zIndex: 6,
          }}>
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#000',
              position: 'absolute',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              top: -13,
            }}></View>
          <View
            style={{
              height: '100%',
              backgroundColor: '#000',
              width: '95%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  zIndex: 13,
                  alignContent: 'space-between',
                  flexWrap: 'wrap',
                  height: '100%',
                  width: '100%',
                  marginVertical: 30,
                  paddingBottom: 60,
                  paddingHorizontal: 8,
                }}>
                {data.map(item => (
                  <ItemSubCategory
                    pic={item.pic}
                    name={item.name}
                    desc={item.info}
                    price={item.price}
                    key={item.id}
                    shopMeal={() => {
                      // navigation.navigate('cart');
                      dispatch(addCart(item));
                    }}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
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
            style={{fontSize: 20, padding: 8, borderRadius: 10, color: '#000'}}
            onPress={() => {
              navigation.navigate('home');
            }}
          />
          <Icon
            type="FontAwesome5"
            name="th-large"
            style={{
              backgroundColor: '#000',
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#FEB500',
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
            style={{padding: 8, fontSize: 20, borderRadius: 10, color: '#000'}}
            onPress={() => {
              navigation.navigate('profile');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SubCategory;
