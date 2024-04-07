import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.text}>BLue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.text}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    height: 150,
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
  card1: {
    backgroundColor: '#E78895',
    color: '#000000',
  },
  card2: {
    backgroundColor: '#6AD4DD',
  },
  card3: {
    backgroundColor: '#C6EBC5',
  },
});
