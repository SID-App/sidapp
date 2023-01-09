import LogInCodeScreen from '@/screens/auth/signin/LogInCodeScreen';
import LogInScreen from '@/screens/auth/signin/LogInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type SignInStackParams = {
	LogInScreen: undefined;
	LogInCodeScreen: undefined;
	SignInStack: undefined;
};

const SignInStackNavigator = createNativeStackNavigator<SignInStackParams>();

const SignInStack: React.FC = () => {
	return (
		<SignInStackNavigator.Navigator initialRouteName="LogInScreen" screenOptions={{headerShown: false}}>
			<SignInStackNavigator.Screen name="LogInScreen" component={LogInScreen} />
			<SignInStackNavigator.Screen name="LogInCodeScreen" component={LogInCodeScreen} />
		</SignInStackNavigator.Navigator>
	);
};

export default SignInStack;
