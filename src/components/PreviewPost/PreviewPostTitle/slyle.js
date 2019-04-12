import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    block: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        marginBottom: 10
    },
    more: {},
    userCard: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10
    },
    avatar: {
        width: 40,
        height: 40
    },
    avatarContainer: {
        paddingRight: 10
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    date: {
        color: '#8e8e93',
        fontSize: 13,
        lineHeight: 15
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 16
    }
});
