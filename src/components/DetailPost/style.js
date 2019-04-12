import { StyleSheet } from 'react-native';
import { window } from '../../constants/Layout';

export default StyleSheet.create({
    block: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20
    },
    webView: {
        width: window.width,
        height: window.height,
        paddingLeft: 10
    }
});
