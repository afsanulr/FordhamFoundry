import React,{Component} from 'react';
import {Text, View} from 'react-native';

import {Button} from '../../Components/Common';

class Logoutscreen extends Component {
	constructor(logoutFunc) {
		super()
		this.logoutFunc = logoutFunc;
	}

	render() {
		return(
				<Button onPress={this.props.logoutFunc}> Log out </Button>
			);
	}

}

export default Logoutscreen;