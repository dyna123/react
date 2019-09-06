import React from 'react';
import { View, Image, Text } from 'react-native';

const GopayFeature = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Image source={props.img} />
            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', marginTop: 15 }}>{props.title}</Text>
        </View>
    )
}

export default GopayFeature;