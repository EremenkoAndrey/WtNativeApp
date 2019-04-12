import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    block: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    avatarContainer: {
        marginRight: 10
    },
    avatar: {
        height: 60,
        width: 60
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    email: {
        color: '#8e8e93',
        fontSize: 16,
        lineHeight: 18
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20
    }
});
