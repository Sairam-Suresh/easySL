import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/welcome/Introduction";

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Welcome!" options={{ title: 'Overview' }} component={HomeScreen} />
                <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;