import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';


const Snapcarousel = () => {
    const data = [
      { title:"https://w0.peakpx.com/wallpaper/912/921/HD-wallpaper-thor-avengers-infinity-war-prince-of-thunder-god-hammer-lighting-hero-superhero-thunder-thumbnail.jpg" },
      { title:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ6ijKpOa6wLDq7rk46YSm4AwGlPUc_AHiWI1Rs69V2i0bSla4K81WHRd6E5FPNNimdE&usqp=CAU" },
      { title:"https://w0.peakpx.com/wallpaper/912/921/HD-wallpaper-thor-avengers-infinity-war-prince-of-thunder-god-hammer-lighting-hero-superhero-thunder-thumbnail.jpg"},
      { title:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100506-ironman2-hmed.jpg"},
      { title:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100506-ironman2-hmed.jpg"},
      { title:"https://assets.vogue.in/photos/5d81e9680757f000087797c0/1:1/w_909,h_909,c_limit/f.jpg"},
      // Add more items as needed
    ];
    const renderItem = ({ item }) => (
      
       <View style={styles.item}>
      <Image
        source={{ uri: item.title }}
        style={{ width: '100%', height: '100%' }}
      />
   
        
      </View>
    );
  
  return (
    <View style={{gap:40}}>
      <View style={{alignItems:'center',margin:10}}>
      <Text style={{fontSize:20,fontWeight:"600"}}>Snapcarousel</Text>
      </View>
      
      <View style={{alignItems:"center",width:"100%",height:"80%"}}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        loop
        
        
      />
      </View>
      
      
      
    </View>
  )
}

export default Snapcarousel

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
    overflow: 'hidden',
    width:"100%",
    height:"70%",
    elevation:10
    
   
  },
  title: {
    fontSize: 20,
   
    textAlign: 'center',
  },
})