import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
    Form, Item, Input, Label, Button, Text
} from 'native-base';
import Link from '../functional/Link';

export default class SignUpScreen extends React.Component {
    constructor() {
        super();
        this.loading = false;
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    _signUpAsync = async () => {
        // register implementation
    };

    _showSignInScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SignIn');
    };

    _showAbout = () => {
        const { navigation } = this.props;
        navigation.navigate('About');
    };

    render() {
        const { password, username, email } = this.state;
        return (
            <View
                style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'
                }}
            >
                <View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                value={username}
                                onChangeText={value => this.setState({ email: value })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                value={password}
                                onChangeText={value => this.setState({ username: value })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                value={email}
                                onChangeText={value => this.setState({ password: value })}
                            />
                        </Item>
                    </Form>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ textAlign: 'center' }}>
                        by sign up you agree to our
                        <Link to="https://whotrades.com/terms"> terms and conditions </Link>
                        and
                        <Link to="https://whotrades.com/privacy-policy"> privacy policy</Link>
                    </Text>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Button
                        onPress={this._signUpAsync}
                        block
                    >
                        <Text>Sign up</Text>
                    </Button>
                </View>

                <View style={{ paddingTop: 25, alignItems: 'center' }}>
                    <View>
                        <Button
                            onPress={this._showSignInScreen}
                            transparent
                        >
                            <Text>Sign in</Text>
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

SignUpScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
};
