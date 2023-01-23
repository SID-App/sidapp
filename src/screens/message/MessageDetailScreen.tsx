import IconSvgMessageCallButton from '@/assets/svg/messageDetaiSvg/IconSvgMessageCallButton';
import IconSvgMessageCamera from '@/assets/svg/messageDetaiSvg/IconSvgMessageCamera';
import IconSvgMessageCopy from '@/assets/svg/messageDetaiSvg/IconSvgMessageCopy';
import IconSvgMessageDeleteBigBox from '@/assets/svg/messageDetaiSvg/IconSvgMessageDeleteBigBox';
import IconSvgMessageMicrofone from '@/assets/svg/messageDetaiSvg/IconSvgMessageMicrofone';
import IconSvgMessagePageVectorLeft from '@/assets/svg/messageDetaiSvg/IconSvgMessagePageVectorLeft';
import IconSvgMessagePlus from '@/assets/svg/messageDetaiSvg/IconSvgMessagePlus';
import IconSvgMessageReadGreen from '@/assets/svg/messageDetaiSvg/IconSvgMessageReadGreen';
import IconSvgMessageReadOrange from '@/assets/svg/messageDetaiSvg/IconSvgMessageReadOrange';
import IconSvgMessageSentDoubleCheck from '@/assets/svg/messageDetaiSvg/IconSvgMessageSentDoubleCheck';
import IconSvgMessageSmallIcon from '@/assets/svg/messageDetaiSvg/IconSvgMessageSmallIcon';
import IconSvgMessageUnreadWhite from '@/assets/svg/messageDetaiSvg/IconSvgMessageUnreadWhite';
import IconSvgMessageDelete from '@/assets/svg/messageSvg/IconSvgMessageDelete';
import SidInput from '@/components/SidInput';
import SidText from '@/components/SidText';
import {MessageStackParams} from '@/navigation/message/MessageStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {HistoryData} from '../home/store/HistoryData';

