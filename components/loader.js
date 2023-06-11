import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

export const Loader = ({ message }) => {
  return (
    <SafeAreaView style={styles.loading}>
      <ActivityIndicator size="large" color="#e96e50" />
      <Text>{message}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
