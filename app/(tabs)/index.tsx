import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FBFBDB', dark: '#FBFBDB' }}
      headerImage={
        <Image
          source={require('@/assets/images/mainlogo.png')}
          style={styles.Logo}
        />
      }
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
        // onPress={() => navigation.navigate()}
        >
          <Image
            source={require('@/assets/images/icon.png')} // Path to the pineapple image
            style={styles.image}
          />
          <Text style={styles.text}>Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        // onPress={() => navigation.navigate()}
        >
          <Image
            source={require('@/assets/images/icon.png')} // Path to the pineapple image
            style={styles.image}
          />
          <Text style={styles.text}>Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        // onPress={() => navigation.navigate()}
        >
          <Image
            source={require('@/assets/images/icon.png')} // Path to the pineapple image
            style={styles.image}
          />
          <Text style={styles.text}>Fruits</Text>
        </TouchableOpacity>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: 300,
    width: 300,
    top: 40,
    left: 20,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row', // This arranges items in a row (side by side)
    // justifyContent: 'space-between', // Space between the buttons
    paddingBottom: 20,
    flexWrap: 'wrap', // Enables the wrapping behavior
  },
  text: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#ffbd59', // Background color for the button (similar to the image)
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
    paddingBottom: 20,
    marginBottom: 20,
    marginHorizontal: 12,
  },
  image: {
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },
  parallaxBackground: {
    backgroundColor: '#fff0D9',
  }
});
