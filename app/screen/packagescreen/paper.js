import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { TextInput,ToggleButton,IconButton, Tooltip,ProgressBar,Banner, MD3Colors,FAB ,Badge ,List,Searchbar,Menu ,HelperText} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const Paper = () => {

  const [status, setStatus] = React.useState(false); // Assuming it's a boolean, you can adjust accordingly

  const onButtonToggle = () => {
    // Add your logic here for handling button toggle
    setStatus(!status); // Toggle the status
  };
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);
  const [visible, setVisible] = React.useState(true);

 const hasErrors = () => {
   return !text.includes('@');
 };

  return (
    <ScrollView style={{flex:1}}>
    <LinearGradient colors={['#22c1c3', '#fdbb2d','#e7fd2d']} style={styles.container}>
     
      <Text>Paper</Text>
      <View style={{width:'100%'}}>
      <Searchbar
      placeholder="Search"
      // onChangeText={onChangeSearch}
      // value={searchQuery}
    />
      <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      secureTextEntry
      right={<TextInput.Affix text="/100"/>} 
      left={<TextInput.Affix text="/100" />}
      
    
    
    />
      </View>
      <View style={{width:'100%'}}>
      <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />
      </View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
      <ToggleButton
      icon="bluetooth"
      value="bluetooth"
      status={status}
      onPress={onButtonToggle}
      rippleColor="blue"
    />
     <Tooltip title="Selected Camera">
    <IconButton icon="camera" selected size={24} onPress={() => {console.log("clickrd")}} />
  </Tooltip>
  <ProgressBar progress={0.5} color='red'/>
  <TouchableOpacity>
  <List.Item
    title="First Item"
    description="description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  </TouchableOpacity>
  <TouchableOpacity>
  <List.Item
    title="Second Item"
    description="description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  </TouchableOpacity>
  <TouchableOpacity>
  <List.Item
    title="Third Item"
    description=" description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
  <Badge>6</Badge>
  </TouchableOpacity>
  <View style={{ flex: 1 }}>
    <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
    <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
  </View>
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
   <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>
  
  
      
    </LinearGradient>
    </ScrollView>
  )
}

export default Paper

const styles = StyleSheet.create({
  container:{
   
    
    padding:20,
    gap:20
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})