import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 99,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  upperButtons: {
    height: 100,
    justifyContent: 'space-between',
  },
  drawerButton: { marginBottom: 10 },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
  },
});

class SideMenu extends Component {
  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.upperButtons}>
            <TouchableOpacity
              onPress={this.toggleDrawer}
              accessibilityComponentType="button"
              style={styles.drawerButton}
            >
              <Text style={styles.buttonLabel}>
                MENU
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default SideMenu
