import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useUser } from '@clerk/clerk-expo'
import { Image } from 'react-native'
import Colors from '../../Utils/Colors'

export default function ProfileScreen() {
  const user = useUser() 
  const profileMenu=[
    {
      id:1,
      name:'Home',
      icon:'home'
    },
    {
      id:2,
      name:'My Booking',
      icon:'bookmark-sharp'
    },
    {
      id:3,
      name:'logout',
      icon:'log-out'
    }
  ]
  return (
    <View>
      <View style={{padding:20, paddingTop:30, backgroundColor:Colors.PRIMARY
      }}>
        <Text style={{fontFamily:'outfit-bold', fontSize:20, color:Colors.WHITE}}>Profile</Text>
        <View style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          padding:20,
        }}>
          <Image source={{uri:user, imageUrl}}
          style={{width:90, height90, borderRadius:99}}
          />
          <Text style={{fontFamily:'outfit-mediam', fontSize:20, marginTop:10, color:Colors.WHITE}}>{user?.fullName}</Text>
          <Text style={{fontFamily:'outfit-mediam', fontSize:18, marginTop:10, color:Colors.WHITE}}>{user?.primaryEmailAddress.emailAddress}</Text>

        </View>
      </View>
      <View style={{paddingTop:100}}>
        <FlatList
        data={profileMenu}
        renderItem={({item, index})=>(
          < TouchableOpacity style={{display:'flex',
            flexDirection:'row', alignItems:'center', 
            gap:10, marginBottom:20, paddingHorizontal:50
          }}>
            <Ionicons name={item.icon} size={44} color={Colors.PRIMARY}/>
            <Text style={{fontFamily:'outfit', fontSize:20}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        />
      </View>
    </View>
  )
}