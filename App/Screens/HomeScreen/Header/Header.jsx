import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons';
import Search from './Search';


export default function Header() {
    const { user, isLoading} = useUser();

 // Conditionally render the header only if user data is loaded and available

  return (
    user && (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={StyleSheet.Profileimage}
                />
                <View>
                    <Text style={styles.welcomeText}>Welcome, </Text>
                    <Text style={styles.fullNameText}>{user?.fullName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color={Colors.WHITE} />
            </View>
            <Search/>
        </View>

    )
  );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    Profileimage:{
        width:50,
        height:50,
        borderRadius:'50%'
    },
    welcomeText: {
        color: Colors.WHITE,
        fontFamily:'outfit'
      },
    fullNameText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily:'outfit-medium'
    },
})