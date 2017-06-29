import React from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {LinkButton, DeleteButton, ClickEmail} from '../../Components/Common';

const renderButton = (canDelete, jobKey, jobDelete, onReturn, visible) => {  
  
  closeModal = (jobKey) => {
    jobDelete(jobKey)
    onReturn()
    

  }

  if(canDelete)
    return(
      <View borderTopWidth = {StyleSheet.hairlineWidth}>
        <DeleteButton onPress={() => {closeModal(jobKey)}}>
          Delete
        </DeleteButton>
      </View>
    )
}

const showLinkButton = (jobBoard, jobKey) => 
{
    if(!jobBoard.hasOwnProperty(jobKey))
    {
      return
    } 
    else if(jobBoard[jobKey].link === '')
    {
      return
    }
    else {
      return (
        <LinkButton jobBoard = {jobBoard} jobKey = {jobKey}>Learn more</LinkButton>
      )
  }
}

const showEmail = (jobBoard, jobKey) => 
{
    if(!jobBoard.hasOwnProperty(jobKey))
    {
      return
    } 
    else if(jobBoard[jobKey].contact === '')
    {
      return
    }
    else {
      return (
        <ClickEmail jobBoard = {jobBoard} jobKey = {jobKey}/>
      )
  }
}
    

const JobDisplay = ({jobBoard, jobKey, canDelete, jobDelete, onReturn, visible}) => {

  if(jobBoard === null)
  {
    return null
  }
  else {
    return (
    <View>
        <View style = {styles.titleandname}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.titleStyle}>{`${jobBoard[jobKey].title}`}</Text>:<Text></Text>}
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.nameStyle}>{`${jobBoard[jobKey].name}`}</Text>:<Text></Text>}
        </View>
        <View style = {styles.desc}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.descStyle}>{jobBoard[jobKey].description}</Text>:<Text></Text>}
        </View>
        <View style = {styles.contactCont}>
        {showEmail(jobBoard, jobKey)}
        </View>
        {showLinkButton(jobBoard, jobKey)}
        

      {canDelete ? renderButton(canDelete, jobKey, jobDelete, onReturn, visible):<Text></Text>}

    </View>
    );
  }
}

const styles = {
  titleandname: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10
  },
  desc: {
    marginTop: 10
  },
  contactCont: {
    marginTop: 20,
    marginBottom: 20
  },
	textStyle: {
		fontSize: 12,
		fontWeight: 'bold'
	},
  titleStyle: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'GillSans',
    paddingBottom: 2,
    color: 'darkblue'
  },
  nameStyle: {
    fontSize: 14,
    fontFamily: 'GillSans-Light'
  },
  descStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  },
  contactStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  }
}

export {JobDisplay}