import { StyleSheet, Text, View, Button, Vibrationibrate, Vibration } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
        <Button title='click'
        onPress={() => Vibration.vibrate()}/>
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
