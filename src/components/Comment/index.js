import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from '../../functional';
import styles from './style';

function Comment({ comment }) {
    return (
        <View style={styles.block}>
            <View>
                <Text
                    numberOfLines={5}
                    ellipsizeMode="tail"
                >
                    {`Comment: ${comment.content}`}
                </Text>
            </View>
        </View>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        content: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id]
});

export default connect(mapStateToProps)(Comment);
