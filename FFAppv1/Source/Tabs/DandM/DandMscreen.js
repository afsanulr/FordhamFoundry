import React, {Component} from 'react';
import {Text, StyleSheet, View, Linking} from 'react-native';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import DandMList from './DandMList';
import {Button, ClickMe} from '../../Components/Common';

class DandMscreen extends Component {
	render () {
		return (
			<ViewContainer>
				<NavBar/>
				<ClickMe onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
					<Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
				</ClickMe>
				<View style = {styles.container}>
				<Text style = {styles.textStyle}> Click the rows to learn more about each mentor </Text>
				</View>
				<DandMList/>
				<View alignItems = "center" paddingTop = {5} borderTopWidth = {StyleSheet.hairlineWidth}>
				<Button onPress = {() => Linking.openURL('https://www.fordhamfoundry.org/about-us/team/')}> Click to learn more </Button>
				</View>
			</ViewContainer>
			);
	}
}

const styles = ({
	container: {
		backgroundColor: 'maroon',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'GillSans',
		textAlign: 'center'
	},
	feedbackText: {
		fontSize: 20,
		color: '#0981CC',
		fontWeight: '400',
		fontFamily: 'GillSans-Light',
		justifyContent: "center",
		textAlign: 'center'
	}
})

export default DandMscreen;