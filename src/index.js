import { Provider } from 'react-redux';

/* Navigation */
import registerScreens from './navigation/index';
import { startApp } from './navigation/landing';
/* Store */
import configureStore from './store/configureStore';

const { store } = configureStore();

registerScreens(store, Provider);
startApp();
