import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen'
import colors from './src/helpers/colors'
import CartScreen from './src/components/CartScreen';

export default function App() {
  return (
      <NavigationContainer >
        <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
         </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
