import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStack, {OnboardingStackNavigatorParams} from './onboarding/OnboardingStack';
import SignUpStack from './auth/SignUpStack';
import SignInStack, {SignInStackParams} from './auth/SignInStack';
import AppStack, {AppStackNavigatorParams} from './app/AppStack';
export type MainStackNavigatorParams = {
	OnboardingStack: OnboardingStackNavigatorParams;
	AuthStack: undefined;
	SignInStack: SignInStackParams;
	AppStack: AppStackNavigatorParams;
};

const MainStackNavigator = createNativeStackNavigator<MainStackNavigatorParams>();

const MainStack = () => {
	return (
		<MainStackNavigator.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
			<MainStackNavigator.Screen name="OnboardingStack" component={OnboardingStack} />
			<MainStackNavigator.Screen name="AuthStack" component={SignUpStack} />
			<MainStackNavigator.Screen name="SignInStack" component={SignInStack} />
			<MainStackNavigator.Screen name="AppStack" component={AppStack} />
		</MainStackNavigator.Navigator>
	);
};
export default MainStack;
