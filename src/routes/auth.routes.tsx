import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens'
import { SignIn } from '../screens'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator headerMode='none' screenOptions={{
      cardStyle: {
        backgroundColor: 'transparent'
      }
    }}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}
