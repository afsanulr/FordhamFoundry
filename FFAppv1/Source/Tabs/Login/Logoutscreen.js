import React,{Component} from 'react';
import {Text, View, Linking} from 'react-native';

import {Button, ClickMe} from '../../Components/Common';

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
					<ClickMe onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
						<Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>				
					</ClickMe>
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