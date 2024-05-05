import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessDetailScreen() {
  const param = useRouter().params
  const navigation = useNavigation()
  const [business, setBusiness] = useState(param.business)
  useEffect(()=>{
    // console.log(param?.business)
    // param && setBusiness(param.business)
  },[param])
  return (
    <View>
      <TouchableOpacity style={styles.backBtnContainer}
      onPress={()=> navigation.goBack()}
      >
        <Ionicons name='arrow-back-outline' size={30} color ='white'/>
      </TouchableOpacity>
      <Image source ={{uri:business?.images[0]?.url}}
      style={{width:'100%', height:300}}
      />
      <View>
        <Text>{business?.name}</Text>
        <View>
          <Text>{business?.contactPerson}</Text>
          <Text>{business?.category.name}</Text>
        </View>
          <Text>{business?.address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position:'absolute',
    top:50,
    left:10,
    zIndex:10,
    padding:10,
  }
})