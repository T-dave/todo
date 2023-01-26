import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import {
          Text1,
          Text2,
          Text3,
          BText,
          Arrow,
          Img1,
        } from '../styles/styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Img1 style= {styles.image} source = {require('../assets/Done.png')}/>
      <View style = {{margin:20}}>
        <Text1>Welcome to</Text1>
        <Text2>Our Reminder</Text2>
        <Text3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.</Text3>
      </View>
      <View style={styles.arr}>
        <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate('Register')}>
          <BText style = {{paddingRight:10}}>
            Get Started
          </BText>
          <Arrow source = {require('../assets/arrowR.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C27F67',
    alignItems: 'center',
    padding:StatusBar.currentHeight
  },
  image:{
    marginTop:150
  },
  arr:{
    flex:1,
    flexDirection:'column-reverse'
  },
  button:{
  width: 315,
  height: 56,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  borderRadius: 50,
  backgroundColor: '#F4C27F',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
  }
});
