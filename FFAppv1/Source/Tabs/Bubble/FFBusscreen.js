import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ViewContainer from '../../Components/Common/ViewContainer';
import FFBusList from './FFBusList';

class FFBusscreen extends Component {
	render () {
		return (
			<View flex = {1}>
			<View style = {styles.container}>
			<Text style = {styles.textStyle}> Click the rows to learn more about each Foundry business </Text>
			</View>
			<FFBusList/>
			</View>
			);
	}
}

const styles = StyleSheet.create ({
	container : {
		backgroundColor: 'maroon',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'GillSans'
	}
})
export default FFBusscreen;