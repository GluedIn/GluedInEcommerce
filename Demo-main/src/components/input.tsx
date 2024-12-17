import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors, Images } from "../utils";
import { useState } from "react";

const input = (props: any) => {
    const { placeHolder = "PlaceHolder", rightImg = false } = props
    const [onFocus, setOnFocus] = useState(false);
    const [val, setVal] = useState("");

    return (
        <View style={styles.container}>
            {onFocus || val ? <Text style={styles.topTxt}>{placeHolder}</Text> : null}
            <View style={{ flexDirection: 'row', }}>
                <TextInput
                    style={styles.inputVw}
                    onFocus={() => setOnFocus(true)}
                    onBlur={() => setOnFocus(false)}
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.grey}
                    value={val}
                    onChangeText={(txt: any) => { setVal(txt) }}
                />
                {rightImg && val &&
                    <Image
                        source={Images.Right_Checked}
                        style={{ width: 20, height: 20 }}
                    />
                }
            </View>
        </View>
    )
}
export default input;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 5,
        marginTop: 12,
        height: 60,
        justifyContent: 'center'
    },
    inputVw: {
        width: "90%",
        fontSize: 16,
        color: Colors.black,
        left: -5,
        bottom: 4,
    },
    topTxt: {
        fontSize: 12,
        color: Colors.grey,
        paddingTop: 8,
    }

})