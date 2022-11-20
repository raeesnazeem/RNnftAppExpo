import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useState } from 'react'

import { COLORS, NFTData } from '../constants'

const Home = () => {
  return (
    <SafeAreaView stle= {{ flex: 1 }}>
      <View>
        <Text>Im the Vaavu and this is my Mottas home Yay!</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home