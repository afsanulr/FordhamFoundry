import React, {Component} from 'react';
import {View, Image} from 'react-native';

class NavBar extends Component {
	render() {
		return (
			<View style = {styles.navBarBackground}>
			<Image source = {require('../../../Images/foundry-logo-top-bar.png')}
				style = {{height:40, width: 150}}
			/>
			</View>
			);
	}
}

const styles = ({
	navBarBackground: {
		height: 64,
		backgroundColor: "#f7f7f8",
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	}
});

export default NavBar