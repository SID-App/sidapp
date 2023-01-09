import {HomeStackParams} from '@/navigation/home/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import InstgramHomeHeaderBar from './components/InstgramHomeHeaderBar';

type HomeScreenParams = NativeStackScreenProps<HomeStackParams, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenParams> = () => {
	return (
		<View style={styles.container}>
			<InstgramHomeHeaderBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
