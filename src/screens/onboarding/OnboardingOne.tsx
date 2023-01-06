import {OnboardingStackNavigatorParams} from '@/navigation/OnboardingStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type OnBoardingOneParams = NativeStackScreenProps<OnboardingStackNavigatorParams, 'OnboardingOne'>;

const OnboardingOne: React.FC<OnBoardingOneParams> = () => {
	return (
		<SafeAreaView>
			<Text> OnBoardingOne</Text>
		</SafeAreaView>
	);
};

export default OnboardingOne;
