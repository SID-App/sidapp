import IconHomeInstgramSvgTopRing from '@/assets/svg/IconHomeInstgramSvgTopRing';
import IconHomeInstgramSvgVectorDown from '@/assets/svg/IconHomeInstgramSvgVectorDown';
import IconMenuInstgramSvg from '@/assets/svg/IconMenuInstgramSvg';
import SidText from '@/components/SidText';
import {colors, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useState} from 'react';
import {Animated, Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {HistoryHelper} from '../helpers/HistoryHelper';
import {TextHelper} from '../helpers/TextHelper';
import {HistoryData} from '../store/HistoryData';
import {HistoryDataType} from '../types/HistoryTypes';
import DrawerTab from './DrawerTab';
import {PostCard} from './PostCard';
import TopSheetModal from './TopSheetModal';

type InstgramHomeHeaderBarParams = {};

const InstgramHomeHeaderBar: React.FC<InstgramHomeHeaderBarParams> = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	const offsetValue = React.useRef(new Animated.Value(0)).current;
	const scaleValue = React.useRef(new Animated.Value(1)).current;
	const closeButtonOffset = React.useRef(new Animated.Value(0)).current;
	const [isOpened, setIsOpened] = useState(false);
	const [sheetPosition, setSheetPosition] = useState({
		x: 0,
		y: 0,
	});
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
						<View
							style={styles.topBarVectorText}
							onLayout={event =>
								setSheetPosition({
									x: event.nativeEvent.layout.x,
									y: event.nativeEvent.layout.y,
								})
							}>
							<TouchableOpacity style={styles.topBarVectorText} onPressIn={() => setIsOpened(!isOpened)}>
								<SidText style={styles.topBarText}>Önerilen</SidText>
								<IconHomeInstgramSvgVectorDown />
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.headerIconTopRing}>
							<SidText style={styles.headerTextTopRing}>3</SidText>
							<IconHomeInstgramSvgTopRing />
						</TouchableOpacity>
					</View>
					{isOpened && <TopSheetModal sheetPosition={sheetPosition} />}
					<ScrollView style={styles.scrollContainer}>
						<ScrollView style={styles.historyItem} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
							{HistoryHelper.getHistory(HistoryData).map((item: HistoryDataType) => (
								<View key={item.id}>
									<TouchableOpacity style={[styles.historyItemContainer]}>
										<Image
											style={[styles.history, item.active ? styles.historyActive : styles.historyNotActive]}
											source={{
												uri: item.avatar,
											}}
										/>
										<SidText style={styles.historyName}>{TextHelper.getUserHistoryName(item.name)}</SidText>
									</TouchableOpacity>
								</View>
							))}
						</ScrollView>
						{HistoryData.map(item => (
							<PostCard key={item.id} name={item.name} source={item.avatar} />
						))}
					</ScrollView>
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
	scrollContainer: {
		marginBottom: scaledHeight(90),
	},
	topBarVectorText: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	topBarText: {
		fontSize: scaledWidth(20),
		color: colors.white,
		paddingRight: padding[1],
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
	historyItem: {
		height: scaledHeight(100),
		marginTop: scaledHeight(1),
		backgroundColor: 'white',
		zIndex: 1,
	},
	historyItemContainer: {
		paddingRight: 16,
		marginLeft: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	historyActive: {
		borderColor: colors.sidBlueColor,
	},
	historyNotActive: {
		borderColor: colors.white,
	},
	history: {
		marginTop: scaledHeight(10),
		height: scaledHeight(60),
		width: scaledWidth(60),
		borderRadius: scaledWidth(30),
		borderWidth: 4,
	},
	historyName: {
		color: colors.black,
		alignItems: 'center',
	},
});

export default InstgramHomeHeaderBar;
