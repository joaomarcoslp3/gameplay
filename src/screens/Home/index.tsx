import React, { useState } from 'react'
import { View } from 'react-native'
import { Profile, ButtonAdd, CategorySelect } from '../../components'
import { styles } from './styles'

export const Home = () => {
  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

        <View style={styles.content}>
          
        </View>
      </View>
    </View>
  )
}
