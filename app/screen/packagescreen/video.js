import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef}from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
// import {} from 'react-native-vector-icons'
import Video from 'react-native-video';
// import Videopl from '../../common/What Is React Native & Why Is It So Popular_.mp4'

const Videoscr = () => {
  const videoPlayer = useRef(null);
  return (
    <LinearGradient colors={['#22c1c3', '#fdbb2d','#e7fd2d']} style={styles.container}>
      <Text style={styles.title}>Video</Text>
      <AntDesign name="caretup" style={{ color:"red"}}/>
      <AntDesign name="staro" style={{ color:"red",fontSize:40}}/>
      <TouchableOpacity style={{width:'30%',height:"15%"}}>
      <Entypo name="app-store" style={{color:"red",fontSize:100}} />
      </TouchableOpacity>
      <Video
        ref={videoPlayer}
        source={{ uri: 'https://www.example.com/sample.mp4' }}
        style={styles.backgroundVideo}
        controls={true}
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
})