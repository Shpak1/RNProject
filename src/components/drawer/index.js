/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { STATUSBAR_HEIGHT, colors } from '../../constants/globalStyles';

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    height: '100%',
    backgroundColor: colors.GREY_BUTTON_LIGHT,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    height: 40,
    width: 40,
    aspectRatio: 1,
    marginHorizontal: 20,
  },
  text: {
    maxWidth: 200,
    fontSize: 20,
    color: colors.WHITE,
    fontFamily: 'Berthold Akzidenz Grotesk',
  },
});


const buttons = {
  Home: {
    title: 'Home',
    color: colors.GREY_MENU_DARK,
    screen: 'Home',
  },
  Questions: {
    title: 'Stackoverflow',
    color: colors.GREY_MENU_DARK_ADD,
    screen: 'Questions',
  },
  LogOut: {
    title: 'Log Out',
    color: colors.GREY_MENU_MIDDLE,
    screen: 'Logout',
  },
};

const selectedColor = colors.RED_GLOBAL;

type State = {
    selectedScreen: string,
};

type Props = {
    navigator: Object,
}

class Drawer extends Component<Props, State> {
    static navigatorStyle = {
      statusBarHideWithNavBar: true,
      statusBarHidden: true,
    };
    constructor(props: Props) {
      super(props);
      this.state = {
        selectedScreen: 'Home',
      };
      this.buttons = { ...buttons };
    }
    getItems(selectedScreen: string) {
      return _.map(buttons, (item, key) => (
        <DrawerButton
          key={key}
          onPress={() => this.navigateToScreen(item.screen)}
          color={item.screen === selectedScreen ? selectedColor : item.color}
          title={item.title}
        />
      ));
    }

    navigateToScreen = (screen: string | null) => {
      if (typeof screen === 'string') {
        this.props.navigator.handleDeepLink({
          link: `${screen}/`,
        });
        this.setState({ selectedScreen: screen });
        this.props.navigator.toggleDrawer({ to: 'closed', side: 'left' });
      }
    }

    buttons: Object;

    render() {
      const { selectedScreen } = this.state;
      return (
        <View style={styles.container}>
          {this.getItems(selectedScreen)}
        </View>
      );
    }
}

const DrawerButton = ({ onPress, color, title }) => (
  <TouchableOpacity
    onPress={onPress}
    accessibilityComponentType="button"
    style={[
      styles.button,
      { backgroundColor: color },
    ]}
  >
    <View style={styles.button}>
      <Text
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        { title }
      </Text>
    </View>
  </TouchableOpacity>
);

export default Drawer;
