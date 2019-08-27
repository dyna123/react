import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
        <View style={{ height: 54, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/home-active.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4, color: '#43AB4A' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/order.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/help.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Help</Text></View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/inbox.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/account.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Account</Text>
          </View>
        </View >
      </View >
    );
  }
}
const style = StyleSheet.create({

});
