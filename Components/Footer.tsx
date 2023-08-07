import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Linking} from 'react-native';

const Footer = () => {
    const openWebsite = (url:string) => {
        console.log('Opening URL:', url);
        Linking.openURL(url)
        .catch(err => console.error('An error occurred', err));
    };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
      onPress={() =>
        openWebsite('https://www.linkedin.com/in/mohd-saif-134076141/')
      }
       style={styles.footerItem}>
        <Text style={styles.footerText}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() =>
        openWebsite('https://www.linkedin.com/in/mohd-saif-134076141/')
      } style={styles.footerItem}>
        <Text style={styles.footerText}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() =>
        openWebsite('https://www.linkedin.com/in/mohd-saif-134076141/')
      } style={styles.footerItem}>
        <Text style={styles.footerText}>Calls</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#111b21',
    height:50
  },
  footerItem: {
    alignItems: 'center',
    
  },
  footerText: {
    fontSize: 16,
    color: '#cccccc',
    fontWeight:'bold'
  },
});

export default Footer;