type MessageDetailScreenParams = NativeStackScreenProps<MessageStackParams, 'MessageDetailScreen'>;
const rightSwipe = () => {
	return (
		<View style={styles.swipe}>
			<View style={styles.messageFirstSwipe}>
				<SidText style={styles.textMessageSwipe}>22.22</SidText>
			</View>
			<View style={styles.messageSecondSwipe}>
				<SidText style={styles.textMessageSwipe}>22.22</SidText>
			</View>
			<View style={styles.messageOtherSwipe}>
				<SidText style={styles.textMessageSwipe}>22.24</SidText>
			</View>
			<View style={styles.messageOtherSwipe}>
				<SidText style={styles.textMessageSwipe}>22.24</SidText>
			</View>
		</View>
	);
};
const MessageDetailScreen: React.FC<MessageDetailScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const ref = useRef<Swipeable>(null);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const handlePresentModalPress = () => {
		setIsModalOpened(true);
	};
	const [ischeckdelete, setCheckDelete] = useState(false);
	const checkDelete = () => {
		setCheckDelete(!ischeckdelete);
	};

	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<TouchableOpacity style={styles.topContainerLeft} onPress={() => navigation.navigate('MessageScreen')}>
					<IconSvgMessagePageVectorLeft />
				</TouchableOpacity>
				<View style={styles.topContainerCenter}>
					<View>
						<Image style={styles.image} source={{uri: HistoryData[0].avatar}} />
						<View style={styles.smallIcon}>
							<IconSvgMessageSmallIcon />
						</View>
					</View>
					<View>
						<SidText style={styles.centerFirstText}>{HistoryData[0].name}</SidText>
						<SidText style={[styles.centerSecondText, {color: HistoryData[0].active ? colors.sidBlueColor : colors.sidOrangeColor}]}>
							{HistoryData[0].active ? 'Çevrimiçi' : 'Çevrimdışı'}
						</SidText>
					</View>
				</View>
				<TouchableOpacity style={styles.topContainerRight}>
					<IconSvgMessageCallButton />
				</TouchableOpacity>
			</View>
			<View style={styles.textDay}>
				<SidText>Bugün</SidText>
			</View>

			<ScrollView>
				<GestureHandlerRootView>
					<Swipeable
						renderRightActions={rightSwipe}
						ref={ref}
						onSwipeableWillOpen={() => {
							ref.current?.close();
						}}>
						<TouchableOpacity
							style={[styles.sentMessageView, {justifyContent: ischeckdelete ? 'flex-start' : 'flex-end'}]}
							activeOpacity={1}
							onLongPress={handlePresentModalPress}>
							<View style={styles.sentMessage}>
								<SidText style={styles.textMessageColor}>{HistoryData[0].messages[0].message}</SidText>
								<IconSvgMessageReadGreen />
							</View>
							{ischeckdelete ? (
								<BouncyCheckbox
									style={styles.checkBoxBounce}
									fillColor={colors.sidOrangeColor}
									unfillColor="#FFFFFF"
									checkIconImageSource={require('@/assets/images/IconMessageOrangeCheck.png')}
									iconStyle={styles.iconStyleCheckBox}
									innerIconStyle={styles.innerIconStyles}
								/>
							) : null}
						</TouchableOpacity>
						<TouchableOpacity style={styles.sentMessageView} activeOpacity={1} onLongPress={handlePresentModalPress}>
							<View style={styles.inbox}>
								<SidText style={styles.textMessageColor}>{HistoryData[0].messages[0].message}</SidText>
								<IconSvgMessageReadOrange />
							</View>
							{ischeckdelete ? (
								<BouncyCheckbox
									style={styles.checkBoxBounce}
									fillColor={colors.sidOrangeColor}
									unfillColor="#FFFFFF"
									checkIconImageSource={require('@/assets/images/IconMessageOrangeCheck.png')}
									iconStyle={styles.iconStyleCheckBox}
									innerIconStyle={styles.innerIconStyles}
								/>
							) : null}
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.sentMessageView, {justifyContent: ischeckdelete ? 'flex-start' : 'flex-end'}]}
							activeOpacity={1}
							onLongPress={handlePresentModalPress}>
							<View style={styles.sentMessage}>
								<SidText style={styles.textMessageColor}>{HistoryData[0].messages[0].message}</SidText>
								<IconSvgMessageSentDoubleCheck />
							</View>
							{ischeckdelete ? (
								<BouncyCheckbox
									style={styles.checkBoxBounce}
									fillColor={colors.sidOrangeColor}
									unfillColor="#FFFFFF"
									checkIconImageSource={require('@/assets/images/IconMessageOrangeCheck.png')}
									iconStyle={styles.iconStyleCheckBox}
									innerIconStyle={styles.innerIconStyles}
								/>
							) : null}
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.sentMessageView, {justifyContent: ischeckdelete ? 'flex-start' : 'flex-end'}]}
							activeOpacity={1}
							onLongPress={handlePresentModalPress}>
							<View style={styles.sentMessage}>
								<SidText style={styles.textMessageColor}>{HistoryData[0].messages[0].message}</SidText>
								<IconSvgMessageUnreadWhite />
							</View>
							{ischeckdelete ? (
								<BouncyCheckbox
									style={styles.checkBoxBounce}
									fillColor={colors.sidOrangeColor}
									unfillColor="#FFFFFF"
									checkIconImageSource={require('@/assets/images/IconMessageOrangeCheck.png')}
									iconStyle={styles.iconStyleCheckBox}
									innerIconStyle={styles.innerIconStyles}
								/>
							) : null}
						</TouchableOpacity>
					</Swipeable>
				</GestureHandlerRootView>
			</ScrollView>
			{isModalOpened && (
				<View style={[styles.modalBg]}>
					<View
						style={[
							styles.modalView,
							{
								width: dimension.width * 0.5,
								height: dimension.height * 0.12,
								left: dimension.width / 2,
								top: dimension.height / 2,
								transform: [
									{
										translateX: -(dimension.width * 0.5) / 2,
									},
									{
										translateY: -(dimension.height * 0.12) / 2,
									},
								],
							},
						]}>
						<TouchableOpacity
							style={styles.delete}
							onPress={() => {
								setIsModalOpened(false);
								checkDelete();
							}}>
							<SidText style={styles.sheetText}>Sil</SidText>
							<IconSvgMessageDelete />
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.copy}
							onPress={() => {
								setIsModalOpened(false);
							}}>
							<SidText style={styles.sheetText}>Kopyala</SidText>
							<IconSvgMessageCopy />
						</TouchableOpacity>
					</View>
				</View>
			)}
			<View style={styles.bottomContainer}>
				<SidInput
					style={styles.textInputStyle}
					multiline={false}
					labelHidden={true}
					containerStyle={styles.textInput}
					placeholder={ischeckdelete ? '' : 'Mesaj yaz...'}
					leftComponent={
						<TouchableOpacity>
							{!ischeckdelete ? (
								<IconSvgMessagePlus />
							) : (
								<TouchableOpacity
									onPress={() => {
										checkDelete();
									}}>
									<IconSvgMessageDeleteBigBox />
								</TouchableOpacity>
							)}
						</TouchableOpacity>
					}
					rightComponent={ischeckdelete ? <SidText style={styles.deleteMessage}>1 Mesaj Seçildi</SidText> : null}
				/>
				{!ischeckdelete ? (
					<View style={styles.cameramicrophone}>
						<TouchableOpacity style={styles.iconPhoto}>
							<IconSvgMessageCamera />
						</TouchableOpacity>
						<TouchableOpacity>
							<IconSvgMessageMicrofone />
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.sidMessageDetailBackGroundColor,
		width: '100%',
		padding: 0,
	},
	topContainer: {
		backgroundColor: colors.white,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: scaledWidth(20),
		paddingTop: scaledHeight(50),
		paddingBottom: scaledHeight(30),
		borderBottomLeftRadius: scaledWidth(30),
		borderBottomRightRadius: scaledWidth(30),
	},
	topContainerCenter: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: scaledWidth(80),
	},
	topContainerRight: {},
	image: {
		position: 'relative',
		width: scaledWidth(64),
		height: scaledHeight(64),
		borderRadius: scaledWidth(64),
		marginRight: scaledWidth(20),
	},
	centerFirstText: {
		fontSize: scaledWidth(16),
		fontFamily: fonts.Bold,
	},
	centerSecondText: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.Bold,
	},
	smallIcon: {
		position: 'absolute',
		right: scaledWidth(14),
		bottom: 0,
	},
	textDay: {
		paddingTop: scaledHeight(5),
		alignItems: 'center',
		justifyContent: 'center',
		color: 'rgba(93, 96, 102, 1)',
	},
	bottomContainer: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		borderTopRightRadius: scaledWidth(30),
		borderTopLeftRadius: scaledWidth(30),
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: scaledHeight(15),
		paddingVertical: scaledWidth(25),
	},
	textInput: {
		backgroundColor: colors.sidMessageDetailBackGroundColor,
		paddingLeft: scaledWidth(50),
		justifyContent: 'center',
		borderRadius: scaledWidth(20),
		width: scaledWidth(280),
		height: scaledHeight(44),
		marginRight: scaledWidth(5),
		borderBottomWidth: 0,
		marginLeft: scaledWidth(15),
		marginBottom: scaledHeight(30),
		marginTop: scaledHeight(18),
	},
	textInputStyle: {
		borderBottomWidth: 0,
	},
	cameramicrophone: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: padding[1],
		marginBottom: scaledHeight(30),
		marginTop: scaledHeight(18),
	},
	iconPhoto: {
		paddingRight: padding[5],
	},
	sentMessageView: {
		flexDirection: 'row',
		position: 'relative',
		alignItems: 'center',
	},
	sentMessage: {
		flexDirection: 'row',
		height: scaledHeight(40),
		backgroundColor: colors.sidOrangeColor,
		justifyContent: 'space-between',
		borderRadius: scaledWidth(16),
		borderBottomRightRadius: 0,
		padding: padding[2],
		marginTop: scaledHeight(10),
		marginHorizontal: scaledWidth(20),
		alignSelf: 'flex-end',
	},
	checkBoxBounce: {
		position: 'absolute',
		zIndex: 9999,
		right: 0,
	},
	messageFirstSwipe: {
		marginTop: scaledHeight(16),
	},
	messageSecondSwipe: {
		marginTop: scaledHeight(30),
		marginRight: scaledWidth(4),
	},
	messageOtherSwipe: {
		marginTop: scaledHeight(26),
	},
	textMessageSwipe: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.Light,
		color: 'gray',
	},
	swipe: {
		paddingTop: scaledHeight(15),
		paddingLeft: scaledWidth(6),
	},
	textMessageColor: {
		color: colors.white,
		fontFamily: fonts.Bold,
		fontSize: scaledWidth(16),
		marginRight: scaledWidth(16),
	},
	inbox: {
		position: 'relative',
		flexDirection: 'row',
		backgroundColor: colors.sidBlueColor,
		justifyContent: 'space-between',
		borderRadius: scaledWidth(16),
		borderBottomLeftRadius: 0,
		padding: padding[2],
		marginTop: scaledHeight(10),
		marginHorizontal: scaledWidth(20),
		alignSelf: 'flex-start',
	},
	sheetText: {
		color: colors.white,
		fontSize: scaledWidth(14),
		fontFamily: fonts.Bold,
	},
	delete: {
		padding: padding[2],
		borderBottomWidth: 0.3,
		borderBottomColor: 'gray',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	copy: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: padding[2],
	},
	modalsheet: {
		backgroundColor: colors.black,
		borderRadius: 10,
		paddingVertical: 20,
	},
	modalBg: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	modalView: {
		backgroundColor: colors.black,
		borderRadius: scaledWidth(10),
		padding: padding[3],
		justifyContent: 'space-evenly',
	},
	deleteMessage: {
		padding: padding[2],
		color: colors.sidOrangeColor,
		fontFamily: fonts.Bold,
	},
	iconStyleCheckBox: {
		width: scaledWidth(12),
		height: scaledHeight(12),
		backgroundColor: colors.sidMessageDetailBackGroundColor,
	},
	innerIconStyles: {
		width: scaledWidth(24),
		height: scaledHeight(24),
	},
});
export default MessageDetailScreen;
