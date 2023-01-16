import React from 'react';
import {StyleSheet, Text, Alert, TouchableOpacity, Dimensions, View} from 'react-native';
import {colors} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';

const TopSheetModal = ({sheetPosition}: any) => {
	const dimension = Dimensions.get('window');
	const options = [
		{
			title: 'Takip Ettiklerin',
			onPress: () => {},
			action: () => Alert.alert('Takip Ettiklerin'),
		},
		{
			title: 'Keşfet',
			onPress: () => {},
			action: () => Alert.alert('Keşfet'),
		},
	];
	return (
		<View
			style={[
				styles.popup,
				{
					width: dimension.width * 0.5,
					height: dimension.height * 0.13,
					top: sheetPosition.y + 40,
					left: dimension.width / 2 - (dimension.width * 0.5) / 2,
				},
			]}>
			{options.map((op, i) => (
				<View style={[styles.modalView, {borderBottomWidth: i === options.length - 1 ? 0 : 1}]} key={i}>
					<TouchableOpacity style={styles.option} onPress={op.onPress}>
						<Text style={styles.text}>{op.title} </Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
};

export default TopSheetModal;

const styles = StyleSheet.create({
	text: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		color: colors.white,
		position: 'absolute',
		fontSize: scaledWidth(15),
		fontWeight: '700',
		marginTop: scaledHeight(30),
	},
	popup: {
		position: 'absolute',
		backgroundColor: colors.sidBlueColor,
		opacity: 0.9,
		borderRadius: 12,
		zIndex: 999999,
	},
	option: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 29,
		marginLeft: scaledWidth(0),
		marginTop: scaledHeight(-15),
		borderBottomColor: colors.white,
		borderBottomLeftRadius: -5,
	},
	modalView: {
		borderColor: colors.white,
	},
});
