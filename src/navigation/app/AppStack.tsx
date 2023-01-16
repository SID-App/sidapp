import React from 'react';
import HomeStack from '../home/HomeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {colors} from '@/theme';
import {Image, StyleSheet, View} from 'react-native';

import IconSvgBottomHome from '@/assets/svg/BottomTab/IconSvgBottomHome';
import IconSvgBottomIndicator from '@/assets/svg/BottomTab/IconSvgBottomIndicator';
import SignInStack from '../auth/SignInStack';
import IconSvgBottomSearch from '@/assets/svg/BottomTab/IconSvgBottomSearch';
import IconSvgBottomMessage from '@/assets/svg/BottomTab/IconSvgBottomMessage';
import MessageStack from '../message/MessageStack';
import SignUpStack from '../auth/SignUpStack';
import BottomSheetModal from '@/components/BottomSheetModal';

export type AppStackNavigatorParams = {
	HomeStack: undefined;
	MessageStack: undefined;
	AppStack: undefined;
	SignUpStack: undefined;
	SignInStack: undefined;
	Add: undefined;
};

const AppStackNavigator = createBottomTabNavigator<AppStackNavigatorParams>();
const AddScreenComponent = () => {
	return null;
};
const AppStack = () => {
	const Indicator = () => {
		const {indicator} = styles;
		return (
			<View style={indicator}>
				<IconSvgBottomIndicator />
			</View>
		);
	};

	return (
		<AppStackNavigator.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: colors.sidOrangeColor,
					position: 'absolute',
					height: scaledHeight(84),
					width: '100%',
					paddingTop: scaledHeight(15),
				},
			}}
			initialRouteName="HomeStack">
			<AppStackNavigator.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarIcon: ({focused}) => {
						return focused ? (
							<View>
								<IconSvgBottomHome />
								<View style={styles.indicator}>
									<Indicator />
								</View>
							</View>
						) : (
							<View>
								<IconSvgBottomHome />
							</View>
						);
					},
				}}
			/>
			<AppStackNavigator.Screen
				name="SignInStack"
				component={SignInStack}
				options={{
					tabBarIcon: ({focused}) => {
						return focused ? (
							<View>
								<IconSvgBottomSearch />
								<View style={styles.indicator}>
									<Indicator />
								</View>
							</View>
						) : (
							<View>
								<IconSvgBottomSearch />
							</View>
						);
					},
				}}
			/>
			<AppStackNavigator.Screen
				name="Add"
				component={AddScreenComponent}
				options={{
					tabBarButton: () => <BottomSheetModal />,
				}}
			/>
			<AppStackNavigator.Screen
				name="MessageStack"
				component={MessageStack}
				options={{
					tabBarIcon: ({focused}) => {
						return focused ? (
							<View>
								<IconSvgBottomMessage />
								<View style={styles.indicator}>
									<Indicator />
								</View>
							</View>
						) : (
							<View>
								<IconSvgBottomMessage />
							</View>
						);
					},
				}}
			/>
			<AppStackNavigator.Screen
				name="SignUpStack"
				component={SignUpStack}
				options={{
					tabBarIcon: ({focused}) => {
						return focused ? (
							<View>
								<Image
									style={styles.circleProfile}
									source={{
										uri: 'https://i.pinimg.com/222x/2f/ec/9f/2fec9f331750c8f5235b3096dac79f1f.jpg',
									}}
								/>
								<View style={styles.indicator}>
									<Indicator />
								</View>
							</View>
						) : (
							<View>
								<Image
									style={styles.circleProfile}
									source={{
										uri: 'https://i.pinimg.com/222x/2f/ec/9f/2fec9f331750c8f5235b3096dac79f1f.jpg',
									}}
								/>
							</View>
						);
					},
				}}
			/>
		</AppStackNavigator.Navigator>
	);
};
const styles = StyleSheet.create({
	indicator: {
		position: 'absolute',
		marginTop: scaledHeight(14),
		marginRight: scaledWidth(2),
	},
	circleProfile: {
		width: scaledHeight(40),
		height: scaledHeight(40),
		borderRadius: scaledWidth(20),
	},
});
export default AppStack;