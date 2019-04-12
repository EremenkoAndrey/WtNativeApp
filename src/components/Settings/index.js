import React from 'react';
import PropTypes from 'prop-types';
import {
    Content, List, ListItem, Separator
} from 'native-base';
import { Text, Dict } from '../../functional';
import SettingUserInfo from './SettingUserInfo';
import SettingsFeed from './SettingsFeed';


function Settings({ userId }) {
    return (
        <Content>
            <List>
                <Separator bordered>
                    <Dict code="INFORMATION" processText={text => text.toUpperCase()} />
                </Separator>

                <SettingUserInfo userId={userId} />

                <Separator bordered>
                    <Dict code="FEED_SETTINGS" processText={text => text.toUpperCase()} />
                </Separator>

                <SettingsFeed />

                <Separator bordered>
                    <Dict code="LANG_SETTINGS" processText={text => text.toUpperCase()} />
                </Separator>
                <ListItem>
                    <Text>Тут переключение языка</Text>
                </ListItem>

                <Separator bordered>
                    <Dict code="ACCOUNT_SETTINGS" processText={text => text.toUpperCase()} />
                </Separator>
                <ListItem last>
                    <Text>Тут логаут</Text>
                </ListItem>
            </List>
        </Content>
    );
}

Settings.propTypes = {
    userId: PropTypes.string.isRequired
};

export default Settings;
