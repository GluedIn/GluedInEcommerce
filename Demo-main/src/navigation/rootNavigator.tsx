//Global imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//File imports
import { Routes } from "./routes";
import * as screens from '../screens'
import { Colors, Sizes } from "../utils";
import { Fonts } from "../assets";

//Component imports
import { CustomTab } from "../components";
import { View } from "react-native";
import Login from "../screens/auth/login";

const RootStack = createStackNavigator();
const BottomTabStack = createBottomTabNavigator();
const RootHomeStack = createStackNavigator();
const RootShopStack = createStackNavigator();
const RootBagStack = createStackNavigator();
const RootFavoritesStack = createStackNavigator();
const RootProfileStack = createStackNavigator();
const TopTabStack = createMaterialTopTabNavigator();

export const TopTab = () => {
    return (
        <TopTabStack.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: Colors.white },
                tabBarIndicatorContainerStyle: { borderBottomColor: Colors.primary },
                tabBarLabelStyle: { fontSize: Sizes._14, fontFamily: Fonts.Montserrat_Regular },
            }}
        >
            <TopTabStack.Screen name={Routes.Women} component={screens.Women} />
            <TopTabStack.Screen name={Routes.Men} component={screens.Men} />
            <TopTabStack.Screen name={Routes.Kids} component={screens.Kids} />
        </TopTabStack.Navigator>
    );
}

const RootHome = () => {
    return (
        <RootHomeStack.Navigator screenOptions={{ headerShown: false }}>
            <RootHomeStack.Screen name={Routes.Home} component={screens.Home} />
        </RootHomeStack.Navigator>
    )
}

const RootShop = () => {
    return (
        <RootShopStack.Navigator screenOptions={{ headerShown: false }}>
            <RootShopStack.Screen name={Routes.Categories} component={screens.Categories} />
            <RootShopStack.Screen name={Routes.ProductList} component={screens.ProductList} />
        </RootShopStack.Navigator>
    )
}

const RootBag = () => {
    return (
        <RootBagStack.Navigator screenOptions={{ headerShown: false }}>
            <RootBagStack.Screen name={Routes.Bag} component={screens.Bag} />
        </RootBagStack.Navigator>
    )
}

const RootFavorites = () => {
    return (
        <RootFavoritesStack.Navigator screenOptions={{ headerShown: false }}>
            <RootFavoritesStack.Screen name={Routes.Favorites} component={screens.Favorites} />
        </RootFavoritesStack.Navigator>
    )
}

const RootProfile = () => {
    return (
        <RootProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <RootProfileStack.Screen name={Routes.Profiles} component={screens.Profiles} />
        </RootProfileStack.Navigator>
    )
}

const BottomTab = () => {
    return (
        <BottomTabStack.Navigator tabBar={(props) => <CustomTab {...props} />} screenOptions={{ headerShown: false }}>
            <BottomTabStack.Screen name={Routes.HomeStack} component={RootHome} />
            <BottomTabStack.Screen name={Routes.ShopStack} component={RootShop} />
            <BottomTabStack.Screen name={Routes.BagStack} component={RootBag} />
            <BottomTabStack.Screen name={Routes.FavoritesStack} component={RootFavorites} />
            <BottomTabStack.Screen name={Routes.ProfilesStack} component={RootProfile} />
        </BottomTabStack.Navigator>
    );
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={Routes.Login}>
                 <RootStack.Screen name={Routes.Login} component={screens.Login} />
                <RootStack.Screen name="DashBoard" component={BottomTab} />
                <RootStack.Screen name={Routes.ProductDetail} component={screens.ProductDetail} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
    // return (
    //     <NavigationContainer>
    //       <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    //         <RootStack.Screen name="Login" component={Login} />
    //         <RootStack.Screen name="DashBoard" component={BottomTab} />
    //         <RootStack.Screen name={Routes.ProductDetail} component={screens.ProductDetail} />
    //       </RootStack.Navigator>
    //     </NavigationContainer>
    //   )
}

export default RootNavigator;