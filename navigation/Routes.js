import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import AuthStack from './AuthStack'

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default Routes;