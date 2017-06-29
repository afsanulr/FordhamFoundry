import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Linking} from 'react-native';

const ClickEmail = ({jobBoard, jobKey}) => {

		return (
			<TouchableOpacity onPress = {() => Linking.openURL('mailto:{`${jobBoard[jobKey].contact`}')}>
			<Text style = {styles.emailText}>
			{`${jobBoard[jobKey].contact}`}
			</Text>
			</TouchableOpacity>
			)
}

const styles = {
	emailText: {
		color: 'blue',
		fontSize: 12
	}
}

export {ClickEmail};