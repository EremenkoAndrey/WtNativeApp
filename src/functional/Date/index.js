import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import WTText from '../WTText';


function Date({
    children, lang, spaceBefore, spaceAfter, ...props
}) {
    const formattedDate = moment(children).locale(lang).fromNow();
    return (<WTText {...props}>{`${spaceBefore ? ' ' : ''}${formattedDate}${spaceAfter ? ' ' : ''}`}</WTText>);
}

Date.propTypes = {
    children: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    spaceBefore: PropTypes.bool,
    spaceAfter: PropTypes.bool
};

Date.defaultProps = {
    spaceBefore: false,
    spaceAfter: false
};

const mapStateToProps = state => ({
    lang: state.user.settings.lang
});

export default connect(mapStateToProps)(Date);
