import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.footerText}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.footerText}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
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
    backgroundColor: '#075e54',
    height:50
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    fontWeight:'bold'
  },
});

export default Footer;
