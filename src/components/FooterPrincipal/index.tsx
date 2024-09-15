import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const FooterPrincipal = () => {
  return (
    <View style={styles.footer}>
      <Text>APP GAMES</Text>
    </View>
  );
};

export default FooterPrincipal;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});