import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {
  ProfileText,
  UserText,
  LogoutButton,
  LogoutText,
  Text5,
  Text6,
  TodoView,
  Text7
        } from '../styles/styles';

export default function DashScreen({navigation}) {
  const todoList = [
  {todo:'Cook Rice and Chicked at 10am', done:true},
  {todo:'Learn Reactjs at 12pm', done:false},
  {todo:'Have Launch at 1pm', done:false},
  {todo:'Learn HTML and CSS at 3pm', done:false},
  {todo:'Have Dinner at 8pm', done:false},
  ]
  const [data, setData] =  useState(todoList);

  const handleLike = (ind)=>{
    data[ind].done = !data[ind].done;
    setData([...data]);
  }
  return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style = {styles.imgView}>
            <Image style = {styles.img} source = {require('../assets/banner.jpg')}/>
          </View>
          <View style = {{margin:10}}>
            <ProfileText>David Omotara</ProfileText>
            <UserText>@teedavee</UserText>
          </View>
        
          <LogoutButton>
            <LogoutText>
                Log Out
            </LogoutText>
          </LogoutButton>
        </View>

        <View style={styles.center}>
          <Image source = {require('../assets/clock.png')} style = {styles.clock}/>
          <Text5>
            Good Afternoon
          </Text5>
        </View>
        <Text6 style={{margin:10, marginLeft:20}}>Task List</Text6>
        <View style = {styles.center}>
            <TodoView style={styles.todo}>
              <View style={styles.topTodo}>
                  <Text7>
                    Tasks List
                  </Text7>
                  <TouchableOpacity style={styles.plusView}>
                    <Text style={styles.plusText}>+</Text>
                  </TouchableOpacity>
               </View>
               <ScrollView>
                {
                  data.map((item, index)=>{
                    return(
                    <TouchableOpacity key ={index} onPress = {()=>handleLike(index)}>
                      <View style = {styles.task} key = {index}>
                        {item.done ? <View style = {styles.circle}></View>
                         : <View style = {styles.box} onPress = {()=>handleLike(index)}></View>}
                        <Text>{item.todo}</Text>
                     </View>
                     </TouchableOpacity>
                    )
                    
                  })
                }

               </ScrollView>
            </TodoView>
        </View>
        
       
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight,
    // backgroundColor:'white'
  },
  imgView:{
    borderWidth:2,
    height:90,
    width:90,
    borderRadius:100,
    borderColor: "#D8605B",
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width: 80,
    height: 80,
    borderRadius:100
  },
  topView:{
    backgroundColor: '#F4C27F67',
    width:'100%',
    height:375,
    justifyContent:'center',
    alignItems:'center',
  },
  clock:{
    width: 120,
    height: 120
  },
  center:{
    alignItems:'center',
    margin:10
  },
  plusView:{
    borderWidth:1,
    borderColor:'#F4C27F',
    width:24,
    height:24,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  plusText:{
    color:'#F4C27F',

  },
  topTodo:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  todo:{
    shadowColor: '#171717',
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  box:{
    borderWidth:1,
    width: 17,
    height: 17,
    background: '#FFFFFF',
    margin:10,
    marginRight:20
  },
  circle:{
    width: 17,
    height: 17,
    backgroundColor: 'rgba(244, 194, 127, 0.67)',
    margin:10,
    marginRight:20,
    borderRadius:30
  },
  task:{
    flexDirection:'row',
    alignItems:'center',
    margin:10

  }

});
