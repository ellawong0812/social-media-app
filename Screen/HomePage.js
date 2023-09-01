import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, FlatList, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Container from '../Component/Container';
import { ScrollView } from 'react-native-gesture-handler';




const HomePage = ({ navigation }) => {
    const [comment, setComment] = useState('');
    const [commentContent, setCommentContent] = useState([]);
    const pressHandler = () => {
        setCommentContent([...commentContent, comment])
        setComment(null);
    }
    const[heartColor,setHeartColor]=useState('black');
    const[count,setCount]=useState(0);
    function incrementCount(){
        setCount(prevCount=>prevCount+1)
    }
    function decrementCount(){
        setCount(prevCount=>prevCount-1)
    }
    const commonStory = ['A', 'B', 'C', 'D'];

    return (

        <SafeAreaView style={{ margin: 20 }}>
            <ScrollView>

            <FlatList data={commonStory} renderItem={({ item }) => { return <Container item={item} /> }} horizontal />

            <View >
                <Image source={require('../assets/pofulam2.png')} style={{ width: 350, height: 200 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={()=>
                {heartColor=='red'? setHeartColor('black'):setHeartColor('red');
            heartColor=='red'? decrementCount():incrementCount();
            }}>
                <Ionicons name="heart" size={24} color={heartColor} />
                 


                </TouchableOpacity> 
                <Ionicons name="ios-chatbox-outline" size={24} color="black" />
                <Ionicons name="share-outline" size={24} color="black" />
                
            </View>

            <Text>Like:{count}</Text>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput placeholder='Add a comment' value={comment} onChangeText={text => setComment(text)} />
                <TouchableOpacity onPress={pressHandler}>
                    <MaterialCommunityIcons name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
                <FlatList data={commentContent} renderItem={({ item }) => (
                    <Text>{item}</Text>
                )} />
            </View>
            <View>
                <Image source={require('../assets/pofulam1.jpg')} style={{ width: 350, height: 200 }}/>
                <Text>薄扶林村牧場</Text>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomePage

const styles = StyleSheet.create({})