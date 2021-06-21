import React from 'react'
import { View, Text,Image, Button,StyleSheet } from 'react-native'
import LoginScreen from './LoginScreen';

 const WelcomeScreen = ({navigation,route}) => {
     const {name,email,photoUrl}=route.params;
    // const AvatarImg =photoUrl ? { uri:photoUrl}: require('./../assets/favicon.png')
    return (
       <View style={styles.container}>
           <Text>
               {name}
           </Text>
           <Text>
               {email}
           </Text>
           <Image source={{uri:photoUrl ,height:100 ,width:100}} />
           < View style={[styles.buttonContainer]}>
            <Button  title={'Logout'} onPress={()=>{navigation.navigate('Login')}}></Button>
            </View>
       </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container:{
      marginVertical:'40%',
      justifyContent:'space-around',
      flex:1,
    alignItems:'center'

  },
 
});