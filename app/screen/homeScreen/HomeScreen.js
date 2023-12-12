import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  const packages = [
    'react native paper',
    'react-native video',
    'react-native-chart-kit',
    'react-native-linear-gradient',
    'react-native-snap-carousel',
    'react-native-encrypted-storage',
    'react native elements',
    'react-native document picker',
    'react-native permission',
    'react-native-calendars',
    'react-i18next',
    'react-native-fast-image',
    'react-native-swiper',
    'Victory Native',
    'react-native-maps along with those packages',
    'html to pdf converter',
    'signature',
    'i18next',
    '@shopify/restyle',
  ];
  const handlepress = packages => {
    // console.log(packages);
    if (packages === 'react native paper') {
      navigation.navigate("paper")
       
    } else if (packages === 'react-native video') {
      navigation.navigate("Videoscr")
    } else if (packages === 'react-native-chart-kit') {
      navigation.navigate("chartkit")
    } else if (packages === 'react-native-linear-gradient') {
      navigation.navigate("Lineargradient")
    } else if (packages === 'react-native-snap-carousel') {
      navigation.navigate("Snapcarousel");
    }
     else if (packages === 'react-native-encrypted-storage') {
      navigation.navigate("Encryptedstorage");
    } 
    else if (packages === 'react native elements') {
      navigation.navigate("Elements");
    } else if (packages === 'react-native document picker') {
      navigation.navigate("documentpicker");
    } else if (packages === 'react-native permission') {
      navigation.navigate("Permission");
    } else if (packages === 'react-native-calendars') {
      navigation.navigate("calendras");
    } else if (packages === 'react-i18next') {
      navigation.navigate("Reacti18next");
    } else if (packages === 'react-native-fast-image') {
     navigation.navigate("Fastimage")
    } else if (packages === 'react-native-swiper') {
     navigation.navigate("Swiper")
    } else if (packages === 'Victory Native') {
     navigation.navigate("Victoryname")
    } else if (packages === 'react-native-maps along with those packages') {
     navigation.navigate("Maps")
    } else if (packages === 'html to pdf converter') {
     navigation.navigate("Htmltopdf")
    } else if (packages === 'signature') {
     navigation.navigate("Signature")
    } else if (packages === 'i18next') {
     navigation.navigate("I18next")
    } else if (packages === '@shopify/restyle') {
     navigation.navigate("Shopify")
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titelcontainer}>
          <Text style={styles.title}>Packages</Text>
        </View>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
            }}>
            {packages.map(packages => (
              <TouchableOpacity
                key={packages}
                style={styles.packagePressable}
                onPress={() => handlepress(packages)}>
                <Text style={styles.packagePressabletext}>{packages}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#F2FFE9',
    height: '100%',
  },
  titelcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#241468',
    fontSize: 25,
    fontWeight: '700',
  },
  packagePressable: {
    width: '80%',

    aspectRatio: 4.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    backgroundColor: '#00A9FF',
  },
  packagePressabletext: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
