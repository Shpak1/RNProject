import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';


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
