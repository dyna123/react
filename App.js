import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        {/* Search bar */}
        <View style={{ flex: 1 }}>
          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
              <Image source={require('./assets/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./assets/promo.png')} />
            </View>
          </View>
        </View>

        {/* gopay */}
        <View style={{ marginHorizontal: 17, marginTop: 8 }}>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
            <Image source={require('./assets/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color:'white'}}>Rp.50375</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
             <View style={{flex: 1, alignItems: 'center',}}>
              <Image source={require('./assets/pay.png')}/>
              <Text style={{fontWeight: 'bold', fontSize: 13, color:'white', marginTop:15}}>Pay</Text>
            </View>
             <View style={{flex: 1, alignItems: 'center',}}>
              <Image source={require('./assets/nearby.png')}/>
              <Text style={{fontWeight: 'bold', fontSize: 13, color:'white', marginTop:15}}>Nearby</Text>
            </View>
             <View style={{flex: 1, alignItems: 'center',}}>
              <Image source={require('./assets/topup.png')}/>
              <Text style={{fontWeight: 'bold', fontSize: 13, color:'white', marginTop:15}}>Top Up</Text>
            </View>
             <View style={{flex: 1, alignItems: 'center',}}>
              <Image source={require('./assets/more.png')}/>
              <Text style={{fontWeight: 'bold', fontSize: 13, color:'white', marginTop:15}}>More</Text>
            </View>
          </View>
        </View>

        {/* Navbar */}
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
