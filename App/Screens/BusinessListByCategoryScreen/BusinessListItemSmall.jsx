import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'


export default function BusinessListItemSmall({business}) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation('business-detail', {business:business})}>
        <Image source={{uri:business?.image[0]?.url}}
        style={styles.image}
        />
        <View style={styles.infoConatiner}>
            <Text style ={{fontSize:17, fontFamily:'outfit-medium'}}>{business?.name}</Text>
            <Text style={{fontSize:13, fontFamily:'outfit', color:Colors.GRAY}}>{business?.contactPerson}</Text>
            <Text style={{
                fontSize:13,
                fontFamily:'outfit',
                color:Colors.GRAY,
                marginTop:5,
                padding:3,
                color:Colors.PRIMARY,
                backgroundColor:Colors.PRIMARY_LIGHT,
                borderRadius:3,
                alignSelf:'flex-start',
                paddingHorizontal:10

            }}>
                {business?.category.name}
            </Text>
                
        </View>
    </TouchableOpacity>
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