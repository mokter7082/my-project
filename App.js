import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from './src/theme/typography';

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium":require("./assets/fonts/Antonio-Medium.ttf"),
    "LeagueSpartan-Regular":require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });
  if (!loaded) {
    return <Text>Font is loading.....</Text>
  }
  return (
    <View style={styles.container}>
        <Text  style={{ fontFamily: typography.primaryFont, fontSize: 30 }}>Open up App.js to start working on your app!</Text>
        <Text  style={{ fontFamily: 'LeagueSpartan-Regular', fontSize: 30 }}>Spartan Regular</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
