import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import React, { useState } from 'react';
import {
  Alert, Image, ScrollView, StyleSheet, Text, View
} from 'react-native';
import SocialButton from '../Components/SocialButton';


const LoginScreen = ({ navigation }) => {

  const [googlesubmitting, setGoogleSubmitting] = useState(false);
  const fbLogin = async () => {

    try {
      await Facebook.initializeAsync({
        appId: '528444711642771',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        console.log(token);
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`);
        const result = await response.json();
        const { email, name, picture } = result
        console.log(result)
        navigation.navigate('Welcome', { email, name, photoUrl: picture.data.url })
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

  }
  const googleLogin = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: '833017605849-4j4qrk5d99odadupruk4r9kl1mj57f8t.apps.googleusercontent.com',
      androidClientId: '833017605849-779ih7ft18uck9cs3m8vcnsod4j4p4uu.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    };
    Google
      .logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == 'success') {
          const { email, name, photoUrl } = user;
          // handleMessage('Google signin successful','SUCCESS');
          navigation.navigate('Welcome', { email, name, photoUrl })
        } else {
          Alert.alert('Google signin was cancelled');
        }
        setGoogleSubmitting(false);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('An error occured .Check your network and try again')
        setGoogleSubmitting(false);
      })
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'data:image/png;base64,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' }}
        style={styles.logo}
      />
      <Text style={styles.text}>Social Media Integration</Text>


      <View>
        <SocialButton

          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => fbLogin()}

        />

        <SocialButton

          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => googleLogin()}
        />
      </View>

    </ScrollView>
  );

}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',

  },
  text: {


    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },



});