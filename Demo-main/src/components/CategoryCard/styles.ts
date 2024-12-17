//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container : {
        width : '100%',
        flex: 1,
        height : Sizes._80,
        backgroundColor : Colors.white,
        borderRadius : Sizes._10,
        marginBottom: Sizes._20,
        flexDirection : 'row',
        alignItems:'center'
    },

    imageStyle :{
        height : '100%',
        width: '100%',
        flex: 1
    },

    nameContainer : {
        flex :1,
        paddingHorizontal: Sizes._20
    },

    categoryName : {
        fontFamily: Fonts.Montserrat_SemiBold,
        fontSize: Sizes._16,
        color : Colors.black
    }
})