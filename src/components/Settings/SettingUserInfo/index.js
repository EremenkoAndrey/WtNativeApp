import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { ListItem } from 'native-base';
import { Text } from '../../../functional';
import styles from './slyle';


function SettingUserInfo({ user }) {
    const { image, displayName, email } = user;

    return (
        <ListItem style={styles.block}>
            {image ? (
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: `https://${image}` }}
                    />
                </View>
            ) : null}

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.name}>{displayName}</Text>
                </View>
                <View>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
        </ListItem>
    );
}

SettingUserInfo.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        photo: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.userId]
});

export default connect(mapStateToProps)(SettingUserInfo);
