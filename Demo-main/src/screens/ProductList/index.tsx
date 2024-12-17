//Global imports
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native'

//File imports
import styles from './styles'
import { Header, ProductCard } from '../../components';
import { Images } from '../../assets';
import { Sizes } from '../../utils';

const { container, titleContainer, titleText, listContainer } = styles;

const ProductList = () => {

    const [products, setProducts] = useState([
        { key: 1, title: 'Pullover', image: Images.accessories, price: 51, description: 'Mango' },
        { key: 2, title: 'Blouse', image: Images.clothes, price: 34, description: 'Dorothy Perkins' },
        { key: 3, title: 'T-shirt', image: Images.new, price: 12, description: 'LOST Ink' },
        { key: 4, title: 'Shirt', image: Images.shoes, price: 51, description: 'Topshop' },
    ])

    const renderProducts = ({ item, index }: { item: any, index: number }): JSX.Element => {
        return <ProductCard item={item} />
    }

    return (
        <View style={container}>
            <Header title='' />
            <View style={titleContainer}>
                <Text style={titleText}>Women's tops</Text>
            </View>
            <View style={listContainer}>
                <FlatList
                    data={products}
                    renderItem={renderProducts}
                    contentContainerStyle={{ padding: Sizes._20 }}
                />
            </View>
        </View>
    )
}

export default ProductList