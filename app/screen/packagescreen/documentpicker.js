import React, { useState,useEffect } from 'react';
import { View, Button, Text,StyleSheet,FlatList } from 'react-native';
import DocumentPicker from 'react-native-document-picker';


const Documentpicker = () => {
  const [pickedDocument, setPickedDocument] = useState([]);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log(result,'999999999999999999999999');

      setPickedDocument(result);
      
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,gap:10}}>
      <Button title="Pick Document" onPress={pickDocument} />
   
        {pickedDocument.map((item, index) => (
          <View key={index} style={{gap:10}}>
            <Text>Picked Document Name: {item.name}</Text>
            <Text>Picked Document Size: {item.size} bytes</Text>
            <Text>Picked Document Type: {item.type}</Text>
          </View>
        ))}
     
    </View>
  )
}

export default Documentpicker

const styles = StyleSheet.create({})


 

  
