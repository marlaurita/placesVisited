import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';
import TabNavigator from './tab';


const AppNavigator = ()=> {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;