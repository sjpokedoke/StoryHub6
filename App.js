import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/writeScreen';
import ReadScreen from './screens/readScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>  
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "READING"){
      return(
        <SafeAreaProvider>
        <Image
         source = {require('./assets/read.png')}
         style = {{width: 40, height: 40}}
        />
        </SafeAreaProvider>
      )
    }
    else if(routeName == "WRITING"){
      return(
        <SafeAreaProvider>
        <Image
         source = {require('./assets/write.png')}
         style = {{width: 40, height: 40}}
        />
        </SafeAreaProvider>
      )
    }
   }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);