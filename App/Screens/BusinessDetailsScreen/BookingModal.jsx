import { View, Text , TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';



export default function BookingModal({businessId,hideModal}) {

    const [selectedTime, setSelectedTime] = useState()
    const [timeList, setTimeList] = useState()
    const [selectedDate, setSelectedDate] = useState()
    const [note, setNote]= useState()
    const {user} = useUser()
    useEffect(()=>{
        getTime()
    },[])
    const getTime = () =>{
        const timeList = []
        for(let i=8; i<=12;i++){
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i =1; i<=7;i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList)
    }
    const createNewBooking =() =>{
        if(!selectedTime || !selectedDate){
            ToastAndroid.show('Please select date and time', ToastAndroid.LONG)
            return
        }
        const data={
            userName:user?.fullName,
            userEmail:user?.primaryEmailAddress.emailAddress,
            date: moment(selectedDate).format('DD-MMM-yyyy'),
            time:selectedTime,
            note:note,
            businessId:businessId
        }
        GlobalApi.createBooking(data).then(resp=>{
            console.log("Resp", resp)
            ToastAndroid.show('Booking Created Successfully!', ToastAndroid.LONG)
            hideModal()
        })
    }
  return (
    <ScrollView>
        <KeyboardAvoidingView style={{padding:20}}>
            {/* <PageHeading title={'Booking'}/> */}
            <TouchableOpacity style={{display:'flex', flexDirection:'row' , alignItems:'center' , marginBottom:20}}
            onPress={()=> hideModal()}
            >
                <Ionicons name ="arrow-back-outline" size={30} color="black"/>
                <Text style={{fontSize:25, fontFamily:'outfit-medium'}} >Booking</Text>
            </TouchableOpacity> 
            {/* Calender Selection */}
            <Heading text={'Select Date'}/>
            <View style={styles.calendarContainer}>
                <CalendarPicker onDateChange={setSelectedDate} 
                width={340}
                minDate={Date.now()}
                todayBackgroundColor={Colors.BLACK}
                todayTextStyle={{color:Colors.WHITE}}
                selectedDayColor={Colors.PRIMARY}
                selectedDayTextColor={Colors.WHITE}
                />
            </View>
            {/* time Selection section */}
            <View style={{marginTop:20}}>
                <Heading text={'Select Time Slot'}/>
            <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                    <TouchableOpacity style={{marginRight:10}}
                    onPress={()=>setSelectedTime(item.time)}
                    >
                        <Text 
                        style={[selectedTime==item.time?
                            styles.unselectedtime:styles.unselectedtime]}>
                                {item.time}
                        </Text>
                    </TouchableOpacity>
            )}
            /> 
            </View>
            {/* Note Section */}
            <View style={{paddingTop:20}}>
                <Heading text={'Any suggestion Note'}/>
                <TextInput 
                placeholder='Note' 
                numberOfLines={4} multiline={true}
                style={styles.textArea}
                onChange={(text)=>setNote(text)}
                />
            </View>
            {/* confirmation button */}
            <TouchableOpacity style={{marginTop:15}}
            onPress={()=>createNewBooking}
            >
                <Text style={styles.confirmbtn}>Confirm & Book</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    calendarContainer:{
        backgroundColor:Colors.PRIMARY,
        padding:20,
        borderRadius:15
    },
    selectedtime:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        marginRight:10,
        paddingHorizontal:10,
        backgroundColor:Colors.WHITE,
        color:Colors.PRIMARY,
        justifyContent:'center',
        alignItems:'center'
    },
    unselectedtime:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        marginRight:10,
        paddingHorizontal:10,
        backgroundColor:Colors.WHITE,
        color:Colors.PRIMARY,
        justifyContent:'center',
        alignItems:'center'
    },
    textArea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:20,
        fontSize:16,
        fontFamily:'outfit',
        borderColor:Colors.PRIMARY,
        backgroundColor:Colors.WHITE
    },
    confirmbtn:{
        textAlign:'center',
        fontFamily:'outfit-medium',
        fontSize:17,
        backgroundColor:Colors.PRIMARY,
        color:Colors.WHITE,
        padding:13,
        borderRadius:99,
        elevation:2

    }
})