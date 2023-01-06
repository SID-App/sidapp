import {colors, fonts} from '@/theme';
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type SidTextProps = {} & TextProps;
const SidText: React.FC<SidTextProps> = props => {
	return (
		<Text {...props} style={[styles.textStyle, props.style]}>
			{props.children}
		</Text>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		fontFamily: fonts.Regular,
		color: colors.black,
	},
});
export default SidText;
