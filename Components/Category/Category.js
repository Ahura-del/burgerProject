import {Icon} from 'native-base';
import React, {Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import GroupCategory from './Category/SingleCategory/GroupCategory';
import {withBadge} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {delNotify} from '../../Redux'
const data = [
  {id: 1, name: 'Burgers', image: require('../../assets/Image/OGMOK20.png')},
  {
    id: 2,
    name: 'Meals',
    image: require('../../assets/Image/bbq-beef-burger-w-egg.png'),
  },
  {
    id: 3,
    name: 'Rice Bowls',
    image: require('../../assets/Image/Subtraction.png'),
  },
  {
    id: 4,
    name: 'Beverages',
    image: require('../../assets/Image/131026_preview.png'),
  },
  {id: 5, name: 'Sides', image: require('../../assets/Image/french.png')},
  {
    id: 6,
    name: 'Desserts',
    image: require('../../assets/Image/PngItem_2678600.png'),
  },
  {
    id: 7,
    name: 'Burgers',
    image: require('../../assets/Image/88-885936_chicken-strips-png-chicken-strips-transparent-png.png'),
  },
  {id: 8, name: 'Burgers', image: require('../../assets/Image/OGMOK20.png')},
];

const Category = ({navigation}) => {
  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;
  const BadgeIconNotify = withBadge()(Icon);
const dispatch = useDispatch()

  const stateCart = useSelector(state => state.cart.cart);

  const BadgeIcon = withBadge(stateCart.length)(Icon);

  return (
    <Fragment>
      <ScrollView style={{backgroundColor: '#000', marginBottom: 0}}>
        <View
          style={{
            width: '90%',

            marginRight: 'auto',
            marginLeft: 'auto',
            height: '100%',
            paddingBottom: 60,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, color: '#FEB500'}}>
              Category
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

          <View style={{marginTop: 70}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',

                alignContent: 'space-between',
                flexWrap: 'wrap',
                height: '100%',
                width: '100%',

                marginVertical: 30,
                paddingBottom: 110,
              }}>
              {data.map(item => (
                <GroupCategory
                  name={item.name}
                  pic={item.image}
                  key={item.id}
                  itemFunc={() => {
                    navigation.navigate('subCategory');
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

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
            onPress={() => {
              navigation.navigate('category');
            }}
            type="FontAwesome5"
            name="th-large"
            style={{
              backgroundColor: '#000',
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#FEB500',
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
            onPress={() => {
              navigation.navigate('profile');
            }}
            type="FontAwesome"
            name="user"
            style={{
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#000',
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default Category;
