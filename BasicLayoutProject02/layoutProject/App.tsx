import { SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import FlatCards from './components/FlatCards';
import ELevatedCards from './components/ELevatedCards';
import TrendingPlaceCard from './components/TrendingPlaceCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ELevatedCards />
          <TrendingPlaceCard />
          <ActionCard />
          <ContactList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;