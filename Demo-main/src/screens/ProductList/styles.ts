//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : Colors.white
    },

    titleContainer :{
        height: Sizes._40,
        width : '100%',
        paddingHorizontal: Sizes._20,
        backgroundColor : Colors.white
    },

    titleText : {
        fontFamily: Fonts.Montserrat_SemiBold,
        fontSize : Sizes._24,
        color : Colors.black
    },

    listContainer : {
        flex: 1,
        backgroundColor : Colors.screenBgColor
    }
})