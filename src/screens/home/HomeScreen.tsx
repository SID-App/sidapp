import {HomeStackParams} from '@/navigation/home/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import InstgramHomeComponent from './components/InstgramHomeComponent';

type HomeScreenParams = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenParams> = () => {
	return (
		<View style={styles.container}>
			<InstgramHomeComponent />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
