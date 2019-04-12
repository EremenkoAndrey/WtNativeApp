import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import Settings from '../components/Settings';
import { FETCH_USER } from '../actions/user';


class SettingsScreen extends React.Component {
    componentDidMount() {
        const { userId, getUser } = this.props;
        if (!userId) {
            getUser();
        }
    }

    render() {
        const { userId } = this.props;
        if (!userId) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Settings userId={userId} />
        );
    }
}

SettingsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired,
    getUser: PropTypes.func.isRequired,
    userId: PropTypes.string
};

SettingsScreen.defaultProps = {
    userId: ''
};

const mapStateToProps = state => ({
    userId: state.user.id
});


const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(FETCH_USER())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
