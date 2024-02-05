import React from 'react';
import { ScrollView } from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { candleData } from '../assets/dummyData';


const Candlestick: React.FC = () => {
  return (
    <ScrollView>
      <CandlestickChart.Provider data={candleData}>
        <CandlestickChart>
          <CandlestickChart.Candles />
        </CandlestickChart>
      </CandlestickChart.Provider>
    </ScrollView>
   
  );
};

export default Candlestick;
