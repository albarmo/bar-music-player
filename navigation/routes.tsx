import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

import React from 'react'
import { CustomBottomTabBar } from '../components/CustomBottomBar'
import HomeScreenX from '../screens/HomeScreenX'
import PlayerModal from '../screens/PlayerModal'

export enum Routes {
  ROOT = 'root',
  PLAYER = 'player',
  HOME = 'home',
}

export type RootStackParamList = {
  [Routes.ROOT]: undefined
  [Routes.PLAYER]: { index: number; position?: number }
  [Routes.HOME]: undefined
}

export type RootStackScreenProps<T extends Routes> = NativeStackScreenProps<
  RootStackParamList,
  T
>

const RootStack = createNativeStackNavigator<RootStackParamList>()
const TabStack = createBottomTabNavigator<RootStackParamList>()

const TabNavigator = () => {
  return (
    <TabStack.Navigator tabBar={CustomBottomTabBar}>
      <TabStack.Screen
        component={HomeScreenX}
        name={Routes.HOME}
        options={{
          headerTitle: 'Home',
          title: 'Home',
        }}
      />
    </TabStack.Navigator>
  )
}

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Routes.ROOT}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={Routes.PLAYER}
        component={PlayerModal}
        options={{ presentation: 'modal' }}
      />
    </RootStack.Navigator>
  )
}
