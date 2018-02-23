import { Navigation } from 'react-native-navigation';
import Login from '../components/login_page';
import Logout from '../components/logOut_page';
import Home from '../components/home_page';
import Questions from '../components/questions_page';
import Drawer from '../components/drawer';
import MainScreen from '../components/mainScene';


export default function registerScreens(store, Provider) {
  /* Auth */
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Logout', () => Logout, store, Provider);

  /* Home */
  Navigation.registerComponent('Home', () => Home, store, Provider);

  /* Questions */
  Navigation.registerComponent('Questions', () => Questions, store, Provider);

  /* Navigation */
  Navigation.registerComponent('Drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('MainScreen', () => MainScreen, store, Provider);
}
