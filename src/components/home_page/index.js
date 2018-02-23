import React from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

const Homepage = Props => (
  <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
    <Text>{`Welcome ${Props.userData.userName}`}</Text>
  </View>
);
export default connect(
  state => ({
    userData: state.auth,
  }),
)(Homepage);
