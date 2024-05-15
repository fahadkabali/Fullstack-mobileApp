import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:business?.image[0]?.url}}
        style={styles.image}
        />
        <View style={styles.infoConatiner}>
            <Text style ={{fontSize:17, fontFamily:'outfit-medium'}}>{business?.name}</Text>
            <Text style={{fontSize:13, fontFamily:'outfit', color:Colors.GRAY}}>{business?.contactPerson}</Text>
            <Text style={[{
                padding:5, borderRadius:5, fontSize:14,alignSelf:'flex-start'},
                booking?.bookingStatus=='Completed'?
                {backgroundColor:Colors.LIGHT_GREEN, color:Colors.GREEN}: 
                booking.bookingStatus=='Canceled'?
                {backgroundColor:Colors.LIGHT_RED, color: Colors.RED}:
                {color:Colors.PRIMARY,
                    backgroundColor:Colors.PRIMARY_LIGHT
                }]}>{booking?.bookingStatus}</Text>

                {booking?.id?
                <Text style={{fontFamily:'outfit',
                    color:Colors.GRAY,fontSize:16
                }}>
                    <Ionicons name ='ios-location-sharp' size={20}
                    color={Colors.PRIMARY}/>
                </Text>:NULL}
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{

    },
    image:{

    },
    infoConatiner:{

    }
})