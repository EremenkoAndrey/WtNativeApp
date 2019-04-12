import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import HTMLView from 'react-native-htmlview';
import Tool from '../Tool';
import { Text } from '../../functional';
import PreviewPostTitle from './PreviewPostTitle';
import styles from './style';


function PreviewPost({ post, navigation }) {
    return (
        <View style={styles.block}>
            <PreviewPostTitle userId={post.author.id} date={post.date} />

            {Array.isArray(post.instruments)
                ? (
                    <View style={styles.instruments}>
                        {post.instruments.map(tool => (
                            <View style={styles.instrument} key={tool.id}>
                                <Tool id={tool.id} fontSize={13} />
                            </View>
                        ))}
                    </View>
                )
                : null}

            {post.title ? (
                <TouchableOpacity
                    style={styles.titleContainer}
                    onPress={() => navigation.navigate('DetailPost', {
                        html: post.content,
                        title: post.title
                    })}
                >
                    <Text style={styles.title}>
                        {post.title}
                    </Text>
                </TouchableOpacity>
            ) : null}

            <View style={styles.content}>
                <HTMLView
                    value={post.shortContent}
                    RootComponent={element => (<Text {...element} />)}
                />
            </View>

            <View style={styles.actions}>
                <View style={[styles.actionsColumn, styles.actionsColumnBordered]}><Icon name="ios-thumbs-up" style={{ fontSize: 20 }} /></View>
                <View style={[styles.actionsColumn, styles.actionsColumnBordered]}><Icon name="ios-thumbs-down" style={{ fontSize: 20 }} /></View>
                <View style={styles.actionsColumn}>
                    <Icon
                        name="ios-share-alt"
                        style={{ fontSize: 20 }}
                    />
                </View>
            </View>

            <Text style={{ textAlign: 'center' }}>{`Post id: ${post.id}`}</Text>
        </View>
    );
}

PreviewPost.propTypes = {
    post: PropTypes.shape({
        instruments: PropTypes.oneOfType([
            PropTypes.shape({
                type: null
            }),
            PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string
            }))
        ]).isRequired,
        author: PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
        shortContent: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default withNavigation(connect(mapStateToProps)(PreviewPost));
