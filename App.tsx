import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CandlestickChartPage from './src/screens/CandlestickChartPage';
import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

const App: React.FC = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Crypto Price" component={MainScreen} />
          <Stack.Screen name="Chart" component={CandlestickChartPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
