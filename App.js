import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/register';
import LoginScreen from './screens/login';
import DashScreen from './screens/dash';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dash" component={DashScreen} />
      </Stack.Navigator>
    </NavigationContainer>  );
}

