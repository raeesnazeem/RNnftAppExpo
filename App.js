import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme} from '@react-navigation/native'
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

  const [loaded] = useFonts({
    InterBold : require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),
    InterRegular : require("./assets/fonts/Inter-Regular.ttf"),
    InterLight : require("./assets/fonts/Inter-Light.ttf")
  })

  /* If fonts arent loaded return null */
  if(!loaded) return null

  return (
    <NavigationContainer theme={theme}>
        <MyStack/>
    </NavigationContainer>
  )
}

export default App;
