import React from 'react'
import { View, Text } from 'react-native'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'
import { GuildIcon } from '../GuildIcon'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/styles/theme'
import { categories } from '../../utils/categories'

export type Guild = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

export type AppointmentInfoProps = {
  id: string
  guild: Guild
  category: string
  date: string
  description: string
}

type AppointmentProps =  RectButtonProps & {
  data: AppointmentInfoProps
}

export const Appointment = ({ data, ...rest }: AppointmentProps) => {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{ data.guild.name }</Text>
            <Text style={styles.category}>{ category.title }</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{ data.date }</Text>
            </View>
            <View style={styles.playerInfo}>
              <PlayerSvg fill={ owner ? primary : on } />

              <Text style={[styles.player, { color: owner ? primary: on }]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  )
}
