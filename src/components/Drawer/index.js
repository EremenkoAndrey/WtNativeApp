import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
    List, ListItem, Left, Icon, Body
} from 'native-base';
import { Text, Dict } from '../../functional';
import styles from './style';

function Drawer({ navigation }) {
    return (
        <View style={styles.block}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Whotades</Text>
            </View>
            <List>
                <ListItem icon>
                    <Left>
                        <Icon name="ios-people" style={{ color: '#FFFFFF' }} />
                    </Left>
                    <Body style={{ borderBottom: 'none' }}>
                        <Dict
                            code="FEED"
                            style={{ color: '#FFFFFF' }}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="ios-settings" style={{ color: '#FFFFFF' }} />
                    </Left>
                    <Body style={{ borderBottom: 'none' }}>
                        <Dict
                            code="SETTINGS"
                            style={{ color: '#FFFFFF' }}
                            onPress={() => navigation.navigate('Settings')}
                        />
                    </Body>
                </ListItem>
            </List>
            <Text>Custom drawer</Text>
        </View>
    );
}

Drawer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
};

export default withNavigation(Drawer);
