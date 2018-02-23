/* @flow */
import React, { Component } from 'react';
import _ from 'lodash';
import Home from '../home_page';
import Questions from '../questions_page';
import Logout from '../logOut_page';

import {
  StyleSheet,
  View,
} from 'react-native';
import SideMenu from '../sideMenu';

const navigatableScreens = {
  Home,
  Questions,
  Logout
};

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  flexDirection: 'column',
  },
  view: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  textAlign: 'center',
  },
  content: {
	  flex: 1,
	  flexDirection: 'row',
  },
  uploading: {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: '100%',
	  height: '100%',
	  zIndex: 100,
	  alignItems: 'center',
	  justifyContent: 'center',
	  alignSelf: 'center',
  },
  indicator: {
	  backgroundColor: 'rgba(208,208,208,1)',
	  width: 51,
	  height: 51,
	  borderRadius: 6,
  },
});

type State = {
	screenStack: Array<string>,
	props: Object,
};

class MainScene extends Component<State> {
	static navigatorStyle = {
		navBarHidden: true,
		drawUnderTabBar: true,
		disabledBackGesture: true,
	};

	constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
		this.state = {
			screenStack: ['Home'],
		};
		this.navigation = {
			goTo: this.handleChanges,
			goBack: this.goBack,
		};
	}

	onNavigatorEvent(event: Object) {
		if (event.type === 'DeepLink') {
			this.handleDeepLink(event);
		}
	}

	navigation = {
		goTo: Function,
		goBack: Function,
	}

	handleDeepLink(event: { link: string, payload?: any }) {
		const parts = event.link.split('/');
		const screen = parts[0];
		if (_.last(this.state.screenStack) !== screen) {
			this.setState({
				screenStack: [...this.state.screenStack, screen],
			});
		}
	}

	handleChanges = (screen: string, props: Object) => {
		if (_.last(this.state.screenStack) !== screen) {
			this.setState({
				screenStack: [...this.state.screenStack, screen],
			});
		}
	};

	render() {
		const { screenStack } = this.state;
		const currentScreen = _.last(screenStack);
		const CurrentScreen = navigatableScreens[currentScreen];
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<SideMenu
						navigator={this.props.navigator}
					/>
					<CurrentScreen
						{...this.navigation}
						navigator={this.props.navigator}
						{...this.state.props}
					/>
				</View>
			</View>
		);
	}
}
export default MainScene;
