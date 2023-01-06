import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStack, {OnboardingStackNavigatorParams} from './OnboardingStack';
import SignUpStack from './auth/SignUpStack';
export type AppStackNavigatorParams = {
	OnboardingStack: OnboardingStackNavigatorParams;
	AuthStack: undefined;
};

const AppStackNavigator = createNativeStackNavigator<AppStackNavigatorParams>();

const MainStack = () => {
	return (
		<AppStackNavigator.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
			<AppStackNavigator.Screen name="OnboardingStack" component={OnboardingStack} />
			<AppStackNavigator.Screen name="AuthStack" component={SignUpStack} />
		</AppStackNavigator.Navigator>
	);
};
export default MainStack;
