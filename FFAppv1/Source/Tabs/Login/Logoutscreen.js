import React,{Component} from 'react';
import {Text, View, Linking} from 'react-native';

import {Button, ClickEmail} from '../../Components/Common';

class Logoutscreen extends Component {
	constructor(logoutFunc) {
		super()
		this.logoutFunc = logoutFunc;
	}

	render() {
		return(
				<View alignItems = "center">
					<View>
						<Button onPress={this.props.logoutFunc}> Log out </Button>
					</View>
					<View height = {70}/>
					<ClickEmail onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
						<Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>				
					</ClickEmail>
				</View>
			);
	}
}

const styles = {
	feedbackText: {
		fontSize: 20,
		color: '#0981CC',
		fontWeight: '400',
		fontFamily: 'GillSans-Light',
		justifyContent: "center"
	}
}

export default Logoutscreen;