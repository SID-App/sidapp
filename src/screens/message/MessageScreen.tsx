import {MessageStackParams} from '@/navigation/message/MessageStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MessageHomeBar from './components/MessageHomeBar';
import {useAppSelector} from '@/redux/hooks';

type MessageScreenParams = NativeStackScreenProps<MessageStackParams, 'MessageScreen'>;

const MessageScreen: React.FC<MessageScreenParams> = ({navigation}) => {
	const globalSelector = useAppSelector(state => state.globalSlice);
	useEffect(() => {
		console.log(globalSelector.currentRoute);
	}, [globalSelector.currentRoute]);
	return (
		<View style={styles.container}>
			<MessageHomeBar navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default MessageScreen;
