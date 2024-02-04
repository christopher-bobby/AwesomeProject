import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../common/globalStyles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 100,
    color: globalStyles.color.white
  },
  orderBookContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center', 
    flex: 1, 
    color: globalStyles.color.white
  },
  orderBookLabel: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
    marginBottom: 10,
    color: globalStyles.color.white
  },
  orderBook: {
    width: '50%',
  },
  label: {
    fontWeight: 'bold',
    color: globalStyles.color.white
  },
  totalAmount: {
    color: globalStyles.color.white
  },
  price: {
    marginLeft: 0,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'left',
    color: globalStyles.color.white
  },
  bidPrice: {
    color: globalStyles.color.red,
    fontSize: 14,
    padding: 4,
    margin: 4,
    fontWeight: 'bold',
  },
  askPrice: {
    color: globalStyles.color.green,
    fontSize: 14,
    padding: 4,
    paddingLeft: 0,
    margin: 4,
    marginLeft: 0,
    fontWeight: 'bold'
  },
});

const OrderBook = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.orderBookLabel}>Order Book</Text>
      <View style={styles.orderBookContainer}>
        <View style={styles.orderBook}>
          <Text style={styles.label}>Bid</Text>
          <View>
            <View style={styles.price}><Text style={styles.totalAmount}>7.86679</Text><Text style={styles.bidPrice}>42.629</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>2.49234</Text><Text style={styles.bidPrice}>42.628</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>1.86679</Text><Text style={styles.bidPrice}>42.627</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>0.86679</Text><Text style={styles.bidPrice}>42.626</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>0.66633</Text><Text style={styles.bidPrice}>42.625</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>0.36676</Text><Text style={styles.bidPrice}>42.624</Text></View>
            <View style={styles.price}><Text style={styles.totalAmount}>0.21677</Text><Text style={styles.bidPrice}>42.623</Text></View>
          </View>
    
        </View>

        <View style={styles.orderBook}>
          <Text style={styles.label}>Ask</Text>
          <View>
            <View style={styles.price}><Text style={styles.askPrice}>42.630</Text><Text style={styles.totalAmount}>4.86679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.631</Text><Text style={styles.totalAmount}>3.37494</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.632</Text><Text style={styles.totalAmount}>1.87679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.633</Text><Text style={styles.totalAmount}>2.26679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.634</Text><Text style={styles.totalAmount}>1.86633</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.635</Text><Text style={styles.totalAmount}>0.21677</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.636</Text><Text style={styles.totalAmount}>0.51677</Text></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderBook;
