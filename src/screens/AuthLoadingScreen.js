import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import token from '../services/token';



export default class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const { navigation } = this.props;
        const userToken = await token.get();
        navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
}

ActivityIndicator.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    })
};
