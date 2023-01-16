import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '@/screens/message/MessageScreen';
import MessageDetailScreen from '@/screens/message/MessageDetailScreen';

export type MessageStackParams = {
	MessageScreen: undefined;
	MessageStack: undefined;
	MessageDetailScreen: undefined;
};

const MessageStackNavigator = createNativeStackNavigator<MessageStackParams>();

const MessageStack: React.FC = () => {
	return (
		<MessageStackNavigator.Navigator initialRouteName="MessageScreen" screenOptions={{headerShown: false}}>
			<MessageStackNavigator.Screen name="MessageScreen" component={MessageScreen} />
			<MessageStackNavigator.Screen name="MessageDetailScreen" component={MessageDetailScreen} />
		</MessageStackNavigator.Navigator>
	);
};
export default MessageStack;
