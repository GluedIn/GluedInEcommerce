//Global imports
import { StyleSheet } from "react-native";

//File imports
import { Colors, Sizes } from "../../utils";
import { Fonts } from "../../assets";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.screenBgColor,
        padding: Sizes._20
    },

    bannerView: {
        height: Sizes._80,
        width: '100%',
        borderRadius: Sizes._10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        marginBottom: Sizes._20
    },

    bannerTitle: {
        fontFamily: Fonts.Montserrat_SemiBold,
        fontSize: Sizes._22,
        color: Colors.white
    },

    bannerSubTitle: {
        fontFamily: Fonts.Montserrat_Regular,
        fontSize: Sizes._16,
        color: "rgba(255, 255, 255, 0.8)",
        marginTop: Sizes._6
    }
})