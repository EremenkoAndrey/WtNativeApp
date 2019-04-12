import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './slyle';

export default function WTText({ children, style, ...props }) {
    const { textStyle } = styles;
    return (
        <Text {...props} style={[textStyle, style]}>{children}</Text>
    );
}

WTText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    /* eslint react/forbid-prop-types:0 */
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

WTText.defaultProps = {
    children: '',
    style: {}
};
