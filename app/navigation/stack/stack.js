import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/homeScreen/HomeScreen';
import Paper from '../../screen/packagescreen/paper';
import Lineargradient from '../../screen/packagescreen/lineargradient';
import Snapcarousel from '../../screen/packagescreen/snapcarousel';
import Encryptedstorage from '../../screen/packagescreen/encryptedstorage';
import Elements from '../../screen/packagescreen/elements';
import Permission from '../../screen/packagescreen/permission';
import Reacti18next from '../../screen/packagescreen/reacti18next';
import Maps from '../../screen/packagescreen/maps';
import Fastimage from '../../screen/packagescreen/fastimage';
import Swiper from '../../screen/packagescreen/swiper';
import Victoryname from '../../screen/packagescreen/victoryname';
import Htmltopdf from '../../screen/packagescreen/htmltopdf';
import Signature from '../../screen/packagescreen/signature';
import I18next from '../../screen/packagescreen/i18next';
import Shopify from '../../screen/packagescreen/shopify';
import Calendras from '../../screen/packagescreen/calendras';
import Documentpicker from '../../screen/packagescreen/documentpicker';
import Chartkit from '../../screen/packagescreen/chartkit';

import Videoscr from '../../screen/packagescreen/video';

const Stacknavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name ="paper" component={Paper} options={{headerShown:false}}/>
      <Stack.Screen name='Videoscr' component={Videoscr} options={{headerShown:false}}/>
      <Stack.Screen name ="chartkit" component={Chartkit} options={{headerShown:false}}/>
      <Stack.Screen name ="Lineargradient" component={Lineargradient} options={{headerShown:false}}/>
      <Stack.Screen name ="Snapcarousel" component={Snapcarousel} options={{headerShown:false}}/>
      <Stack.Screen name ="Encryptedstorage" component={Encryptedstorage} options={{headerShown:false}}/>
      <Stack.Screen name ="Elements" component={Elements} options={{headerShown:false}}/>
      <Stack.Screen name ="documentpicker" component={Documentpicker} options={{headerShown:false}}/>
      <Stack.Screen name ="Permission" component={Permission} options={{headerShown:false}}/>
      <Stack.Screen name ="calendras" component={Calendras} options={{headerShown:false}}/>
      <Stack.Screen name ="Reacti18next" component={Reacti18next} options={{headerShown:false}}/>
      <Stack.Screen name ="Fastimage" component={Fastimage} options={{headerShown:false}}/>
      <Stack.Screen name ="Swiper" component={Swiper} options={{headerShown:false}}/>
      <Stack.Screen name ="Victoryname" component={Victoryname} options={{headerShown:false}}/>
      <Stack.Screen name ="Maps" component={Maps} options={{headerShown:false}}/>
      <Stack.Screen name ="Htmltopdf" component={Htmltopdf} options={{headerShown:false}}/>
      <Stack.Screen name ="Signature" component={Signature} options={{headerShown:false}}/>
      <Stack.Screen name ="I18next" component={I18next} options={{headerShown:false}}/>
      <Stack.Screen name ="Shopify" component={Shopify} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Stacknavigation