import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
const GoInfo = () => {
    return (
        <View style={{ padding: 16, paddingTop: 0 }}>
            <View style={{ height: 15, width: 60, marginLeft: -4 }}>
                <Image source={require('../../../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>Complete yout profile</Text>
            <View style={{ flexDirection: "row", marginBottom: 16 }}>
                <View>
                    <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                </View>
                <View style={{ marginLeft: 16, flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a' }}>Connect with Facebook</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%' }}>Login faster without veirfication code</Text>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4, textAlign: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }}></View>
        </View>
    )
}

export default GoInfo;