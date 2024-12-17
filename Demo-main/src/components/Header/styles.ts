//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container : {
        height : Sizes._50,
        backgroundColor : Colors.white,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : Sizes._20
    },

    titleContainer :{
        flex : 1,
        justifyContent : 'center',
        alignItems:'center'
    },

    headerTitle : {
        fontFamily: Fonts.Montserrat_Medium,
        fontSize :Sizes._18,
        color : Colors.black
    }
})