import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './components/MainNavigator';

const App = createAppContainer(MainNavigator);

export default App;