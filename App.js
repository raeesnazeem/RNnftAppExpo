import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const MyStack = () => {
 return( 
      <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    )
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
        <MyStack/>
    </NavigationContainer>
  )
}

export default App;
