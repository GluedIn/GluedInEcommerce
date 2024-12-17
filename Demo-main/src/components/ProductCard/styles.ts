//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container : {
        width : '100%',
        height : Sizes.FindSize(100),
        flexDirection : 'row',
        borderRadius : Sizes._10,
        alignItems : 'flex-start',
        marginBottom : Sizes._20,
        backgroundColor : Colors.white
    },

    productImage : {
        height : '100%',
        width : Sizes.FindSize(100),
    },

    detailContainer : {
        flex: 1,
        padding : Sizes._10
    },

    productTitle :{
        fontFamily : Fonts.Montserrat_SemiBold,
        color : Colors.black,
        fontSize : Sizes._16
    },

    productDescription : {
        fontFamily : Fonts.Montserrat_Regular,
        color : Colors.grey,
        fontSize : Sizes._12,
        marginTop: Sizes._4
    },

    productPrice :{
        fontFamily : Fonts.Montserrat_Regular,
        color : Colors.black,
        fontSize : Sizes._12,
        marginTop: Sizes._4
    }
})