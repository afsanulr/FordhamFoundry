import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

const ClickEmail = ({onPress, children}) => {

		return (
			<TouchableOpacity onPress = {onPress}>
			{children}
			</TouchableOpacity>
			)
}

export {ClickEmail};