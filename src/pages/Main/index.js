import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    //fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  }
});

const Main = () => (
  <ImageBackground
    style={styles.container}
    resizeMode="cover"
    backgroundColor="#324F86"
  >
    <StatusBar barStyle="light-content" backgroundColor="#324F86" />
    <Text style={styles.logo} resizeMode="contain">tgf.capital</Text>
    <Text style={styles.instructions}>tgfcapital.com architecture stack</Text>
    <Text style={styles.instructions}>thiagocaggiano@gmail.com</Text>
    <Text style={[styles.instructions, styles.fileName]}>src/pages/Main/index.js</Text>
  </ImageBackground>
);

export default Main;
