import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
// You can import from local files
import Issue from './Screens/Issue';
import Search from './Screens/Search'

export default function App() {
    return <AppContainer/>
}
const TabNavigator = createBottomTabNavigator({
  Issue:Issue,
  Search:Search
});
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems:'center'
  },
});
