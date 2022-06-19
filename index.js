import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HealthScreen from './components/healthScreen.component';
import HomeScreen from './components/homeScreen.component';

AppRegistry.registerComponent(appName, () => HealthScreen);
AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => App);
