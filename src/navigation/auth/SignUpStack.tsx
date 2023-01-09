import ChoosePathCategoryScreen from '@/screens/auth/signup/ChoosePathCategoryScreen';
import CodeScreen from '@/screens/auth/signup/CodeScreen';
import GeneralInformationScreen from '@/screens/auth/signup/GeneralInformationScreen';
import SignUpSuccessScreen from '@/screens/auth/signup/SignUpSuccessScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type SignUpStackParams = {
	GeneralInformationScreen: undefined;
	CodeScreen: undefined;
	SignUpSuccessScreen: undefined;
	ChoosePathCategoryScreen: undefined;
};

const SignUpStackNavigator = createNativeStackNavigator<SignUpStackParams>();

const SignUpStack: React.FC = () => {
	return (
		<SignUpStackNavigator.Navigator initialRouteName="GeneralInformationScreen" screenOptions={{headerShown: false}}>
			<SignUpStackNavigator.Screen name="GeneralInformationScreen" component={GeneralInformationScreen} />
			<SignUpStackNavigator.Screen name="CodeScreen" component={CodeScreen} />
			<SignUpStackNavigator.Screen name="SignUpSuccessScreen" component={SignUpSuccessScreen} />
			<SignUpStackNavigator.Screen name="ChoosePathCategoryScreen" component={ChoosePathCategoryScreen} />
		</SignUpStackNavigator.Navigator>
	);
};

export default SignUpStack;
