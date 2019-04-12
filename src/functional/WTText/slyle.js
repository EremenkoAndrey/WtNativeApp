import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import fonts from '../../constants/Fonts';

export default StyleSheet.create({
    textStyle: {
        fontSize: fonts.baseFontSize,
        fontFamily: fonts.baseFontFamily,
        lineHeight: fonts.baselineHeight,
        color: colors.baseTextColor
    }
});
