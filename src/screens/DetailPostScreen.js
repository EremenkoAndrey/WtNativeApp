import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailPost from '../components/DetailPost';

class DetailPostScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title'),
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'normal'
        }
    });

    render() {
        const { navigation } = this.props;
        const html = navigation.getParam('html');
        const title = navigation.getParam('title');
        return (
            <DetailPost content={html} title={title} />
        );
    }
}

DetailPostScreen.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(DetailPostScreen);
