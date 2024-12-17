//Global imports
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native'

//File imports
import styles from './styles'
import { CategoryCard } from '../../components';
import { Images } from '../../assets/images';

const { container, bannerView, bannerTitle, bannerSubTitle } = styles;

const Women = () => {

    const [categories, setCategories] = useState([
        { key: 1, name: 'New', image: Images.new },
        { key: 2, name: 'Clothes', image: Images.clothes },
        { key: 3, name: 'Shoes', image: Images.shoes },
        { key: 4, name: 'Accesories', image: Images.accessories },
    ])

    const renderBanner = (): JSX.Element => {
        return (
            <View style={bannerView}>
                <Text style={bannerTitle}>SUMMER SALES</Text>
                <Text style={bannerSubTitle}>Up to 50% off</Text>
            </View>
        )
    }

    const renderCategories = ({ item, index }: { item: any, index: number }) => {
        return <CategoryCard item={item} />
    }

    return (
        <View style={container}>
            <FlatList
                data={categories}
                renderItem={renderCategories}
                ListHeaderComponent={renderBanner}
            />
        </View>
    )
}

export default Women