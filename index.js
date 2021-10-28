/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import Login from './components/Login';
import { name as appName } from './app.json';
import app from './app';
//import oderList from './components/oderList';
//import ListHome from './components/ListHome';
import Login from './components/Login';


AppRegistry.registerComponent(appName, () => Login);
