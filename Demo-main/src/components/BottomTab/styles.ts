//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    tabContainer :{
        height: Sizes.FindSize(60),
        backgroundColor: Colors.white,
        shadowColor : Colors.black,
        shadowOffset : { height: Sizes.FindSize(2), width: 0},
        shadowOpacity : 0.3,
        shadowRadius : Sizes._4,
        elevation :20
    },
    tabItemContainer: {
        height: Sizes.FindSize(56),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteTabContainer: {
        height: Sizes.FindSize(56),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },

    singleTabContainer : { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },

    labelStyle :{
        fontFamily : Fonts.Montserrat_Regular,
        fontSize : Sizes._12
    }
})