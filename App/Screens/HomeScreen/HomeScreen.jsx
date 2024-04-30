import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header/Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'


export default function HomeScreen() {
  return (
    <View>
      {/* header */}
      <Header/>

      <View style={{padding:20}}> 
      {/* slider */}
        <Slider/>
        
        {/* categories */}
        <Categories/>

        {/* business list */}
        <BusinessList/>
      </View>
    </View>
  )
}