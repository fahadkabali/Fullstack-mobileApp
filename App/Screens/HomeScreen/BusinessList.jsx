import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../components/Heading';
import BusinessLIstItem from './BusinessLIstItem';

export default function BusinessList() {
    const [businessList, setBusinessList] = useState([]);

    useEffect(()=>{
        getBusinessList()
    },[])

    const getBusinessList = () =>{
        GlobalApi.getBusinessList().then((resp)=>{
            console.log('resp', resp.businessLists)
            setBusinessList(resp?.businessLists)
        })
    }
  return (
    <View style={{padding:20, marginTop:20}}> 
      <Heading text={'Most popular '} isViewAll={true} />
      <FlatList
      data={businessList}
      horizontal= {true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) =>(
        <View style={{marginRight:10}}>
          <BusinessLIstItem business={item}/>
        </View>
      )}
      />
    </View>
  )
}