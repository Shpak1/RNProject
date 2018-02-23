import { Navigation } from 'react-native-navigation';

export const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  navBarHidden: true,
};

export const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Login',
      navigatorStyle,
    },
    drawer: {
      left: {
        screen: 'Drawer',
      },
      type: 'MMDrawer',
      animationType: 'parallax',
      disableOpenGesture: true,
      style: {
        drawerShadow: false,
      },
    },
  });
};
