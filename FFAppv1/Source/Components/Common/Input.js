import React from 'react';
import {TextInput, View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureText, multiline, height, maxLength, refName}) => {
	const {inputStyle, labelStyle, containerStyle} = styles

	return (
		<View style = {containerStyle}>
			<TextInput
				autoCapitalize = 'none'
				secureTextEntry = {secureText}
				placeholder = {placeholder}
				placeholderTextColor = 'rgba(0,0,0,0.6)'
				autoCorrect = {false}
				style = {inputStyle}
				value = {value}
				onChangeText = {onChangeText}
				multiline = {multiline || false}
				height = {height || 30}
				maxLength = {maxLength || 20}

			/>
		</View>
		);
};

const styles = {
	containerStyle: {
		flex: 1,
		
		height: undefined,
		marginBottom: 3,
		marginRight: 10
		//alignItems: 'center'
	},
	inputStyle:{
	  fontFamily: 'GillSans-Light',
	  //height: 40,
	  backgroundColor: 'rgba(211, 211, 211, 0.5)',
	  paddingHorizontal: 10
	},
	labelStyle: {
		//flex: 1,
		fontSize: 16,
		paddingBottom: 5,
		fontWeight: 'bold',
		fontFamily: "GillSans-Light"
	}
}

export {Input};