import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ELevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ELevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🤦‍♂️</Text>
        </View>
      </ScrollView>
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
    flex: 1,
    flexDirection: 'row',
    padding: 5,
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
  cardElevated: {
    backgroundColor: '#86469C',
  },
});
