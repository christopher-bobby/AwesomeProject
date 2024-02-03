import { StyleSheet, Text, View, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import Candlestick from './components/Candlestick';
import CoincapOrderBook from './components/CoincapOrderBook';

const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width
  },
  buyButton: {
    backgroundColor: '#008000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  sellButton: {
    backgroundColor: '#FF0000E6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
      

  
const CandlestickChartPage = () => {

  return (
    <View>
      <ScrollView>
        <Candlestick />
        <CoincapOrderBook />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CandlestickChartPage;
