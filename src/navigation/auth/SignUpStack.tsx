import ChoosePathCategoryScreen from '@/screens/auth/ChoosePathCategoryScreen';
import CodeScreen from '@/screens/auth/CodeScreen';
import GeneralInformationScreen from '@/screens/auth/GeneralInformationScreen';
import SignUpSuccessScreen from '@/screens/auth/SignUpSuccessScreen';
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
