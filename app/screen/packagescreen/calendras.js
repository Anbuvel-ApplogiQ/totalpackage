import { StyleSheet, Text, TouchableOpacity, View ,Modal} from 'react-native'
import React, { useState } from 'react'
import Calendar from 'react-native-calendars/src/calendar';

const Calendras = () => {
  const [showmodel,setShowmodel]=useState(false);
  const [cal,setCal]=useState({})
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>setShowmodel(true)} style={{width:150,height:30,alignItems:"center",borderWidth:2,borderColor:"red",borderRadius:10,justifyContent:"center"}}>
      <Text style={{color:"#000"}}>open Calendar</Text>
      </TouchableOpacity>
      <View style={{marginTop:20}}>
      <Text style={{fontSize:20,color:"red"}}>selected Date :{cal.day}-{cal.month}-{cal.year}</Text>
      </View>
     
      <Modal visible={showmodel} animationType='slide'> 
      <Calendar style={styles.Calendar}
      onDayPress={Date =>{console.log(Date)
        setCal(Date)
        setShowmodel(false)
      }
      }
      initialDate={'2023-12-12'}
      minDate={'2000-01-01'}
      maxDate={'2023-12-12'}
      // hideExtraDays={true}
      // disableArrowLeft={true}
      // disableArrowRight={true}
      // markedDates={{'2023-12-10':{marked:true,selected:true,selectedColor:"red",selectedTextColor:"white"}}}
      markingType='multi-dot'
      markedDates={{'2023-12-02':{dots:[{color:"red"},{color:"green"}]},
      '2023-12-05':{selectedColor:"red",selectedTextColor:"white",selected:true}}}
      
      
      />
        
      </Modal>
      
    </View>
  )
}

export default Calendras

const styles = StyleSheet.create({
  Calendar:{
    borderRadius:10,
   elevation:40,
   margin:10
  }
})