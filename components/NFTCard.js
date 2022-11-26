import { View, Text, Image, Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS, assets} from '../constants'
import { CircleButton, RectButton } from './Button.js'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'
import { TouchableOpacity } from 'react-native-gesture-handler'


const NFTCard = ({ data }) => {

  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
    <View style={{ width:'100%', height: 250 }}>
      <Image 
          source = {data.image}
          resizeMode = "cover"
          style = {{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <CircleButton theimageUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />
      <View style={{ width:'100%', padding:SIZES.font }}>
          <TouchableOpacity onPress={() => navigation.navigate("Details", { data })}
          style={{margin:0, padding:0}}>
          <NFTTitle 
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large + 1.25}
            subTitleSize={SIZES.small}            
          /></TouchableOpacity>
          <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <EthPrice price={data.price}/>
            <RectButton minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
      </View>
    </View>
  )
}

export default NFTCard