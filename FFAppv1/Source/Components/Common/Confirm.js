import React from 'react'
import {KeyboardAvoidingView, Text, Modal, View, TouchableWithoutFeedback} from 'react-native'
import {CardSection} from './CardSection'
import {Button} from './Button'

const Confirm = ({children,visible,onReturn, position}) => {
  const {containerStyle,textStyle,cardSectionStyle} = styles
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
      
        <CardSection style={cardSectionStyle}>
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
  cardSectionStyle:{
    //justifyContent:'center'
  },
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
