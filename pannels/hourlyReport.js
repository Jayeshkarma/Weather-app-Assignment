import { View, FlatList } from 'react-native';

import { SubHeading } from '../components/subheading';
import { HourlyCard } from '../components/hourlyCards';

export const HourlyReport = ({ title, hourlyData }) => {
  return (
    <View>
      <SubHeading title={title} />
      <FlatList
        horizontal
        data={hourlyData.slice(0, 24)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const weather = item.weather[0];
          const dt = new Date(item.dt * 1000);

          return (
            <HourlyCard
              dateTime={dt.toLocaleTimeString()}
              temprature={item.temp}
              imageUrl={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              description={weather.description}
            />
          );
        }}
      />
    </View>
  );
};
