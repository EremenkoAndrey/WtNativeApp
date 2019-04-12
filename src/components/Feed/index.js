import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, View } from 'react-native';
import Activity from '../Activity';
import { FETCH_FEED } from '../../actions/feed';
import styles from './style';

const Spinner = connect(state => ({
    loading: state.feed.loading
}))(({ loading }) => (loading ? <ActivityIndicator /> : null));

class Feed extends React.Component {
    componentDidMount() {
        const { feedList } = this.props;
        if (!feedList.length) {
            this.loadMore();
        }
    }

    loadMore = () => {
        const { getFeedData, userId } = this.props;
        getFeedData(userId);
    };

    render() {
        const { feedList } = this.props;

        return (
            <View style={styles.block}>
                {feedList.length ? (
                    <FlatList
                        style={styles.list}
                        data={feedList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Activity id={item.id} />}
                        onEndReached={this.loadMore}
                        onEndReachedThreshold={1}
                    />
                ) : null}
                <Spinner />
            </View>
        );
    }
}

Feed.propTypes = {
    userId: PropTypes.string.isRequired,
    feedList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    })).isRequired,
    getFeedData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    feedList: state.feed.list
});


const mapDispatchToProps = dispatch => ({
    getFeedData: userId => dispatch(FETCH_FEED(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
