import { StyleSheet, Text, View, Button, Vibrationibrate, Vibration } from 'react-native';

export default function App() {
  return (
    <view style={styles.container}>
        <Button title='click'
        onPress={() => Vibration.vibrate()}/>
    </view>
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
