//Global imports
import React, { useEffect } from 'react';
import { FlatList, View, ImageBackground, Text, TouchableOpacity, ScrollView, NativeModules, NativeEventEmitter } from 'react-native'

//File imports
import styles from './styles'
import { Images } from '../../assets';
import { Button, Header } from "../../components";

//Component imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';


const { container, detailContainer, productImage, productDetailView, titleContainer,
    productName, descriptionText, detail, bottomContainer, addToCartBtn, btnText
} = styles;

var productId = 0
const ProductDetail = (props: any) => {
    const { bottom } = useSafeAreaInsets();

    const onGluedInLaunchPress = () => {
        GluedInBridge.launchSDK(() => {
            // if (error) {
            //     console.error(error);
            // } else {
            //     console.log(result);
            // }
        });
    };

    const { GluedInBridge } = NativeModules;
    const eventEmitter = new NativeEventEmitter(GluedInBridge);

    useEffect(() => {
        const eventListener = eventEmitter.addListener('onSignInClick', (event) => {
            console.log("here is message from callback ===>>>> ",event);
            //useNavigation.navigate('Login')
        });
        const eventSignupListener = eventEmitter.addListener('onSignUpClick', (event) => {
            console.log("here is message from callback ===>>>> ",event);
            //navigation.navigate('SignUp')
        });
        return () => {
            eventListener.remove();
            eventSignupListener.remove();
        };
    }, []);

    const renderProductImages = ({ item, index }: { item: any, index: number }): JSX.Element => {
        if (productId == 0) {
            return (
                <ImageBackground source={Images.new} style={productImage} />
            )
        } else {
            return (
                <ImageBackground source={Images.clothes} style={productImage} />
            )
        }
    }

    return (
        <View style={container}>
            <Header title='Short dress' />
            <ScrollView 
            bounces={false}
            contentContainerStyle={{paddingBottom: Sizes.FindSize(100)}} 
            style={detailContainer}>
                <FlatList
                    data={[{ key: '1' }, { key: '2' }]}
                    renderItem={renderProductImages}
                    horizontal
                />
                <View style={productDetailView}>
                    <View style={titleContainer}>
                        <View style={{ flex: 1 }}>
                            <Text style={productName}>H&M</Text>
                            <Text style={descriptionText}>Short black dress</Text>
                        </View>
                        <Text style={productName}>$19.99</Text>
                    </View>
                    <Text style={detail}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </ScrollView>
            <View>
            
            <View style={[bottomContainer,{ paddingBottom : bottom > 0 ? bottom : Sizes._20}]}>
            <Button style={addToCartBtn}
              buttonTxt={"  Launch GluedIn  "} 
              onPress={() => onGluedInLaunchPress()}  />
          </View>
                {/* <TouchableOpacity style={addToCartBtn}>
                    <Text style={btnText}>ADD TO CART</Text>
                </TouchableOpacity> */}
            </View>
            
        </View>
    )
}

export default ProductDetail