import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    containerHeader: {
        paddingTop: 70,
        alignItems: 'center',
    },

    container:{
        backgroundColor: '#05004e',
        height: '100%',
        padding: 20
    }, 
    title: {
        color: '#ffcccc',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    newGameButton:{
        backgroundColor:'#fb7777',
        borderRadius: 5,
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 18,
    },

    newGameText:{
        color: '#ffcccc',
        fontSize: 18,
        fontWeight: 'bold',
        
    },

    imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})