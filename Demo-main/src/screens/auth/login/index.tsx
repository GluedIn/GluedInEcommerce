import React from "react";
import LoginView from "./component/loginView";

const Login = ({ navigation }: any) => {
    return (
        <LoginView
            onLoginPress={() => navigation.navigate("DashBoard")}
            onGoogleLoginPress={() => navigation.navigate("DashBoard")}
            onFacebookLoginPress={() => navigation.navigate("DashBoard")}
        />
    )
}

export default Login;