import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = () => {
  return (
    <View >
        <View style={styles.container}>
      <Text>Hello</Text>
      </View>
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container:{
        width:70,
        height:100,
        borderRadius:40,
        backgroundColor:'oldlace',
        justifyContent:'space-evenly',
        marginHorizontal:25,
    }
})