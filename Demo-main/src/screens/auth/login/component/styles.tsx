import { StyleSheet } from "react-native";
import { Colors } from "../../../../utils";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    inputsVw: {
        marginTop: 45,
        paddingHorizontal: 20
    },
    forgotVw: {
        marginTop: 12,
        alignSelf: 'flex-end',
    },
    rowVw: {
        flexDirection: 'row',
        alignItems: "center",
    },
    forgotTxt: {
        fontSize: 14,
        color: Colors.black,
        fontWeight: "500",
    },
    bottomVw: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 12,
        alignSelf: 'center'
    },
    txtVw: {
        fontSize: 12,
        color: Colors.black,
        fontWeight: '500'
    },
    // ...other styles 
    socialLoginContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, },

    googleButton: { 
        backgroundColor: '#db4a39', // Google red 
        flex: 1, 
        marginRight: 5, 
        flexDirection: 'row', 
        alignItems: 'center', }, 
    facebookButton: { 
        backgroundColor: '#3b5998', // Facebook blue 
        flex: 1, 
        marginLeft: 5, 
        flexDirection: 'row',
        alignItems: 'center', }, 
    socialButtonText: { 
        color: '#fff', 
        marginLeft: 10, },

})

export default styles;