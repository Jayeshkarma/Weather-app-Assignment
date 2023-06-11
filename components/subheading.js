import { StyleSheet, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const SubHeading = ({ title }) => {
  return <Text style={styles.subtitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: windowWidth * 0.06,
    marginVertical: windowHeight * 0.02,
    marginLeft: windowWidth * 0.01,
    color: '#e96e50',
  },
});
