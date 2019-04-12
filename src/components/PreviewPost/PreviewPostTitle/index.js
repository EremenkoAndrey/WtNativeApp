import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Icon, Button, ActionSheet } from 'native-base';
import { Text, Date } from '../../../functional';
import styles from './slyle';

function PreviewPostTitle({ userName, userAvatar, date }) {
    return (
        <View style={styles.block}>
            <View style={styles.userCard}>
                {userAvatar ? (
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: `https://${userAvatar}` }}
                        />
                    </View>
                ) : null}

                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.name}>{userName}</Text>
                    </View>
                    <View>
                        <Date style={styles.date}>{date.created}</Date>
                    </View>
                </View>
            </View>

            <View style={styles.more}>
                <Button
                    iconRight
                    transparent
                    title="More"
                    onPress={() => ActionSheet.show({
                        options: [
                            { text: 'Subscribe to author', icon: 'ios-add-circle-outline', iconColor: '#007aff' },
                            { text: 'Subscribe to group', icon: 'ios-add-circle-outline', iconColor: '#007aff' },
                            { text: 'Hide', icon: 'ios-close-circle-outline', iconColor: '#007aff' },
                            { text: 'Complain', icon: 'ios-alert', iconColor: '#e66c54' }
                        ],
                        cancelButtonIndex: 3
                    }, buttonIndex => console.log(buttonIndex))}
                >
                    <Icon name="md-more" style={{ color: '#007aff' }} />
                </Button>
            </View>
        </View>
    );
}

PreviewPostTitle.propTypes = {
    userName: PropTypes.string.isRequired,
    date: PropTypes.shape({
        created: PropTypes.string,
        modified: PropTypes.string
    }).isRequired,
    userAvatar: PropTypes.string
};

PreviewPostTitle.defaultProps = {
    userAvatar: ''
};

const mapStateToProps = (state, ownProps) => ({
    userName: state.users[ownProps.userId].displayName,
    userAvatar: state.users[ownProps.userId].image
});

export default connect(mapStateToProps)(PreviewPostTitle);
