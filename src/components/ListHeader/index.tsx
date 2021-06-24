import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type ListHeaderProps = {
  title: string
  subtitle: string
}

export const ListHeader = (props: ListHeaderProps) => {
  const { subtitle, title } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
