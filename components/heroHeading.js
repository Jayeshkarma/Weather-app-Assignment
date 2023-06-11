
import { StyleSheet, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const HeroText = ({ title }) => {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: windowWidth * 0.1,
    color: '#e96e50',
  },
});
