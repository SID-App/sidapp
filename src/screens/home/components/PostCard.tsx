import IconSvgHomeInstgramComment from '@/assets/svg/IconSvgHomeInstgramComment';
import IconSvgHeart from '@/assets/svg/IconSvgHomeInstgramHeart';
import {colors, fonts} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextHelper} from '../helpers/TextHelper';

type props = {
	name: string;
	source: any;
};

export const PostCard: React.FC<props> = props => {
	//Follow Button
	const [count] = useState(0);
	const [follow, setFollow] = useState(false);
	const followSet = () => {
		if (follow) {
			setFollow(false);
		} else {
			setFollow(true);
		}
	};

	//like button

	const [like, setLike] = useState(false);
	const likeSet = () => {
		setLike(!like);
	};

	return (
		<View style={styles.container}>
			<View style={styles.topcontainer}>
				<TouchableOpacity style={[styles.historyItemContainer]}>
					<Image
						style={styles.history}
						source={{
							uri: props.source,
						}}
					/>
					<Text style={styles.historyName}>{TextHelper.getUserHistoryName(props.name)}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.followView,
						{backgroundColor: follow ? colors.sidOrangeColor : colors.white, borderColor: follow ? colors.sidOrangeColor : colors.white},
					]}
					onPress={followSet}>
					<Text style={[styles.textFollow, {color: follow ? colors.white : colors.sidOrangeColor}]}>{follow ? 'Takip ettin' : 'Takip et'} </Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.photo}>
				<Image
					style={styles.photocard}
					source={{
						uri: props.source,
					}}
				/>
			</TouchableOpacity>
			<View style={styles.bottomPart}>
				<TouchableOpacity style={styles.leftbottomPart} onPress={likeSet}>
					<IconSvgHeart color={like ? 'red' : 'none'} />
					<Text style={styles.textBottompPart}>{count} beğenme</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.rightbottomPart}>
					<IconSvgHomeInstgramComment />
					<Text style={styles.textBottompPart}>14</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: scaledHeight(20),
		marginTop: scaledHeight(20),
	},
	topcontainer: {
		paddingVertical: scaledHeight(10),
		paddingHorizontal: scaledWidth(15),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	history: {
		height: scaledHeight(40),
		width: scaledWidth(40),
		borderRadius: scaledWidth(20),
	},
	historyItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	historyName: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.Bold,
		color: colors.black,
		paddingLeft: scaledWidth(5),
	},
	followView: {
		borderRadius: scaledWidth(5),
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.09,
		shadowRadius: 3.6,
		elevation: 4,
	},
	textFollow: {
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: fonts.Bold,
		fontSize: scaledWidth(14),
		marginVertical: scaledHeight(5),
		marginHorizontal: scaledWidth(10),
	},
	textButtonTouch: {
		width: 69,
		height: 19,
		borderRadius: 5,
		backgroundColor: colors.sidOrangeColor,
		marginLeft: 129,
	},
	textButton: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,

		marginLeft: 8,
		marginTop: 3,
		fontWeight: '700',
		fontSize: 10,
	},
	photo: {
		width: '100%',
		height: scaledHeight(280),
	},
	photocard: {
		flex: 1,
	},
	bottomPart: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: scaledWidth(15),
		backgroundColor: colors.white,
	},
	textBottompPart: {
		fontSize: scaledWidth(12),
		fontFamily: fonts.SemiBold,
		color: 'gray',
		marginLeft: scaledWidth(10),
	},
	leftbottomPart: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rightbottomPart: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
});
