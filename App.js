import * as React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import * as Speech from 'expo-speech';
import * as Font from 'expo-font';

export default function App() {
  const [textToSpeak, setTextToSpeak] = React.useState('');
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadCustomFont() {
      await Font.loadAsync({
        'Lobster-Regular': require('./assets/Lobster-Regular.ttf'),
      });
      setFontLoaded(true);
    }

    loadCustomFont();
  }, []);

  const speak = () => {
    if (textToSpeak.trim() !== '') {
      Speech.speak(textToSpeak);
    }
  };

  return (
    <View style={styles.container}>
      {fontLoaded && (
        <Text style={styles.title}>Text-to-Speech</Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What do you want me to say?"
          placeholderTextColor='#E2A2BB'
          value={textToSpeak}
          onChangeText={(text) => setTextToSpeak(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#E2A2BB"
          title="SPEAK"
          onPress={speak}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#581845',
    padding: 20,
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontSize: 50,
    color: '#E2A2BB',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    width: 260,
    color: '#581845',
  },
  buttonContainer: {
    width: '20%',
  },
});
