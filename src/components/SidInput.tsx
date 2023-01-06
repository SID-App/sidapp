import {colors, fonts, padding} from '@/theme';
import {scaledHeight} from '@/utils/responsive';
import React, {forwardRef, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
type SidInputProps = {
	label?: React.ReactNode | React.ReactNode[];
	labelHidden?: boolean;
	rightComponent?: React.ReactNode;
} & TextInputProps;

const SidInput = forwardRef((props: SidInputProps, ref: any) => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});
	const [rightComponentSize, setRightComponentSize] = useState({
		width: 0,
		height: 0,
	});
	const {labelHidden = false} = props;
	return (
		<View
			style={styles.compStyle}
			onLayout={event => {
				const {width, height} = event.nativeEvent.layout;
				setSize({
					width: width,
					height: height,
				});
			}}>
			{!labelHidden && props.label}
			<TextInput
				ref={ref}
				{...props}
				style={[styles.textInput, props.style]}
				allowFontScaling={false}
				placeholderTextColor={colors.textPlaceHolderColor}
			/>
			{props.rightComponent && (
				<View
					style={[
						styles.rightComponentStyle,
						{
							top: size.height / 2,
							transform: [
								{
									translateY: -rightComponentSize.height / 2,
								},
							],
						},
					]}
					onLayout={event => {
						const {width, height} = event.nativeEvent.layout;
						setRightComponentSize({
							width: width,
							height: height,
						});
					}}>
					{props.rightComponent}
				</View>
			)}
		</View>
	);
});
const styles = StyleSheet.create({
	textInput: {
		paddingHorizontal: 0,
		paddingVertical: padding[1],
		borderBottomColor: colors.borderColor,
		borderBottomWidth: scaledHeight(1),
		fontFamily: fonts.SemiBold,
		color: colors.black,
	},
	rightComponentStyle: {
		position: 'absolute',
		right: 0,
		zIndex: 9999,
	},
	compStyle: {
		position: 'relative',
	},
});
export default SidInput;
