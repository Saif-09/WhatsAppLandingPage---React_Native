import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style ={styles.header}>
            <View style={styles.logoName}>
            <Image
            source={require('../assets/whatsapp.png')}
            style = {styles.logo}
            resizeMode="contain"
            />
            <Text style={styles.title}>WhatsApp</Text>
            </View>
            <View style={styles.searchOpt}>
                <Image 
                source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_367324.png&f=1&nofb=1&ipt=ce80b5c104402920616914f652fe39e90a62431f54a4be68ef705fa022fedcdf&ipo=images'}}
                style={[styles.camera, styles.invertedImage]}
                resizeMode="contain"
                
                 />
                 <Image 
                source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_194915.png&f=1&nofb=1&ipt=752f5c11f24528b56fb6a81c120effb2cc89d9e6392e30081a8c7aa14038898c&ipo=images'}}
                style={[styles.camera, styles.invertedImage]}
                resizeMode="contain"
                
                 />
                 <Image 
                source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fbold-ui%2F100%2Fmore-512.png&f=1&nofb=1&ipt=00f9b0d0239cab289717505cf95acf021dff6ea84fbc8dc6d166e1fbdb370025&ipo=images'}}
                style={[styles.camera, styles.invertedImage]}
                resizeMode="contain"
                
                 />


            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    camera:{
        width:25,
        height:25,
        marginBottom:-3,
        opacity:1,
        
        
        

    },
    invertedImage: {
        tintColor: 'rgba(255, 255, 255, 0.5)', // Apply the inversion effect
      },
    searchOpt:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginRight:-29,
        
        
        

    },
    logoName:{
        flex:1,
        flexDirection:"row",
        alignItems:'center'
    },
    logo:{
        width:40,
        height:40,
        marginRight:10,
        marginLeft:6
    },
    header:{
        flexDirection:"row",
        alignItems:'center',
        // justifyContent: 'center',
        padding:10,
        backgroundColor:'#111b21',

    },
    title:{
        color:'white',
        fontSize : 20,
        fontWeight :"bold",
    }

});
