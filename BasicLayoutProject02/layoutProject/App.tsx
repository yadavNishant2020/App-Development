import {SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCards from './components/FlatCards';
import ELevatedCards from './components/ELevatedCards';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ELevatedCards />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
