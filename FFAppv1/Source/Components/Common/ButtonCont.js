import React from 'react';
import { View } from 'react-native';

const ButtonCont = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    
    padding: 5,
    
    
    flexDirection: 'row',
    
    
  }
};

export { ButtonCont };