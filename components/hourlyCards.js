import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HourlyCard = ({ dateTime, temprature, imageUrl, description }) => {
  return (
    <View style={styles.hour}>
      <Text>{dateTime.replace(/:\d+ /, ' ')}</Text>
      <Text>{Math.round(temprature)}°C</Text>
      <Image
        style={styles.smallIcon}
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hour: {
    padding: windowHeight * 0.01,
    alignItems: 'center',
  },

  smallIcon: {
    width: windowWidth * 0.24,
    height: windowWidth * 0.24,
  },
});
