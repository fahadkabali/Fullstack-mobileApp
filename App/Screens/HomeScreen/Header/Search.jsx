import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.searchBarContents}>
      <TextInput 
        placeholder='search'
        style={styles.textInput}
      />
      <FontAwesome name="search" 
      size={24} 
      color={Colors.PRIMARY}  
      style={styles.searchBtn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContents:{
    display:'flex',
    marginTop:15,
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
    marginBottom:12,
  },
  textInput:{
    padding: 10,
    borderRadius: 10,
    paddingHorizontal:16,
    backgroundColor: Colors.WHITE,
    width:'85%',
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize:17,
    fontFamily:'outfit'

  },
  searchBtn:{
    padding: 10,
    borderRadius: 10,
    paddingHorizontal:16,
    backgroundColor: Colors.WHITE,
  }
})