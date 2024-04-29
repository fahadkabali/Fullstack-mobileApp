import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessLIstItem({business}) {
  return (
    <View>
        <Image
        source={{uri:business?.images[0]?.url}}
        sytle={styles.image}
        />
        <View sytle={styles.infoContainer}>
            <Text style={styles.name}>{business?.name}</Text>
            <Text style={styles.person}>{business?.person}</Text>
            <Text style={styles.category}>{business?.sliderCategories.name}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    },
    infoContainer:{
        padding:7,
        display:'flex',
        gap:3
    },
    image:{
        width:160,
        height:100,
        borderRadius:10
    },
    name:{
        fontSize:17, 
        fontFamily:'outfit-medium'
    },
    person:{
        color:Colors.GRAY,
        fontFamily:'outfit',
        fontSize:13
    },
    category:{
        fontSize:10, 
        fontFamily:'outfit', 
        padding:3, 
        color:Colors.PRIMARY, 
        backgroundColor:Colors.PRIMARY_LIGHT, 
        borderRadius:3, 
        alignSelf:'flex-start',
        paddingHorizontal:7
        }
})