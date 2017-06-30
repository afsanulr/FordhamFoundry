import React, {Component} from 'react';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';

class Homescreen extends Component {

	render () {
		return (
			<ViewContainer> 
			<NavBar/>
			<ScrollableTabView tabBarTextStyle = {{paddingTop:10, fontSize: 20, fontFamily: 'GillSans'}}>
				<UpdateList tabLabel = "Updates"/>
				<EventList tabLabel = "Events"/>
			</ScrollableTabView>
			</ViewContainer>
			);
	}
}

export default Homescreen;