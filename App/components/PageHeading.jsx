import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function PageHeading({title}) {
  return (
    <TouchableOpacity style={{display:'flex', flexDirection:'row' , alignItems:'center'}}
        onPress={()=> navigation.goBack()}
        >
            <Ionicons name ="arrow-back-outline" size={30} color="black"/>
            <Text style={{fontSize:25, fontFamily:'outfit-medium'}} >{title}</Text>
    </TouchableOpacity>  
  )
}