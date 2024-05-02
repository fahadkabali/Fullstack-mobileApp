import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../components/Heading'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const navigation = useNavigation()
    useEffect(()=>{
        getCatogeries()
    },[])
    const getCatogeries =() =>{
        GlobalApi.getCategory().then(resp =>{
            console.log("resp", resp.sliderCategories)
            setCategories(resp?.sliderCategories )
        })
    }
  return (
    <View style ={{marginTop:10}}>
        <Heading text ={'Categories'} isViewAll={true}/>
        <FlatList
        data={categories}
        numColumns={4}
        renderItem={({item})=> index <= 2 && (
            <TouchableOpacity style={styles.stylesContainer}
                onPress = {()=>navigation.push('business-list',{
                    category:item.name
                })}
                
            >
                <View style={StyleSheet.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                    style={{width:30, height:30}}
                    />
                </View>
                <Text style ={{fontFamily:'outfit-medium', marginTop:5}}>{item?.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    stylesContainer:{
        display:'flex',
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        backgroundColor:Colors.LIGHTGRAY,
        padding:17,
        borderRadius:'50%'
    }
})