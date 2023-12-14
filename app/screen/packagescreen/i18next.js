// I18nextscr.js

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal,Image, View, FlatList, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from '../../../service/i18next';
import languagelist from '../../../service/languagelist.json';

const LanguageSwitcher = ({ isVisible, onClose, onLanguageChange }) => (
  <Modal visible={isVisible} onRequestClose={onClose}>
    <View style={styles.languagesList}>
      <FlatList
        data={Object.keys(languageResources)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.languageButton} onPress={() => onLanguageChange(item)}>
            <Text style={styles.lngName}>{languagelist[item].nativeName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </Modal>
);

const I18nextscr = () => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const { t } = useTranslation();

  const toggleLanguageModal = () => {
    setLanguageModalVisible(!isLanguageModalVisible);
  };

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    setLanguageModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Image
          source={{
            uri:
              'https://wallpapers.com/images/high/rohit-sharma-india-cricket-match-8sa2zie0ifjrvrkc.webp',
          }}
          resizeMode='stretch'
          style={styles.image}
        />
      <LanguageSwitcher
        isVisible={isLanguageModalVisible}
        onClose={toggleLanguageModal}
        onLanguageChange={changeLanguage}
      />
     
        <View style={styles.textcontainer}>
        <Text style={styles.text}>{t('name')}</Text>
           <ScrollView >
          <View>
        <Text style={styles.text}>{t('para')}</Text>
        </View>
        </ScrollView>
      
      </View>
       
     
      
     
      <TouchableOpacity style={styles.button} onPress={toggleLanguageModal}>
        <Text style={styles.buttonText}>{t('changelanguage')}</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default I18nextscr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding:10
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    width:'100%',
    height:'7%',
    borderRadius: 3,
    alignItems:'center'
   
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    
    fontSize:20,
    textTransform:"capitalize",
    color:"white",
    fontWeight:"700",
    fontFamily:"Whisper-Regular"
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#0F2167',
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  }
,
textcontainer:{
  width:"100%",
  height:"35%",
  alignItems:"center",
  gap:10,
  marginBottom:10

},image: {
    
  width:"94%",
  height:"50%",
  margin:10,
   borderRadius: 10,
 },

})