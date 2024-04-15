import { StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favourites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
    }}>
        <Drawer.Screen
            name='Categories'
            component={CategoriesScreen}
            options={{
                title: 'All Categories',
                drawerIcon: ({size, color}) => (
                    <Ionicons name='list' color={color} size={size} />
                )
            }}
        />
        <Drawer.Screen
            name='Favourites'
            component={FavouritesScreen}
            options={{
                drawerIcon: ({size, color}) => (
                    <Ionicons name='star' color={color} size={size} />
                )
            }}

        />
    </Drawer.Navigator>;
}

export default function App() {
  return (
      <>
        <StatusBar style='light'/>
          <FavouritesContextProvider>
              <NavigationContainer>
                  <Stack.Navigator screenOptions={{
                      headerStyle: {backgroundColor: '#351401'},
                      headerTintColor: 'white',
                      contentStyle: {backgroundColor: '#3f2f25'}
                  }}>
                      <Stack.Screen
                          name='MealsCategories'
                          component={DrawerNavigator}
                          options={{
                              headerShown: false
                          }}/>
                      <Stack.Screen
                          name='MealsOverview'
                          component={MealsOverViewScreen}
                      />
                      <Stack.Screen
                          name='MealDetail'
                          component={MealDetailScreen}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </FavouritesContextProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
