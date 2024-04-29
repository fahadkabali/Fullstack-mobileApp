import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../components/Heading'

export default function Slider() {
const [ slider, setSlider] = useState([])

    useEffect(()=>{
        getSliders()
    },[])
    const getSliders =() =>{
        GlobalApi.getSlider().then(resp =>{
            console.log("resp", resp.sliders)
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
        <Heading text = {'Offers For You'}/>
      <FlatList
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem ={({item, index})=>(
        <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}}
            style={styles.sliderImage}
            />
            {/* <Text>{item.name?.image.url}</Text> */}
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:'contain'

    }
})