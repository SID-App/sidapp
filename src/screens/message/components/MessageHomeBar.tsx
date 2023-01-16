import IconHomeInstgramSvgTopRing from '@/assets/svg/IconHomeInstgramSvgTopRing';
import IconMenuInstgramSvg from '@/assets/svg/IconMenuInstgramSvg';
import LogoSvg from '@/assets/svg/LogoSvg';
import IconSvgMenuSettings from '@/assets/svg/messageSvg/IconSvgMessageSettings';
import SidText from '@/components/SidText';
import {MessageStackParams} from '@/navigation/message/MessageStack';
import DrawerTab from '@/screens/home/components/DrawerTab';
import {colors, fonts, padding} from '@/theme';
import {scaledWidth} from '@/utils/responsive';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Messages from './Messages';

type MessageHomeBarParams = {
	navigation: NativeStackNavigationProp<MessageStackParams, 'MessageScreen'>;
};

const MessageHomeBar: React.FC<MessageHomeBarParams> = ({navigation}) => {
	const [showMenu, setShowMenu] = React.useState(false);
	const offsetValue = React.useRef(new Animated.Value(0)).current;
	const scaleValue = React.useRef(new Animated.Value(1)).current;
	const closeButtonOffset = React.useRef(new Animated.Value(0)).current;
	const [ischeckdelete, setCheckDelete] = useState(false);
	const checkDelete = () => {
		setCheckDelete(!ischeckdelete);
	};
	const x = ischeckdelete;

	return (
		<>
			<DrawerTab />
			<Animated.View
				style={[
					styles.animatedOne,
					{
						borderLeftWidth: showMenu ? 40 : 0,
						borderTopWidth: showMenu ? 70 : 0,
						borderBottomWidth: showMenu ? 100 : 0,
						borderColor: showMenu ? '#9FE2BF' : colors.sidBlueColor,
						height: showMenu ? '100%' : '100%',
						borderRadius: showMenu ? 48 : 0,
						transform: [{scale: scaleValue}, {translateX: offsetValue}],
					},
				]}>
				<Animated.View
					style={{
						transform: [
							{
								translateY: closeButtonOffset,
							},
						],
					}}>
					<View style={styles.container}>
						<TouchableOpacity
							onPress={() => {
								Animated.timing(scaleValue, {
									toValue: showMenu ? 1 : 0.5,
									duration: 300,
									useNativeDriver: true,
								}).start();
								Animated.timing(offsetValue, {
									// YOur Random Value...
									toValue: showMenu ? 0 : 280,
									duration: 300,
									useNativeDriver: true,
								}).start();
								Animated.timing(closeButtonOffset, {
									// YOur Random Value...
									toValue: !showMenu ? -30 : 0,
									duration: 300,
									useNativeDriver: true,
								}).start();
								setShowMenu(!showMenu);
							}}>
							<IconMenuInstgramSvg />
						</TouchableOpacity>
						<View style={styles.topBarVectorText}>
							<TouchableOpacity style={styles.topBarVectorText}>
								<LogoSvg />
								<SidText style={styles.topBarText}>Sid</SidText>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.headerIconTopRing}>
							<SidText style={styles.headerTextTopRing}>3</SidText>
							<IconHomeInstgramSvgTopRing />
						</TouchableOpacity>
					</View>
					<View style={styles.secondView}>
						<TouchableOpacity>
							<IconSvgMenuSettings />
						</TouchableOpacity>
						<TouchableOpacity onPress={checkDelete}>
							<SidText style={styles.secondViewText}>{ischeckdelete ? 'Sil' : 'Düzenle'}</SidText>
						</TouchableOpacity>
					</View>
					<Messages ischeckdelete={x} navigation={navigation} />
				</Animated.View>
			</Animated.View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.sidBlueColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: padding[5],
		paddingTop: padding[10],
		paddingBottom: padding[3],
	},
	topBarVectorText: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	topBarText: {
		fontSize: scaledWidth(20),
		color: colors.white,
		paddingLeft: padding[2],
	},
	headerIconTopRing: {
		position: 'relative',
	},
	headerTextTopRing: {
		position: 'absolute',
		right: 0,
		backgroundColor: 'orange',
		color: colors.white,
		fontSize: scaledWidth(12),
		paddingHorizontal: scaledWidth(4),
		borderRadius: scaledWidth(10),
		zIndex: 1,
		overflow: 'hidden',
	},
	animatedOne: {
		flex: 1,
		backgroundColor: 'rgba(249, 249, 249, 1)',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	secondView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: padding[4],
	},
	secondViewText: {
		fontSize: scaledWidth(20),
		fontFamily: fonts.SemiBold,
		color: colors.sidBlueColor,
	},
});

export default MessageHomeBar;
