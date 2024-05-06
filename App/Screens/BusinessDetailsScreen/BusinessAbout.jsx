import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function BusinessAbout(business) {
    const [isReadMore, setIsReadMOre] = useState(false)
  return (
    <View>
        <Heading text={'About.Me'}/>
        <Text style={{fontFamily:'outfit', lineHeight:28, color:Colors.GRAY,
         fontSize:16}} numberOfLines={isReadMore?20:4}>
          {business.about}
          </Text>
        <TouchableOpacity onPress={()=>setIsReadMOre(!isReadMore)}>
        <Text style={{color:Colors.PRIMARY, fontSize:16, fontFamily:'outfit'}}>{isReadMore?'Read Less':'Read More'}</Text>
        </TouchableOpacity>
      </View>
  )
}