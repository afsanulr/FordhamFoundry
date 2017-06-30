import React from 'react'
import {KeyboardAvoidingView, Modal, View, TouchableWithoutFeedback} from 'react-native'
import {CardSection} from './CardSection'

const Confirm = ({children,visible,onReturn, position}) => {
  const {containerStyle,textStyle} = styles
  return(
    <KeyboardAvoidingView behavior = {'position'}>
    <Modal
      animationType="fade"
      onRequestClose={ ()=>{} }
      transparent
      visible={visible}
      position = {position}
    >
    <TouchableWithoutFeedback onPress = {onReturn}>
    
      <View style={containerStyle}>
      
        <CardSection>
        <TouchableWithoutFeedback>
          <View style={textStyle}>
            {children}
          </View>
          </TouchableWithoutFeedback>
        </CardSection>
      </View>
      

      </TouchableWithoutFeedback>
    </Modal>
    </KeyboardAvoidingView>

  )
}

const styles={
  textStyle:{
    flex:1,
  },
  containerStyle:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    position:'relative',
    flex:1,
    justifyContent:'center'
  }
}

export {Confirm}
