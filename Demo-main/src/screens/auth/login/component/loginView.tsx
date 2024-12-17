import React from "react";
import { Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { Button, Header, Input } from "../../../../components";
import { Colors, CommanStyles, Images } from "../../../../utils";


const loginView = (props: any) => {
  const { onLoginPress = () => { } } = props;
  const { onGoogleLoginPress = () => { } } = props;
  const { onFacebookLoginPress = () => { } } = props;

  
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title={""} />
      <View style={{flex:1}}>
        <Text style={CommanStyles.headTxt}>Login</Text>
        <View style={styles.inputsVw}>
          <Input
            placeHolder={"Email"}
            rightImg={true}
          />
          <Input
            placeHolder={"Password"}
          />
          <View style={styles.forgotVw}>
            <TouchableOpacity style={styles.rowVw}>
              <Text style={styles.forgotTxt}>Forgot Your Password?</Text>
              <Image
                source={Images.Right_Icon}
                style={{ width: 20, height: 20, marginLeft: 5, tintColor: Colors.primary }}
              />
            </TouchableOpacity>
          </View>
          <Button
            buttonTxt={"Login"}
            onPress={() => onLoginPress()}
          />
          {/* Google and Facebook Login Buttons */} 
          <View style={styles.socialLoginContainer}>
            <View style={styles.bottomVw}>
              <Text style={styles.txtVw}>Or Login with social account</Text>
            </View>
          </View>
          <View style={styles.socialLoginContainer}>
            <Button 
              buttonTxt={"  Sign in with Google  "} 
              onPress={() => onGoogleLoginPress()} 
              buttonStyle={styles.googleButton} 
              textStyle={styles.socialButtonText}
              icon={Images.GoogleImg} /> 

            <Button 
              buttonTxt={"  Sign in with Facebook  "} 
              onPress={() => onFacebookLoginPress()} 
              buttonStyle={styles.facebookButton} 
              textStyle={styles.socialButtonText} 
              icon={Images.FacebookImg} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default loginView;