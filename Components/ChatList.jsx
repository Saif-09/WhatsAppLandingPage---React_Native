import { StyleSheet, Text, View , ScrollView, FlatList, Image} from "react-native";
import React from "react";

const ChatList = () => {

    const contacts = [
        {
          uid: 1,
          name: 'Mohd Saif',
          message: 'I love to Code ',
          imageUrl: 'https://avatars.githubusercontent.com/u/69134661?v=4',
        },
        {
          uid: 2,
          name: 'Hitesh Chaoudhary',
          message: 'An instructor for most of the development platforms ',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 3,
          name: 'Code With Harry',
          message: 'Learn To Code Online',
          imageUrl: 'https://avatars.githubusercontent.com/u/48705673?v=4',
        },
        {
          uid: 4,
          name: 'Shradhha Khapra',
          message: 'Love to Teach and Code ',
          imageUrl: 'https://avatars.githubusercontent.com/u/34954810?v=4',
        },
        {
            uid: 5,
            name: 'Mohd Saif',
            message: 'I love to Code ',
            imageUrl: 'https://avatars.githubusercontent.com/u/69134661?v=4',
          },
          {
            uid: 6,
            name: 'Hitesh Chaoudhary',
            message: 'An instructor for most of the development platforms ',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 7,
            name: 'Code With Harry',
            message: 'Learn To Code Online',
            imageUrl: 'https://avatars.githubusercontent.com/u/48705673?v=4',
          },
          {
            uid: 8,
            name: 'Shradhha Khapra',
            message: 'Love to Teach and Code ',
            imageUrl: 'https://avatars.githubusercontent.com/u/34954810?v=4',
          },
          {
            uid: 9,
            name: 'Mohd Saif',
            message: 'I love to Code ',
            imageUrl: 'https://avatars.githubusercontent.com/u/69134661?v=4',
          },
          {
            uid: 10,
            name: 'Hitesh Chaoudhary',
            message: 'An instructor for most of the development platforms ',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 11,
            name: 'Code With Harry',
            message: 'Learn To Code Online',
            imageUrl: 'https://avatars.githubusercontent.com/u/48705673?v=4',
          },
          {
            uid: 12,
            name: 'Shradhha Khapra',
            message: 'Love to Teach and Code ',
            imageUrl: 'https://avatars.githubusercontent.com/u/34954810?v=4',
          },
      ];

    const renderItem = ({ item }) => {
        return (
            

            <View style={styles.chatItem}>
                <Image source={{
                    uri: item.imageUrl,
                }} style={styles.image} />
                <View style={styles.chatText}>
                    <Text style={styles.chatName}>{item.name}</Text>
                    <Text style={styles.chatMessage}>{item.message}</Text>
                </View>
            </View>
            
        )

    }



  return (
    
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid.toString()}
        style={styles.chatList}
      />
   
    
  );
};

const styles = StyleSheet.create({

    chatList: {
        flex: 1,
        padding: 10,
        
      },
      chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        backgroundColor:'#202c33'
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      chatText: {
        flex: 1,
      },
      chatName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      chatMessage: {
        fontSize: 16,
      },

});

export default ChatList;


