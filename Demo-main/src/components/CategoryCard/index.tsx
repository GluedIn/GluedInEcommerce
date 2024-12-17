//Global imports
import { FC, memo } from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//File imports
import styles from "./styles";
import { Sizes } from "../../utils";
import { Routes } from "../../navigation";

interface iCategoryCard { item: any }

const { container, imageStyle, nameContainer, categoryName } = styles;

const CategoryCard: FC<iCategoryCard> = ({ item }) => {
    const { navigate } = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigate(Routes.ShopStack, { screen: Routes.ProductList })} style={container}>
            <View style={nameContainer}>
                <Text style={categoryName}>{item.name}</Text>
            </View>
            <ImageBackground source={item.image} style={imageStyle} imageStyle={{ borderTopRightRadius: Sizes._10, borderBottomRightRadius: Sizes._10 }} />
        </TouchableOpacity>
    )
}

export default memo(CategoryCard);