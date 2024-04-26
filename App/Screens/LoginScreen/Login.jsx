import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../assets/logo.png')} 
        style={styles.loginImage}
        />
        <View style={styles.subContainer}>
            <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'center'}}>
                Let's come 
                <Text style={{fontWeight:'bold'}}>together and talk business</Text> for the services offered.
            </Text>
            <Text style={{fontSize:17, color:Colors.WHITE, textAlign:'center', marginTop:20}}> 
                Best of the best at finding the busines for a service needed at an affordable price.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log("button clicked!")}>
                <Text style={{textAlign:'center', fontSize:17 , color:Colors.PRIMARY}}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:100,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15,
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
        marginTop:-20,
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40
    }
})