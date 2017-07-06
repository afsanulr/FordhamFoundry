import React, {Component} from 'react';
import {Text, Linking} from 'react-native';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import {ClickMe} from '../../Components/Common';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';

class Homescreen extends Component {
	render () {
		return (
			<ViewContainer> 
			<NavBar/>
			<ClickMe onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
			<Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
			</ClickMe>
			<ScrollableTabView tabBarTextStyle = {{paddingTop:10, fontSize: 20, fontFamily: 'GillSans'}}>
				<UpdateList tabLabel = "Updates"/>
				<EventList tabLabel = "Events"/>
			</ScrollableTabView>
			</ViewContainer>
			);
	}
}

const styles = {
	feedbackText: {
		fontSize: 20,
		color: '#0981CC',
		fontWeight: '400',
		fontFamily: 'GillSans-Light',
		justifyContent: "center",
		textAlign: 'center'
	}
}

export default Homescreen;