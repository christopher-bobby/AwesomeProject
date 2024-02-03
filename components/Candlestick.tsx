import React from 'react';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { candleData } from '../assets/dummyData';


const Candlestick: React.FC = () => {
  return (
    <CandlestickChart.Provider data={candleData}>
      <CandlestickChart>
        <CandlestickChart.Candles />
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

export default Candlestick;
