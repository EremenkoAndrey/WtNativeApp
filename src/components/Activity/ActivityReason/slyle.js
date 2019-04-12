import { StyleSheet } from 'react-native';
import colors from '../../../constants/Colors';


export default StyleSheet.create({
    baseBlock: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    coloredBlock: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2b78e4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        color: '#6d6d72',
        fontSize: 13,
        lineHeight: 15
    },
    coloredText: {
        color: '#FFFFFF',
        fontSize: 13,
        lineHeight: 15,
    },
    coloredTextBold: {
        fontWeight: 'bold'
    },
    link: {
        color: colors.linkColor
    }
});
