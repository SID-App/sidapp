import IconSvgMessageCallButton from '@/assets/svg/messageDetaiSvg/IconSvgMessageCallButton';
import IconSvgMessagePageVectorLeft from '@/assets/svg/messageDetaiSvg/IconSvgMessagePageVectorLeft';
import IconSvgMessageSmallIcon from '@/assets/svg/messageDetaiSvg/IconSvgMessageSmallIcon';
import SidText from '@/components/SidText';
import {MessageStackParams} from '@/navigation/message/MessageStack';
import {colors, fonts} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {HistoryData} from '../home/store/HistoryData';
type MessageDetailScreenParams = NativeStackScreenProps<MessageStackParams, 'MessageDetailScreen'>;
const MessageDetailScreen: React.FC<MessageDetailScreenParams> = ({navigation}) => {
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
			<ScrollView></ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
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
	topContainerLeft: {},
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
});
export default MessageDetailScreen;
