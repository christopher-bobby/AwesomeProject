import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 100,
  },
  orderBookContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center', 
    flex: 1, 
  },
  orderBookLabel: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
    marginBottom: 10
  },
  orderBook: {
    width: '50%',
  },
  label: {
    fontWeight: 'bold'
  },
  price: {
    marginLeft: 0,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'left'

  },
  bidPrice: {
    color: '#FF0000E6',
    fontSize: 14,
    padding: 4,
    margin: 4,
    fontWeight: 'bold',
  },
  askPrice: {
    color: '#008000',
    fontSize: 14,
    padding: 4,
    paddingLeft: 0,
    margin: 4,
    marginLeft: 0,
    fontWeight: 'bold'
  },
});

const CoincapOrderBook = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.orderBookLabel}>Order Book</Text>
      <View style={styles.orderBookContainer}>
        <View style={styles.orderBook}>
          <Text style={styles.label}>Bid</Text>
          <View>
            <View style={styles.price}><Text>7.86679</Text><Text style={styles.bidPrice}>42.629</Text></View>
            <View style={styles.price}><Text>2.49234</Text><Text style={styles.bidPrice}>42.628</Text></View>
            <View style={styles.price}><Text>1.86679</Text><Text style={styles.bidPrice}>42.627</Text></View>
            <View style={styles.price}><Text>0.86679</Text><Text style={styles.bidPrice}>42.626</Text></View>
            <View style={styles.price}><Text>0.66633</Text><Text style={styles.bidPrice}>42.625</Text></View>
            <View style={styles.price}><Text>0.36676</Text><Text style={styles.bidPrice}>42.624</Text></View>
            <View style={styles.price}><Text>0.21677</Text><Text style={styles.bidPrice}>42.623</Text></View>
          </View>
    
        </View>

        <View style={styles.orderBook}>
          <Text style={styles.label}>Ask</Text>
          <View>
            <View style={styles.price}><Text style={styles.askPrice}>42.630</Text><Text>4.86679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.631</Text><Text>3.37494</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.632</Text><Text>1.87679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.633</Text><Text>2.26679</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.634</Text><Text>1.86633</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.635</Text><Text>0.21677</Text></View>
            <View style={styles.price}><Text style={styles.askPrice}>42.636</Text><Text>0.51677</Text></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoincapOrderBook;
