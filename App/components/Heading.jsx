import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false }) {
  return (
    <View style= {styles.container}>
        <Text style={styles.heading}>
            {text}
        </Text>
        {isViewAll && <Text>VIew All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignitems:'center'
    },
    heading:{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10
    }
})