import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import InputWithImage from '../../shared/InputWithImage';
import { loginRequest } from './actions';

const userImage = require('../../../images/user_icon.png');
const passwordImage = require('../../../images/passwordIcon.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetingView: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  inputsBlock: {
    height: '20%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonView: {
    backgroundColor: 'grey',
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  onUserNameChange = (name:string) => {
    this.setState({ userName: name });
  }
  onUserPasswordChange = (password:string) => {
    this.setState({ password });
  }
  loginUser = () => {
    this.props.login(this.state.userName, this.state.password);
    this.props.navigator.push({ screen: 'MainScreen' });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greetingView}>
          <Text style={styles.headerText}>Welcome</Text>
        </View>
        <View style={styles.inputsBlock}>
          <InputWithImage
            inputWidth="70%"
            onChangeText={this.onUserNameChange}
            icon={userImage}
            placeholder="User name"
          />
          <InputWithImage
            inputWidth="70%"
            icon={passwordImage}
            onChangeText={this.onUserPasswordChange}
            secureTextEntry
            placeholder="Password"
          />
        </View>
        <TouchableHighlight
          onPress={this.loginUser}
          style={styles.loginButton}
        >
          <View style={styles.loginButtonView}>
            <Text>Log in</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    login: bindActionCreators(loginRequest, dispatch),
  })
)(LoginPage);
