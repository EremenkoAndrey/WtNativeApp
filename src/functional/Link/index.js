import React from 'react';
import { Linking, Text } from 'react-native';
import style from './slyle';

function Link({ children, to }) {
    return (
        <Text style={style.link} onPress={() => Linking.openURL(to)}>{children}</Text>
    );
}

export default Link;
