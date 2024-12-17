import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const CommanStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headTxt: {
        fontSize: 30,
        color: Colors.black,
        fontWeight: '900',
        marginLeft: 16,
        marginTop: 10,
    },
})

export default CommanStyles;