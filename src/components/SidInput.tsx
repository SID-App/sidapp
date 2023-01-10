import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {forwardRef, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import SidText from './SidText';
type SidInputProps = {
	label?: React.ReactNode | React.ReactNode[];
	labelHidden?: boolean;
	rightComponent?: React.ReactNode;
	error?: string | boolean;
	containerStyle?: any;
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
			style={[styles.compStyle, props.containerStyle]}
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
				style={[
					styles.textInput,
					props.style,
					{
						borderBottomColor: props.error ? colors.errorBorderColor : colors.borderColor,
						marginBottom: props.error ? scaledHeight(4) : scaledHeight(0),
					},
				]}
				allowFontScaling={false}
				placeholderTextColor={colors.textPlaceHolderColor}
			/>
			{props.error && <SidText style={styles.errorText}>{props.error}</SidText>}
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
	errorText: {
		fontSize: scaledWidth(12),
		color: colors.errorTextColor,
	},
});
export default SidInput;
