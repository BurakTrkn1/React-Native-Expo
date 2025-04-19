import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from '@/Screens/Home';
import Output from '@/Screens/Output'
export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Output" component={Output} />
    </Stack.Navigator>
  )
}
