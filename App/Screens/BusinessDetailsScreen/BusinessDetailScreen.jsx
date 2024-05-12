import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BusinessAbout from './BusinessAbout';
import BookingModal from './BookingModal';

export default function BusinessDetailScreen() {
  const param = useRouter().params
  const navigation = useNavigation()
  const [business, setBusiness] = useState(param.business)
  const [showModal, setShowModal] = useState(false)
  useEffect(()=>{
    // console.log(param?.business)
    // param && setBusiness(param.business)
  },[])
  return business && (
    <View>
      <ScrollView style={{height:'90%'}}>
        <TouchableOpacity style={styles.backBtnContainer}
        onPress={()=> navigation.goBack()}
        >
          <Ionicons name='arrow-back-outline' size={30} color ='white'/>
        </TouchableOpacity>
        <Image source ={{uri:business?.images[0]?.url}}
        style={{width:'100%', height:300}}
        />
        <View style={styles.infoContainer}>
          <Text sytle={{fontFamily:'outfit-bold', fontSIze:25}}>{business?.name}</Text>
          <View style={styles.subContainer}>
            <Text style={{fontFamily:'outfit-medium', color:Colors.PRIMARY, fontSize:20}}>{business?.contactPerson} 🌟</Text>
            <Text style={{colors:Colors.PRIMARY, backgroundColor:Colors.PRIMARY_LIGHT, padding:5, borderRadius:5, fontSize:14}}>{business?.category.name}</Text>
          </View>
            <Text style={{fontSize:17, fontFamily:'outfit', color:Colors.GRAY}}>
              <Ionicons name='ios-location-sharp' size={25} color={Colors.PRIMARY}/>
              {business?.address}</Text>
              <View sytle={{borderWidth:0.4, borderColor:Colors.GRAY, marginTop:20, marginBottom:20}}></View>
        </View>
          <BusinessAbout business={business}/>
        <View sytle={{borderWidth:0.4, borderColor:Colors.GRAY, marginTop:20, marginBottom:20}}></View>
          <BusinessPhotos business={business}/>
      </ScrollView>
      <View style={{display:'flex', flexDirection:'row',margin:8, gap:5}}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color:Colors.PRIMARY,
            fontSize:18
          }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn}
        onPress={()=>setShowModal(true)}
        >
          <Text style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color:Colors.WHITE,
            fontSize:18
          }}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <Modal
      animationType='slide'
      visible={showModal}
      >
        {/* <Text>Booking</Text> */}
        <BookingModal hideModal={() => setShowModal(false)}/>
      </Modal>
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
  },
  infoContainer:{
    padding:20,
    display:'flex',
    gap:7
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    alignItems:'center',
  },
  messageBtn:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    textAlign:'center',
    flex:1
  },
  bookingBtn:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    textAlign:'center',
    flex:1
  }

})