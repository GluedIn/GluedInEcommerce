import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Colors } from "../utils";

const button = (props: any) => {
    const { buttonTxt = "Button", onPress = () => { } } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <Text style={styles.txtVw}>{buttonTxt}</Text>
        </TouchableOpacity>
    )
}

export default button;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.primary,
        borderRadius: 30,
        height: 55,
        marginTop: 30,
    },
    txtVw: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '500',
    }
})