import { StyleSheet } from 'react-native';
import { window } from '../../constants/Layout';
import colors from '../../constants/Colors';
import fonts from '../../constants/Fonts';

export default StyleSheet.create({
    block: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    title: {
        fontSize: 18,
        color: '#08525d',
        fontWeight: 'bold'
    },
    titleContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    instruments: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        width: window.width - 40
    },
    instrument: {
        marginRight: 10
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    actionsColumn: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    actionsColumnBordered: {
        borderRightWidth: 1,
        borderRightColor: '#c4c4c4'
    },
    htmlFont: {
        fontSize: fonts.baseFontSize,
        fontFamily: fonts.baseFontFamily,
        lineHeight: fonts.baselineHeight,
        color: colors.baseTextColor
    }
});
