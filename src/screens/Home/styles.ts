import { StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + 39 : 26,
    marginBottom: 42
  },
  content: {
    marginTop: 42
  },
  matches: {
    height: '100%',
    marginTop: 24,
    marginLeft: 24
  }
})
