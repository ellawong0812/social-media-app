import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Screen/HomePage';
import Profile from './Screen/Profile';
import ChatBox from './Screen/ChatBox';
import Quiz from './Screen/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const homeName = "歡迎來到薄扶林村牧場";
const chatName = "Comment";
const profileName = "Activity";
const quiz='Quiz';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === chatName) {
              iconName = focused ? 'chatbox' : 'chatbox-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if(rn === quiz){
              iconName = focused ? 'book-sharp' : 'book-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={chatName} component={ChatBox} />
        <Tab.Screen name={quiz} component={Quiz} />
        <Tab.Screen name={profileName} component={Profile} />
        

      </Tab.Navigator>
    </NavigationContainer>


    // <View>
    //   <HomePage/>
    // </View>
  );
}

const styles = StyleSheet.create({
  
});
