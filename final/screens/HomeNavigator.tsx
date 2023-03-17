import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './Main'
import KFood from './KFood'
import BFood from './BFood'
import CFood from './CFood'
import JFood from './JFood'
import YFood from './YFood'
import EFood from './Efood'

const Stack = createStackNavigator()

export default function HomeNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="메뉴별 맛집" component={Main}/>
        <Stack.Screen name="한식" component={KFood}/>
        <Stack.Screen name="분식" component={BFood}/>
        <Stack.Screen name="중식" component={CFood}/>
        <Stack.Screen name="일식" component={JFood}/>
        <Stack.Screen name="양식" component={YFood}/>
        <Stack.Screen name="기타" component={EFood}/>
        </Stack.Navigator>
    )
}