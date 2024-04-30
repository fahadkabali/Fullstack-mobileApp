import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
// import * as dotenv from 'react-native-dotenv';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import TabNavigation from './App/Navigations/TabNavigation';
import * as Linking from 'expo-linking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import for creating tab navigation
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native'; // Import for Navigation Container

import { useFonts } from 'expo-font';



const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const expoKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),

  });

  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={expoKey}
    >
      <View style={styles.container}>
        <SignedIn>
            <TabNavigation/>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});
