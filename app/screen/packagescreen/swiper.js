import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Swiperscr = () => {
  return (
    <View style={{ gap: 20, justifyContent: 'center', alignItems: 'center',flex:1 }}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: '700' }}>swiper</Text>
      </View>
      <Swiper loop autoplay >
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
         resizeMode='cover'
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1424745/pexels-photo-1424745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1632780/pexels-photo-1632780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/2734421/pexels-photo-2734421.jpeg',
          }}
          style={styles.image}
        />
      </Swiper>
      <Swiper horizontal={false}  loop autoplay >
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
         resizeMode='cover'
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1424745/pexels-photo-1424745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1632780/pexels-photo-1632780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/2734421/pexels-photo-2734421.jpeg',
          }}
          style={styles.image}
        />
      </Swiper>
    </View>
  );
};

export default Swiperscr;

const styles = StyleSheet.create({
  image: {
    
   width:"94%",
   height:"80%",
   margin:10,
    borderRadius: 10,
  },
});
