import {
    createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailPostScreen from '../screens/DetailPostScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AboutScreen from '../screens/AboutScreen';
import DrawerScreen from '../screens/DrawerScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    DetailPost: DetailPostScreen,
    Settings: SettingsScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    About: AboutScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
});

const DrawerWrapAppStack = createDrawerNavigator({
    AppStack: {
        screen: AppStack
    }
}, {
    contentComponent: DrawerScreen
});

const RootNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: DrawerWrapAppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
));

export { RootNavigator };
