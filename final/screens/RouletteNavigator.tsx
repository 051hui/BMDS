import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import chooseRoulette from './chooseRoulette'
import Roulette1 from './Roulette'
import Roulette2 from './Roulette2'
import Roulette3 from './Roulette3'

const Stack = createStackNavigator()

export default function RouletteNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="룰렛정하기" component={chooseRoulette}/>
        <Stack.Screen name="룰렛1" component={Roulette1}/>
        <Stack.Screen name="룰렛2" component={Roulette2}/>
        <Stack.Screen name="룰렛3" component={Roulette3}/>
        </Stack.Navigator>
    )
}