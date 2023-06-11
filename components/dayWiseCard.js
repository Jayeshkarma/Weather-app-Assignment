import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const DayWiseCard = ({
  dateTime,
  temprature,
  imageUrl,
  description,
}) => {
  return (
    <View style={styles.day}>
      <Text style={styles.dayTemp}>{Math.round(temprature)}°C</Text>
      <Image
        style={styles.smallIcon}
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <View style={styles.dayDetails}>
        <Text>{dateTime.toLocaleDateString()}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.01,
    marginLeft:windowWidth * 0.03,
    
  },
  dayDetails: {
    justifyContent: 'center',
  },
  dayTemp: {
    marginLeft: windowWidth * 0.03,
    fontSize: windowWidth * 0.04,
  },

  smallIcon: {
    width: windowWidth * 0.24,
    height: windowWidth * 0.24,
  },
});
