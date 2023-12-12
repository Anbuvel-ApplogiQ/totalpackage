import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({ text, colors }) => {
  return (
    <LinearGradient colors={colors} style={styles.linearGradientText}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </LinearGradient>
    
  );
};

const Lineargradient = () => {
  return (
    <LinearGradient colors={['#22c1c3', '#fdbb2d','#e7fd2d']} style={styles.container}>
    <View style={{padding:20}}>
      <GradientText text="Sign in with Facebook" colors={['#4c669f', '#3b5998', '#192f6a']} />
      <LinearGradient colors={['#8a3ab9', '#bc2a8d', '#e95950']} style={styles.linearGradient}>
      <Text style={styles.text}>
        Instagram Gradient
      </Text>
    </LinearGradient>
    </View>
   </LinearGradient>
  );
};

export default Lineargradient;

const styles = StyleSheet.create({
  container:{
    flex:1

  },
  linearGradientText: {
    padding:10,
    borderRadius: 5,
    alignItems:"center",
    justifyContent:'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
     marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Arial', // You can change the font family as needed
  },
});
