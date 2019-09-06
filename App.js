import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature/index.js';
import MainFeature from './src/components/molecules/MainFeature/index.js';
import SearchFeature from './src/components/molecules/SearchFeature/index.js';
import GoNews from './src/components/molecules/GoNews/index.js';
import GoInfo from './src/components/molecules/GoInfo/index.js';
import GoBanner from './src/components/molecules/GoBanner/index.js';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts/index.js';
import NavBarIcon from './src/components/molecules/NavBarIcon/index.js';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {/* Search bar */}
          <SearchFeature />
          {/* gopay */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp.50.375</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')} />
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
            </View>
          </View>
          {/* Main Feature */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18, flexWrap: 'wrap' }}>
              <MainFeature title="GO-RIDE" img={require('./src/assets/icon/go-ride.png')} />
              <MainFeature title="GO-CAR" img={require('./src/assets/icon/go-car.png')} />
              <MainFeature title="GO-BLUEBIRD" img={require('./src/assets/icon/go-bluebird.png')} />
              <MainFeature title="GO-SEND" img={require('./src/assets/icon/go-send.png')} />
              <MainFeature title="GO-DEALS" img={require('./src/assets/icon/go-deals.png')} />
              <MainFeature title="GO-PULSA" img={require('./src/assets/icon/go-pulsa.png')} />
              <MainFeature title="GO-FOOD" img={require('./src/assets/icon/go-food.png')} />
              <MainFeature title="MORE" img={require('./src/assets/icon/go-more.png')} />
            </View>
          </View>
          <View style={{ height: 17, backgroundColor: '#f2f2f4', marginTop: 10 }}></View>
          {/* News Section */}
          <GoNews />
          {/* Internal Information */}
          <GoInfo />
          {/* Gofood Banner section */}
          <GoBanner />
          {/* Nearby Go-food */}
          <ScrollableProducts />
        </ScrollView>
        {/* Navbar */}
        <View style={{ height: 54, flexDirection: 'row', borderTopColor: '#e8e9ed', borderTopWidth: 1, }}>
          <NavBarIcon title="Home" img={require('./src/assets/icon/home-active.png')} />
          <NavBarIcon title="Orders" img={require('./src/assets/icon/order.png')} />
          <NavBarIcon title="Help" img={require('./src/assets/icon/help.png')} />
          <NavBarIcon title="Inbox" img={require('./src/assets/icon/inbox.png')} />
          <NavBarIcon title="Account" img={require('./src/assets/icon/account.png')} />
        </View>
      </View >
    );
  }
}
const style = StyleSheet.create({

});
