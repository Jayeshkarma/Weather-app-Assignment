import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  RefreshControl,
  Dimensions,
  StatusBar,
} from 'react-native';
import * as Location from 'expo-location';

import { url } from './service';
import { CurrentCard } from './components/currentCard';
import { Loader } from './components/loader';
import { HourlyReport } from './pannels/hourlyReport';
import { DailyReport } from './pannels/DaywiseReport';

//defined layout params
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//main function
const App = () => {
  //defined states 
  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

//API call to get weather data 
  const loadweatherForecast = async () => {
    setRefreshing(true);
    //checking permission
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      setRefreshing(false);
      return;
    }
//API call 
    try {
      const location = await Location.getLastKnownPositionAsync();
      const response = await fetch(
        `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      const data = await response.json();

      if (!response.ok) {
        Alert.alert(`Error retrieving weather data: ${data.message}`);
      } else {
        setForecast(data);
      }
    } catch (error) {
      Alert.alert('Error retrieving weather data', error.message);
    }

    setRefreshing(false);
  };

//callong function on page load 
  useEffect(() => {
    loadweatherForecast();
  }, []);

//headling eror on load
  if (!forecast) {
    return (
     <Loader message="Fetcing Weather Information ..." />
    );
  }

  const current = forecast.current.weather[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={loadweatherForecast}
            refreshing={refreshing}
          />
        }>

        <CurrentCard
          title="Current Weather"
          imageUrl={`http://openweathermap.org/img/wn/${current.icon}.png`}
          temprature={forecast.current.temp}
          description={current.description}
        />
        <HourlyReport title="Hourly Forecast" hourlyData={forecast.hourly} />
        
        <DailyReport title="Next 5 Days" DailyData={forecast.daily} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.01,
  },

});

export default App;
