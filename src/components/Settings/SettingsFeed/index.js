import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    ListItem, Switch, Body, Right
} from 'native-base';
import { Dict } from '../../../functional';
import { TOGGLE_RECOMMENDATIONS } from '../../../actions/feed';

// TODO Автоматически обновлять ленту после изменений
function SettingsFeed({ enableRecommendations, toggleRecommendations }) {
    return (
        <ListItem>
            <Body>
                <Dict code="ENABLE_RECOMMENDATIONS" />
            </Body>
            <Right>
                <Switch
                    value={enableRecommendations}
                    onValueChange={toggleRecommendations}
                />
            </Right>
        </ListItem>
    );
}

SettingsFeed.propTypes = {
    enableRecommendations: PropTypes.bool.isRequired,
    toggleRecommendations: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    enableRecommendations: state.feed.enableRecommendations
});

const mapDispatchToProps = dispatch => ({
    toggleRecommendations: () => dispatch(TOGGLE_RECOMMENDATIONS())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFeed);
