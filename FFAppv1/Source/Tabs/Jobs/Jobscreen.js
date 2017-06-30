import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import JobList from './JobList';

class Jobscreen extends Component {
	render () {
		return (
			<View flex = {1} backgroundColor = "white">
				<View style = {styles.infoCont}>
						<Text style = {styles.infoText}>Looking for someone to help take your business to the next level? Or end a helping hand? Post your job or skill here!</Text>
				</View>
				<JobList wayto = {this.props.navigation}/>
			</View>
			);
	}
}

const styles = ({
	infoCont: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		marginBottom: 10
	},
	infoText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'GillSans',
		textAlign: 'center'
	}
});

export default Jobscreen;