import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles'
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = RectButtonProps & {
  title: string
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const { title, ...rest } = props

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}
