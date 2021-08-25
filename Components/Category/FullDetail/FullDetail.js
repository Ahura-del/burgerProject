import {Button, H2, H3, Icon, List, ListItem, Thumbnail} from 'native-base';
import React from 'react';
import {View, Text, ScrollView, Image, TextInput,TouchableOpacity} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import {addCart,delNotify} from '../../../Redux';
import {useSelector} from 'react-redux';
import {withBadge} from 'react-native-elements';
const FullDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const notifySate = useSelector(state => state.notify.notify);
  const checkNotify = 'title' in notifySate;

  const BadgeIconNotify = withBadge()(Icon);
  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View
        style={{
          width: '95%',
          padding: 10,
          backgroundColor: '#000',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 100,
            alignItems: 'center',
          }}>
          <H3 style={{color: '#FEB500'}}>Burgers</H3>
          <View style={{flexDirection: 'row'}}>
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

        <View
          style={{
            backgroundColor: '#FEB500',
            width: '90%',
            height: 350,
            position: 'relative',
            zIndex: 10,
            borderRadius: 10,
          }}>
          <Image
            source={{uri:route.params.item.pic}}
            resizeMode="cover"
            style={{
              width: responsiveWidth(60),
              height: responsiveHeight(35),
              position: 'absolute',
              top: -95,
              right: -40,
              zIndex: 5,
            }}
          />

          <View style={{marginTop: 170, paddingLeft: 10, paddingRight: 60}}>
            <H3 style={{fontSize: 26}}>{route.params.item.name}</H3>
            <Text
              style={{
                fontSize: 10,
                marginTop: 20,
                marginBottom: 15,
                lineHeight: 10,
              }}>
              {route.params.item.info}
            </Text>

            <H2 style={{marginTop: 10, fontSize: 26, fontWeight: '600'}}>
              ${route.params.item.price}
            </H2>
          </View>
          <BoxShadow
            setting={{
              width: 70,
              height: 70,
              color: '#FEB500',
              border: 10,
              radius: 32,
              opacity: 0.5,
              x: 1,
              y: 1,
              style: {
                marginVertical: 5,
                position: 'absolute',
                bottom: -25,
                right: -25,
              },
            }}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: '#000',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                type="FontAwesome5"
                name="shopping-cart"
                style={{color: '#FEB500', fontSize: 35}}
                onPress={() => {
                  dispatch(addCart(route.params.item));
                  navigation.navigate('home');
                }}
              />
            </View>
          </BoxShadow>
        </View>

        <View style={{marginTop: 30}}>
          <List>
            <ListItem>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Thumbnail
                  source={require('../../../assets/Image/persion1.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: '#FEB500'}}>Micra Solutoin</Text>
                  <Text style={{color: '#7e7e7e'}}>Yammy.......text</Text>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Thumbnail
                  source={require('../../../assets/Image/persion2.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: '#FEB500'}}>Micra Solutoin</Text>
                  <Text style={{color: '#7e7e7e'}}>Yammy.......text</Text>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Thumbnail
                  source={require('../../../assets/Image/persion3.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: '#FEB500'}}>Micra Solutoin</Text>
                  <Text style={{color: '#7e7e7e'}}>Yammy.......text</Text>
                </View>
              </View>
            </ListItem>
          </List>
        </View>

        <View style={{marginVertical: 50, padding: 10}}>
          <TextInput
            style={{
              width: '100%',
              height: 110,
              backgroundColor: '#fff',
              borderRadius: 5,
            }}
            multiline={true}
            numberOfLines={1}
          />
        </View>

        <View style={{width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
          <Button block warning>
            <Text>Save</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default FullDetail;
