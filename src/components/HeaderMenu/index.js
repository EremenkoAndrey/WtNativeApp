import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Icon } from 'native-base';

function HeaderMenu({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                transparent
                onPress={() => navigation.openDrawer()}
            >
                <Icon name="menu" />
            </Button>
        </View>
    );
}

HeaderMenu.propTypes = {
    navigation: PropTypes.shape({
        openDrawer: PropTypes.func
    }).isRequired
};

export default withNavigation(HeaderMenu);
