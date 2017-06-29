import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const UpdateButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <View style = {styles.container}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
    //paddingTop: 5,
    // paddingRight: 275,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 8
  },
  buttonStyle: {
    //alignSelf: 'stretch',
    backgroundColor: '#0981CC',
    borderRadius: 5,
    width: 60,
    borderColor: 'black',
    
  }
};

export { UpdateButton };