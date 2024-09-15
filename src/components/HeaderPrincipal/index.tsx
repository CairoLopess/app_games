import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function HeaderPrincipal({ filtrar, setFiltrar }: any) {
  return (
    <View style={styles.container}>
      <TextInput
        value={filtrar}
        onChangeText={(text: string) => setFiltrar(text)}
        placeholder="Search Game in App Games"
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    top: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
  },
});
