import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { questionsRequest } from './actions';


class QuestionPage extends Component {
  componentDidMount() {
    this.props.questionsRequest();
  }
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
            </View>
        );
    }
}

export default connect(
  (state) => ({
      questionsList: state.questionsList,
  }),
  dispatch => ({
      questionsRequest: bindActionCreators(questionsRequest, dispatch),
  })
)(QuestionPage)