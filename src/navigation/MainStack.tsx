import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStack, {OnboardingStackNavigatorParams} from './onboarding/OnboardingStack';
import SignUpStack from './auth/SignUpStack';
import SignInStack, {SignInStackParams} from './auth/SignInStack';
import HomeStack from './home/HomeStack';
export type AppStackNavigatorParams = {
	OnboardingStack: OnboardingStackNavigatorParams;
	AuthStack: undefined;
	SignInStack: SignInStackParams;
	HomeStack: undefined;
};

const AppStackNavigator = createNativeStackNavigator<AppStackNavigatorParams>();

const MainStack = () => {
	return (
		<AppStackNavigator.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
			<AppStackNavigator.Screen name="OnboardingStack" component={OnboardingStack} />
			<AppStackNavigator.Screen name="AuthStack" component={SignUpStack} />
			<AppStackNavigator.Screen name="SignInStack" component={SignInStack} />
			<AppStackNavigator.Screen name="HomeStack" component={HomeStack} />
		</AppStackNavigator.Navigator>
	);
};
export default MainStack;
