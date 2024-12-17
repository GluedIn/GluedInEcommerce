//Global imports
import { FC, memo } from "react"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

//File imports
import styles from "./styles"
import { Sizes } from "../../utils";
import { Routes } from "../../navigation";

interface iProductCard {
    item : any
}

const { container, productImage, detailContainer, productTitle, productDescription, 
    productPrice
} = styles;

const ProductCard : FC<iProductCard> = ({
    item
}) => {
    const { navigate } = useNavigation<any>();
    
    return (
        <TouchableOpacity onPress={() => navigate(Routes.ProductDetail)} style={container}>
            <ImageBackground source={item.image} style={productImage} imageStyle={{ borderBottomLeftRadius : Sizes._10, borderTopLeftRadius: Sizes._10}} />
            <View style={detailContainer}>
                <Text style={productTitle}>{item.title}</Text>
                <Text style={productDescription}>{item.description}</Text>
                <Text style={productPrice}>{item.price}$</Text>
            </View>
        </TouchableOpacity>
    )
}

export default memo(ProductCard)