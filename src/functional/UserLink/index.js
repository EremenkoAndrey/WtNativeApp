import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import WTText from '../WTText';
import styles from './slyle';

function UserLink({
    id, userName, view, navigation, style, ...props
}) {
    const ComponentWrapper = view ? view() : WTText;
    return (
        <ComponentWrapper
            {...props}
            style={[styles.link, style]}
            onPress={() => navigation.navigate('User', {
                id
            })}
        >
            {userName}
        </ComponentWrapper>
    );
}


UserLink.propTypes = {
    id: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired,
    view: PropTypes.func,
    /* eslint react/forbid-prop-types:0 */
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

UserLink.defaultProps = {
    view: null,
    style: {}
};

const mapStateToProps = (state, ownProps) => ({
    userName: state.users[ownProps.id].displayName
});

export default withNavigation(connect(mapStateToProps)(UserLink));
