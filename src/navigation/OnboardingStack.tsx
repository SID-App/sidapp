import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingOne from '@/screens/onboarding/OnboardingOne';
export type OnboardingStackNavigatorParams = {
	OnboardingOne: undefined;
};

const OnboardingStackNavigator = createNativeStackNavigator<OnboardingStackNavigatorParams>();

const OnboardingStack = () => {
	return (
		<OnboardingStackNavigator.Navigator screenOptions={{headerShown: false}}>
			<OnboardingStackNavigator.Screen name="OnboardingOne" component={OnboardingOne} />
		</OnboardingStackNavigator.Navigator>
	);
};
export default OnboardingStack;
