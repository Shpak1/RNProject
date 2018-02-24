import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutRequest } from '../login_page/actions';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

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

class LogoutPage extends Component {
    logOutUser = () => {
      this.props.login();
      this.props.navigator.push({ screen: 'MainScreen' });
    }
    render() {
      return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
          <TouchableHighlight
            onPress={this.logOutUser}
            style={styles.loginButton}
          >
            <View style={styles.loginButtonView}>
              <Text>Log out</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
}
export default connect(
  () => ({}),
  dispatch => ({
    logout: bindActionCreators(logoutRequest, dispatch),
  })
)(LogoutPage);
