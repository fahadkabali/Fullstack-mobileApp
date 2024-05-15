import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business, booking}) {
    const navigation = useNavigation
  return (
    <TouchableOpacity style={styles.container} onPress ={()=>navigation.push('business-detail', 
        {
            business:business
        }
    )}> 
        <Image source ={{uri:business?.images[0]?.url}}
        style={StyleSheet.image} 
        />
        <View style={styles.subContainer}>
            <Text style={{fontFamily:'outfit', color:Colors.GRAY, fontSize:15}}>{business.contactPerson}</Text>
            <Text style={{fontFamily:'outfit-bold', fontSize:19}}>{business.name}</Text>
            <Text style ={{fontFamily:'outfit', color:Colors.GRAY, fontSize:16}}>
                <AntDesign name ='calendar' size={20} color={Colors.PRIMARY} style={{marginRight:15}}/>
                {business.address}</Text>
                {booking?.id?<Text>{booking.date}</Text>:null}
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10

    },
    subContainer:{
        display:'flex',
        gap:7
    },
    image:{
        width:100,
        height:100,
        borderRadius:15

    }
})