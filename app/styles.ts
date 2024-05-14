import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerHeader: {
        paddingTop: 70,
        alignItems: 'center',
    },

    container:{
        backgroundColor: '#606470',
        height: '100%',
        padding: 20
    }, 
    title: {
        color: '#f7f7f7',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    newGameButton:{
        backgroundColor:'#93deff',
        borderRadius: 5,
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 18,
    },

    newGameText:{
        color: '#323643',
        fontSize: 18,
        fontWeight: 'bold',
        
    },

    imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})