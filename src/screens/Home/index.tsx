import React from 'react'
import { View } from 'react-native'
import { Profile, ButtonAdd } from '../../components'
import { styles } from './styles'

export const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  )
}
