import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature/index.js';
import GoNews from './src/components/molecules/GoNews/index.js';
import GoInfo from './src/components/molecules/GoInfo/index.js';
import GoBanner from './src/components/molecules/GoBanner/index.js';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts/index.js';
import NavBar from './src/containers/organisms/NavBar/index.js';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature/index.js';
import HomeGopay from './src/containers/organisms/HomeGopay/index.js';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <SearchFeature />
          <HomeGopay />
          <HomeMainFeature />
          <View style={{ height: 17, backgroundColor: '#f2f2f4', marginTop: 10 }}></View>
          <GoNews />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </View >
    );
  }
}

