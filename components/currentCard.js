import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

import { HeroText } from './heroHeading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CurrentCard = ({ title, imageUrl, temprature, description }) => {
  return (
    <View>
      <HeroText title={title} />
      <View style={styles.current}>
        <Image
          style={styles.largeIcon}
          source={{
            uri: `${imageUrl}`,
          }}
        />
        <Text style={styles.currentTemp}>{Math.round(temprature)}°C</Text>
      </View>
      <Text style={styles.currentDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  current: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentTemp: {
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  currentDescription: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: windowWidth * 0.04,
    marginBottom: windowHeight * 0.03,
  },

  largeIcon: {
    width: windowWidth * 0.64,
    height: windowHeight * 0.257,
  },
});
