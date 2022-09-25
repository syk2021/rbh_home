
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 30}}>Robinhood University</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 50, paddingBottom: 10}}>Categories</Text>
      <Text style={styles.specificCategories}>Cleaning Supplies</Text>
      <Text style={styles.specificCategories}>Lighting</Text>
      <Text style={styles.specificCategories}>Electronics</Text>

      <View style= {{ paddingTop: 10, paddingBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 20 }}>Recommended for you</Text>
        <Text style = {styles.description}>
        <Image source={require('./images/clorox.jpg')} style={styles.image}/>
        <Text style={{ textAlignVertical: 'top' }}><Text style={{ fontWeight: 'bold', fontSize: 20}}>Clorox</Text> <Text style={{ fontSize: 12}}>New & Never Used</Text></Text>
        </Text>
      </View>

      <View style = {{ paddingTop: 10, paddingBottom: 10 }}>
        <Text style = {styles.description}>
          <Image source={require('./images/lamp.jpg')} style={styles.image}/>
          <Text style={{ textAlignVertical: 'top' }}><Text style={{ fontWeight: 'bold', fontSize: 20}}>Lamp</Text> <Text style={{ fontSize: 12}}>New & Never Used</Text></Text>
        </Text>
      </View>

      <View style= {{ paddingTop: 10, paddingBottom: 10 }}>
        <Text style = {styles.description}>
          <Image source={require('./images/microwave.jpg')} style={styles.image}/>
          <Text style={{ textAlignVertical: 'top' }}><Text style={{ fontWeight: 'bold', fontSize: 20}}>Microwave</Text> <Text style={{ fontSize: 12}}>Used</Text></Text>
        </Text>
      </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'start',
    paddingTop: 20,
    paddingBottom: 20,
  
  },
  specificCategories: {
    backgroundColor: '#DEDAD9',
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
});
