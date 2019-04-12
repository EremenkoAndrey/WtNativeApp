import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
    Form, Item, Input, Label, Button, Text, Toast
} from 'native-base';
import api from '../services/api';
import token from '../services/token';
import Link from '../functional/Link';


export default class SignInScreen extends React.Component {
    constructor() {
        super();
        this.loading = false;
        this.state = {
            username: 'ae@whotrades.org',
            password: 'exrelercy0d@'
        };
    }

    _showToast = () => {
        Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay',
            duration: 0,
            type: 'danger'
        });
    };

    _setError = () => {
        this._showToast();
    };

    _signInAsync = async () => {
        const { navigation } = this.props;
        const { password, username } = this.state;
        if (this.loading || !username || !password) {
            return false;
        }
        this.loading = true;

        try {
            const result = await api.authorization(username, password);
            const { token: userToken } = result;
            await token.save(userToken);
            navigation.navigate('App');
            return true;
        } catch (error) {
            this._setError();
            this.loading = false;
            return false;
        }
    };

    _showSignUpScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SignUp');
    };

    _showAbout = () => {
        const { navigation } = this.props;
        navigation.navigate('About');
    };

    render() {
        const { password, username } = this.state;
        return (
            <View
                style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'
                }}
            >
                <View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                value={username}
                                onChangeText={value => this.setState({ username: value })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                value={password}
                                onChangeText={value => this.setState({ password: value })}
                                secureTextEntry
                            />
                        </Item>
                    </Form>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ textAlign: 'center' }}>
                        by sign in you agree to our
                        <Link to="https://whotrades.com/terms"> terms and conditions </Link>
                        and
                        <Link to="https://whotrades.com/privacy-policy"> privacy policy</Link>
                    </Text>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Button
                        onPress={this._signInAsync}
                        block
                    >
                        <Text>Sign in</Text>
                    </Button>
                </View>

                <View style={{ paddingTop: 25, alignItems: 'center' }}>
                    <View>
                        <Button
                            onPress={this._showSignUpScreen}
                            transparent
                        >
                            <Text>Sign up</Text>
                        </Button>
                    </View>
                    <View>
                        <Button
                            onPress={this._showAbout}
                            transparent
                        >
                            <Text>About us</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

SignInScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
};
