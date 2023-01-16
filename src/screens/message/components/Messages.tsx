import IconSvgMessageFromWalker from '@/assets/svg/messageSvg/IconSvgMessageFromArbnb';
import IconSvgMessageRead from '@/assets/svg/messageSvg/IconSvgMessageRead';
import IconSvgMessageUnRead from '@/assets/svg/messageSvg/IconSvgMessageUnread';
import SidText from '@/components/SidText';
import {HistoryData} from '@/screens/home/store/HistoryData';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MessageHelper} from '../helpers/MessageHelper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconSvgMessageDelete from '@/assets/svg/messageSvg/IconSvgMessageDelete';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MessageStackParams} from '@/navigation/message/MessageStack';
type MessagesProps = {
	ischeckdelete: boolean;
	navigation: NativeStackNavigationProp<MessageStackParams, 'MessageScreen'>;
};

const Messages: React.FC<MessagesProps> = props => {
	const rightSwipe = () => {
		return (
			<TouchableOpacity>
				<View style={styles.deleteBox}>
					<IconSvgMessageDelete />
				</View>
			</TouchableOpacity>
		);
	};
	const leftSwipe = () => {
		return (
			<TouchableOpacity>
				<View style={styles.unread}>
					<SidText style={styles.textUnread}>Okunmadı</SidText>
					<SidText style={styles.textUnread}>işaretle</SidText>
				</View>
			</TouchableOpacity>
		);
	};
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [currentDirection, setCurrentDirection] = useState('none');

	return (
		<FlatList
			data={HistoryData}
			contentContainerStyle={styles.messageView}
			numColumns={1}
			renderItem={({item, index}) =>
				item.haveMessage ? (
					<GestureHandlerRootView>
						<Swipeable
							key={index}
							onBegan={() => {
								setCurrentIndex(index);
							}}
							onSwipeableOpen={direction => {
								setCurrentDirection(direction);
							}}
							onSwipeableClose={() => setCurrentDirection('none')}
							renderRightActions={rightSwipe}
							renderLeftActions={leftSwipe}>
							<TouchableOpacity
								onPress={() => props.navigation.replace('MessageDetailScreen')}
								activeOpacity={0.6}
								style={[
									styles.message,
									currentIndex === index && currentDirection === 'left'
										? {
												left: currentIndex === index && currentDirection === 'left' ? -10 : 0,
										  }
										: {
												right: currentIndex === index && currentDirection === 'right' ? -10 : 0,
										  },
								]}
								key={index}>
								{props.ischeckdelete ? (
									<BouncyCheckbox
										style={{
											paddingLeft: scaledWidth(10),
										}}
										fillColor={colors.sidBlueColor}
										unfillColor="#FFFFFF"
										checkIconImageSource={require('@/assets/images/IconMessageGreenCheck.png')}
										iconStyle={{
											width: scaledWidth(11),
											height: scaledHeight(11),
										}}
										innerIconStyle={{width: scaledWidth(23), height: scaledHeight(23)}}
									/>
								) : null}
								<View style={styles.leftPart}>
									<Image style={styles.image} source={{uri: item.avatar}} />
									<View style={styles.leftPartlittleImage}>
										<IconSvgMessageFromWalker />
									</View>
								</View>
								<View style={styles.centerPart}>
									<View style={styles.centerTopPart}>
										<SidText style={styles.centerTopPartFirstText}>{item.name}</SidText>
										<SidText style={styles.centerTopPartSecondText}>({item.active ? 'Çevrimiçi' : ' 1s önce aktifti'})</SidText>
									</View>
									<View style={styles.centerBottomPart}>
										<View style={styles.readCheck}>{item.isRead ? <IconSvgMessageRead /> : <IconSvgMessageUnRead />}</View>
										<View>
											<SidText>{MessageHelper.getUserMessageHelper(item.message)}</SidText>
										</View>
									</View>
								</View>
								<View style={styles.rightPart}>
									<View>
										<SidText
											style={[styles.rightPartTopText, {color: item.isRead ? colors.sidMessageTimeReadColor : colors.sidMessageTimeUnReadColor}]}>
											{item.time}
										</SidText>
									</View>
									{item.newMessage ? (
										<View style={styles.rightPartBottomTextView}>
											<SidText style={styles.rightPartBottomText}>{item.newMessage}</SidText>
										</View>
									) : null}
								</View>
							</TouchableOpacity>
						</Swipeable>
					</GestureHandlerRootView>
				) : null
			}
		/>
	);
};

const styles = StyleSheet.create({
	messageView: {
		backgroundColor: 'rgba(249, 249, 249, 1)',
		zIndex: 9999,
	},
	message: {
		marginVertical: scaledHeight(7),
		paddingHorizontal: padding[3],
		paddingVertical: padding[1],
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: scaledWidth(10),
	},
	image: {
		width: scaledWidth(59),
		height: scaledHeight(59),
		borderRadius: scaledWidth(56),
	},
	leftPart: {
		position: 'relative',
	},
	centerPart: {
		flex: 1,
	},
	leftPartlittleImage: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	rightPart: {
		alignItems: 'flex-end',
	},
	centerBottomPart: {
		flexDirection: 'row',
		padding: padding[1],
	},
	readCheck: {
		marginRight: scaledWidth(5),
	},
	centerTopPart: {
		marginLeft: scaledWidth(20),
		flexDirection: 'row',
	},
	centerTopPartFirstText: {
		fontFamily: fonts.Bold,
		fontSize: scaledHeight(16),
	},
	centerTopPartSecondText: {
		fontFamily: fonts.Light,
		fontSize: scaledHeight(14),
	},
	rightPartTopText: {
		fontSize: scaledHeight(11),
		fontFamily: fonts.Light,
		marginBottom: scaledHeight(10),
	},
	rightPartBottomTextView: {
		width: scaledWidth(20),
		height: scaledHeight(20),
		borderRadius: scaledWidth(3),
		backgroundColor: 'rgba(101, 202, 160, 1)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rightPartBottomText: {
		color: colors.white,
	},
	deleteBox: {
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: scaledHeight(15),
		paddingVertical: scaledHeight(18),
		marginTop: scaledHeight(10),
	},
	unread: {
		backgroundColor: colors.sidBlueColor,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: scaledHeight(37),
		paddingVertical: scaledHeight(12),
		marginTop: scaledHeight(10),
	},
	textUnread: {
		fontSize: 14,
		fontWeight: '700',
		color: colors.white,
	},
});
export default Messages;
