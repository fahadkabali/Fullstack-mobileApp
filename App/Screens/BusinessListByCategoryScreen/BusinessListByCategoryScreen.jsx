import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessLIstItem from '../HomeScreen/BusinessLIstItem';
import Colors from '../../Utils/Colors';
import PageHeading from '../../components/PageHeading';

export default function BusinessListByCategoryScreen() {
    const param = useRoute().params
    const navigation = useNavigation()
    const [ businessList, setBusinessList] = useState([])
    useEffect(()=>{
        // console.log("Category", param.category)
        param&&getBusinessByCategory()
    },[param])
    const getBusinessByCategory =() =>{
        GlobalApi.getBusinessListByCategory(param.category)
        .then(resp=>{
            setBusinessList(resp.businessLists)
            // console.log(resp.businessLists)
        })
    }
  return (
    <View style={{padding:20, paddingTop:30}}>
        <PageHeading title={param.category}/>
        {businessList?.length>0? <FlatList
        data={businessList}
        style={{marginTop:15}}
        renderItem={({item,index})=>(
            <BusinessLIstItem business={item}/>
        )}
        />:
        <Text style={{fontFamily:'outfit-medium', color:Colors.GRAY, fontSize:20, textAlign:'center', marginTop:'20%'}}>No Business Found</Text>}
    </View>
  )
}