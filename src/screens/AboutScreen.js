import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class AboutScreen extends React.Component {
    closeAbout = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        return (
            <View
                style={{
                    padding: 30, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'
                }}
            >
                <Text
                    style={{ color: '#3F5185', marginBottom: 30 }}
                    onPress={this.closeAbout}
                >
                    Close
                </Text>

                <Text style={{ marginBottom: 5 }}>
                    That mobile app is light weight client app for service WhoTrades.com
                </Text>

                <Text>
                    WhoTrades.com - social network for traders, here you can:
                </Text>

                <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                    - get other markets people opinion
                </Text>
                <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                    - give your opinion
                </Text>
                <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                    - create forecasts for tickers
                </Text>
                <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                    - get changes for quotes
                </Text>
            </View>
        );
    }
}

AboutScreen.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired
};
