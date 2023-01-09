import HomeScreen from '@/screens/home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type HomeStackParams = {
	HomeScreen: undefined;
	HomeStack: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParams>();

const HomeStack: React.FC = () => {
	return (
		<HomeStackNavigator.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
			<HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
		</HomeStackNavigator.Navigator>
	);
};

export default HomeStack;
