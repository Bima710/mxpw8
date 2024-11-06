import { AppRegistry } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainStackNavigator);
