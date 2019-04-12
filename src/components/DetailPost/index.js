import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import template from './tamplate';
import styles from './style';

export default function DetailPost({ content, title }) {
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: template(content, title) }}
            style={styles.webView}
            javaScriptEnabled
        />
    );
}

DetailPost.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string
};

DetailPost.defaultProps = {
    title: ''
};
