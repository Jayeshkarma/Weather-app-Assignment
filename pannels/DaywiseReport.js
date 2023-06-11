import { View, FlatList } from 'react-native';

import { SubHeading } from '../components/subheading';
import { DayWiseCard } from '../components/dayWiseCard';

export const DailyReport = ({ title, DailyData }) => {
  return (
    <View>
      <SubHeading title={title} />
      <FlatList
        data={DailyData.slice(0, 5)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const weather = item.weather[0];
          const dt = new Date(item.dt * 1000);

          return (
            <DayWiseCard
              dateTime={dt}
              temprature={item.temp.max}
              imageUrl={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              description={weather.description}
            />
          );
        }}
      />
    </View>
  );
};
