/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Home);
