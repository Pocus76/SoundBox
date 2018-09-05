import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        paddingTop: 40,
        backgroundColor: 'red',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

})