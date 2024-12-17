//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    detailContainer : {
        backgroundColor : Colors.screenBgColor
    },

    productImage : {
        height : Sizes.FindSize(425),
        width : Sizes.width / 1.5,
        marginRight: Sizes._4
    },

    productDetailView : {
        padding : Sizes._20
    },

    titleContainer :{
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'flex-end'
    },

    productName : {
        fontFamily : Fonts.Montserrat_Bold,
        fontSize : Sizes._24,
        color : Colors.black
    },

    descriptionText : {
        fontFamily : Fonts.Montserrat_Regular,
        fontSize : Sizes._12,
        color : Colors.black,
        marginTop : Sizes._4
    },

    detail : {
        marginTop : Sizes._10,
        fontFamily : Fonts.Montserrat_Regular,
        fontSize : Sizes._12,
        color : Colors.black,
        lineHeight : Sizes._18
    },

    bottomContainer : {
        padding : Sizes._20,
        width : '100%',
        backgroundColor : Colors.white,
        position : 'absolute',
        bottom : 0
    },

    addToCartBtn : {
        height : Sizes._45,
        width:'100%',
        borderRadius : Sizes._45,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor : Colors.primary
    },

    btnText : {
        fontFamily : Fonts.Montserrat_Regular,
        fontSize : Sizes._13,
        color : Colors.white,
    }
})