//Global imports
import React, { FC, memo, useEffect, useState } from "react";
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

//File imports
import styles from "./styles";
import { Routes } from "../../navigation";
import { Colors, Sizes } from "../../utils";

//Component imports
import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";

export interface iBottomTab {
    state: TabNavigationState<ParamListBase>;
    descriptors: any;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    insets: EdgeInsets;
}

const { tabContainer, tabItemContainer, whiteTabContainer, singleTabContainer, labelStyle } = styles;

const BottomTab: FC<iBottomTab> = ({ state, descriptors, navigation }) => {
    const { bottom } = useSafeAreaInsets();
    const [showTab, setTabVisible] = useState<boolean>(true);

    useEffect(() => {
        const listener1 = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        const listener2 = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        return () => {
            listener1.remove();
            listener2.remove();
        };
    }, [])

    const _keyboardDidShow = () => {
        setTabVisible(false);
    };

    const _keyboardDidHide = () => {
        setTabVisible(true);
    };

    return !showTab ? null : (
        <View style={[tabContainer, { height: bottom > 0 ? Sizes.FindSize(70) : Sizes.FindSize(60) }]}>
            <View style={whiteTabContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event: any = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const renderIcon = (routeName: any, isFocused: boolean) => {
                        switch (routeName) {
                            case Routes.HomeStack: {
                                return <AntDesign name={'home'} size={Sizes._18} color={isFocused ? Colors.primary : Colors.grey } />
                            }

                            case Routes.ShopStack: {
                                return <AntDesign name={'shoppingcart'} size={Sizes._18} color={isFocused ? Colors.primary : Colors.grey }/>
                            }

                            case Routes.BagStack: {
                                return <Feather name={"shopping-bag"} size={Sizes._18} color={isFocused ? Colors.primary : Colors.grey } />
                            }

                            case Routes.FavoritesStack: {
                                return <AntDesign name={"hearto"} size={Sizes._18} color={isFocused ? Colors.primary : Colors.grey }/>
                            }

                            case Routes.ProfilesStack: {
                                return <AntDesign name={"profile"} size={Sizes._18} color={isFocused ? Colors.primary : Colors.grey }/>
                            }
                        }
                    }

                    const renderTitle = (routeName: any, isFocused: boolean) => {
                        let color = isFocused ? Colors.primary : Colors.grey;

                        switch (routeName) {
                            case Routes.HomeStack: {
                                return <Text style={[labelStyle, { color }]}>Home</Text>
                            }

                            case Routes.ShopStack: {
                                return <Text style={[labelStyle, { color }]}>Shop</Text>
                            }

                            case Routes.BagStack: {
                                return <Text style={[labelStyle, { color }]}>Bag</Text>
                            }

                            case Routes.FavoritesStack: {
                                return <Text style={[labelStyle, { color }]}>Favorites</Text>
                            }

                            case Routes.ProfilesStack: {
                                return <Text style={[labelStyle, { color }]}>Profile</Text>
                            }
                        }
                    }

                    return (
                        <View key={route.name} style={{ flex: 1 }}>
                            <TouchableOpacity style={tabItemContainer} onLongPress={onLongPress} onPress={onPress}>
                                <View
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    style={singleTabContainer}
                                >
                                    {renderIcon(route.name, isFocused)}
                                    <View style={{ marginTop: Sizes._4 }}>
                                        {renderTitle(route.name, isFocused)}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </View>
    )
}

export default memo(BottomTab)