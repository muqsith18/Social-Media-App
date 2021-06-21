import React from 'react';
import {View,Text,Button,Image,StyleSheet, TouchableOpacity} from 'react-native'
import Onboarding from "react-native-onboarding-swiper";



const Skip = ({}) =>(
  <Button
    title='Skip'
    color='grey'
    
/>
)
const Next = ({...props}) =>(
  <Button
    title='Next'
    color='grey'
   
    {...props}
/>
)
const Done = ({...props}) =>(
  <TouchableOpacity
  style={{marginHorizontal:10}}
  {...props}
>
  <Text style={{fontSize:16}}>Done</Text>
</TouchableOpacity>
)

const Dots=({selected})=>{
  let backgroundColor;
  backgroundColor=selected?'rgba(0,0,0,0.8)':'rgba(0,0,0,0.8)';
  return(
    <View
    style= {{ 
      width:5,
      height:5,
      marginHorizantal:3,
      backgroundColor
    }
  }
    />
  )
}

const onBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={ Skip }
        NextButtonComponent={ Next }
        DoneButtonComponent={ Done }
        DotComponent={ Dots }
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={{uri:'https://5.imimg.com/data5/EM/AS/MY-1509478/social-media-integration-500x500.png'}}
            style={{width:150 ,height:200}}               
            />,
            title: 'Connect to the World',
            subtitle: 'A New way to connect with the world',
          },
          {
          backgroundColor: '#fff',
          image: <Image source={{uri:'https://landerapp.com/blog/wp-content/uploads/2018/01/Social-1-775x475-1.jpg'}}
           style={{width:150 ,height:200}}               
          />,
          title: 'Share your Favourites',
          subtitle: 'Share your thoughts with similar kind of people',
        },
        
        ]}
      />
    );
};


export default onBoardingScreen;

const styles =StyleSheet.create({
    container :{
        flex :1,
        alignItems:'center',
        justifyContent:'center'
    },
});
