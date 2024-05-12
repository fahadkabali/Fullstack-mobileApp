import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import PageHeading from '../../components/PageHeading'
import { Ionicons } from '@expo/vector-icons';


export default function BookingModal({hideModal}) {
  return (
    <View style={{padding:20}}>
        {/* <PageHeading title={'Booking'}/> */}
        <TouchableOpacity style={{display:'flex', flexDirection:'row' , alignItems:'center'}}
        onPress={()=> hideModal()}
        >
            <Ionicons name ="arrow-back-outline" size={30} color="black"/>
            <Text style={{fontSize:25, fontFamily:'outfit-medium'}} >Booking</Text>
        </TouchableOpacity> 
    </View>
  )
}