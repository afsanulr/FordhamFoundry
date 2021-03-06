import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {logoutUser, loggedInUser} from '../../Actions';
import {connect} from 'react-redux';
import firebase from 'firebase';

import ViewContainer from '../../Components/Common/ViewContainer';

import LoginForm from './LoginForm';
import Logoutscreen from './Logoutscreen';

class LoginScreen extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.props.loggedInUser();
      } else {
        this.props.logoutUser();
      }
    });
  }

  onLogOut(){
    this.props.logoutUser()
  }

  renderContent(){
    switch (this.props.loggedIn) {
      case true:
        return(
          <View>
            <View alignItems = "center">
                <Image source = {require('../../../Images/logo.png')} 
                  style={{
                  width: 200,
                  height: 200,
                  }}/>
            </View>

            <View>
              <Text style = {styles.headTextStyle}>
                {firebase.auth().currentUser.email}
              </Text>
            </View>
            
              <Logoutscreen logoutFunc = {this.onLogOut.bind(this)}/>
            
          </View>
        )
      default:
        return <LoginForm />
    }
  }

  render(){
    return (
    	<ViewContainer>
      		{this.renderContent()}
      	</ViewContainer>
    )
  }
}

const styles = ({
  headTextStyle: {
    padding: 10,
    fontSize:  25,
    textAlign: 'center',
    fontFamily: 'GillSans-Light',
    color: 'black',
    fontWeight: '300'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {logoutUser, loggedInUser})(LoginScreen)
