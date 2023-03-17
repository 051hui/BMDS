import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DarkMode from './DarkMode'
import RouletteNavigator from './RouletteNavigator'

const Tab = createBottomTabNavigator()

import type {RouteProp, ParamListBase} from '@react-navigation/native'
type TabBarIconProps = {focused:boolean; color:string; size:number}

const screenOptions = ({route}:{route: RouteProp<ParamListBase, string>}) => {
    return{
        tabBarIcon: ({focused, color, size}: TabBarIconProps)=>{
            const {name} = route
            switch (name) {
                case '설정' :
                    return <Icon name="cog" size={size} color={color}/>
                case '룰렛' :
                    return <Icon name="alpha-r-circle-outline" size={size} color={color}/>
            }
            return <Icon name="home" size={size} color={color}/>
        }
    }
}
export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="메뉴" component={HomeNavigator} options={{tabBarLabel:'Home'}}/>
        <Tab.Screen name="룰렛" component={RouletteNavigator} options={{tabBarLabel:'Roulette'}}/>
        <Tab.Screen name="설정" component={DarkMode} options={{tabBarLabel:'Settings'}}/>
        </Tab.Navigator>
    )
}