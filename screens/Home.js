import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useState } from 'react'

import { COLORS, NFTData } from '../constants'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components'

const Home = () => {
  return (
    <SafeAreaView stle= {{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View>
        <View>
        
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home