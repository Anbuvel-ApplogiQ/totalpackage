import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef}from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Video from 'react-native-video';

const Videoscr = () => {
  // const videoPlayer = useRef(null);
  
  return (
    <LinearGradient colors={['#22c1c3', '#fdbb2d','#e7fd2d']} style={styles.container}>
      <Text style={styles.title}>Video</Text>
      <AntDesign name="caretup" style={{ color:"red"}}/>
      <AntDesign name="staro" style={{ color:"red",fontSize:40}}/>
      <TouchableOpacity style={{width:'30%',height:"15%"}}>
      <Entypo name="app-store" style={{color:"red",fontSize:100}} />
      </TouchableOpacity>
       <Video
       source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
        // source={{ uri: Videopl }}
        // source={require('../../common/What Is React Native & Why Is It So Popular_.mp4')}

        style={styles.video}
        
        controls={true}
        onError={(error) => console.error('Video error:', error)}
      />
       


      
      </LinearGradient>
  )
}

export default Videoscr

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    padding:20
  },
  title:{
    color:"#000",
    fontSize:30,
    fontWeight:"700"
  },
  backgroundVideo: {
    position: 'absolute',
    width: '60%',
    height: 200,
  },
  video: {
    width: "100%",
    height: "50%",
  },
})