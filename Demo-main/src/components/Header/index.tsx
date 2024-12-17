//Global imports
import { FC, memo } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

//File imports
import styles from "./styles"
import { Colors, Sizes } from "../../utils";

interface iHeader {
    title: string
}

const { container, titleContainer, headerTitle } = styles;

const Header: FC<iHeader> = ({
    title
}) => {
    const { top } = useSafeAreaInsets();
    const { goBack } = useNavigation();

    return (
        <View style={[container, { marginTop: top }]}>
            <TouchableOpacity hitSlop={5} onPress={goBack}>
                <Feather name="chevron-left" size={Sizes._20} color={Colors.grey} />
            </TouchableOpacity>
            <View style={titleContainer}>
                <Text style={headerTitle}>{title}</Text>
            </View>
            <TouchableOpacity>
                <Feather name="search" size={Sizes._20} color={Colors.grey} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(Header)