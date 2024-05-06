import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'

export default function BusinessPhotos(busines) {
  return (
    <View>
        <Heading text={'Photos'}/>
        <FlatList
        data={busines.images}
        numColumns={2}
        renderItem={({item})=>(
            <Image source={{uri:item.url}}
                style={{width:'100%',flex:1, height:120,
                    borderRadius:15,
                    margin:7,
                }}
            />
        )}
        />

    </View>
  )
}