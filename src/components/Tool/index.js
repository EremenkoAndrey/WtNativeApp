import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from '../../functional';
import styles from './style';

function Tool({
    ticker, price, priceChange, fontSize
}) {
    const bg = (priceChange >= 0) ? '#74bb36' : '#e66c54';
    const fs = (fontSize !== null) ? { fontSize } : {};

    return (
        <View style={[styles.block, { backgroundColor: bg }, fs]}>
            <View style={styles.name}>
                <Text style={[fs, styles.textName]}>{ticker}</Text>
            </View>
            <View>
                <Text style={fs}>{price}</Text>
            </View>
        </View>
    );
}

Tool.propTypes = {
    ticker: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceChange: PropTypes.number.isRequired,
    fontSize: PropTypes.number
};

Tool.defaultProps = {
    fontSize: null
};

const mapStateToProps = (state, ownProps) => ({
    ticker: state.tools[ownProps.id].ticker,
    price: state.tools[ownProps.id].price,
    priceChange: parseFloat(state.tools[ownProps.id].priceChange)
});

export default connect(mapStateToProps)(Tool);
