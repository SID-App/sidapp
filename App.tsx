import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import store from './src/redux/store';
const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<MainStack />
			</Provider>
		</NavigationContainer>
	);
};

export default App;
