import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  input: {
    fontSize: 16,
    backgroundColor: 'grey',
    marginVertical: 0,
    marginHorizontal: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
    color: 'black',
  },
  icon: {
    maxWidth: 20,
    maxHeight: 20,
  },
});

const InputWithImage = ({ icon, placeholder, inputWidth, secureTextEntry, ...rest }) => (
  <View style={styles.container}>
    <Image style={[styles.icon]} source={icon} />
    <View style={{ width: inputWidth, height: '100%', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        selectionColor="black"
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="red"
        {...rest}
      />
    </View>
  </View>
);
export default InputWithImage;
