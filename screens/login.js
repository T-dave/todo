import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {
          Img2,
          Text2,
          Text3,
          StyledInput,
          Arrow,
          BText,
          BottomText,
          Text4,
          Text1
        } from '../styles/styles';

export default function LoginScreen({navigation}) {
  return (
      <View style={styles.container}>
        <Img2 style= {styles.image} source = {require('../assets/Done.png')}/>
        <View style = {{margin:10}}>
          <Text1>Welcome back</Text1>
          <Text1>to</Text1>
          <Text2>Our Reminder</Text2>
        </View> 
        <View style = {{margin:20}}>
          <StyledInput placeholder = "Enter your email"/>
          <StyledInput placeholder = "Enter your password" secureTextEntry/>
        </View>

        <TouchableOpacity>
          <BottomText>Forgot Password</BottomText>
        </TouchableOpacity>
        <View style={styles.arr}>
        <View style={styles.bottomView}>
          <BottomText>
            Don't have an account? 
          </BottomText>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <BottomText style = {{color: "#D8605B", marginLeft:10}}>
              Sign Up
            </BottomText>
          </TouchableOpacity>

        </View>
        <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate('Dash')}>
          <BText style = {{paddingRight:10}}>
            Sign In
          </BText>
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
    marginTop:50
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
  },
  bottomView:{
    flexDirection:'row', 
    justifyContent:'center',
    margin:10
  }
});
