import {scaledWidth} from '@/utils/responsive';
import React from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps, View} from 'react-native';

type SidButtonProps = {rightIcon?: React.ReactNode} & TouchableOpacityProps;

const SidButton: React.FC<SidButtonProps> = props => {
	return (
		<View>
			<TouchableOpacity activeOpacity={0.7} {...props} style={[props.style]}>
				{props.children}
				{props.rightIcon && <View style={styles.rightIconContainer}>{props.rightIcon}</View>}
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	rightIconContainer: {
		marginLeft: scaledWidth(14),
	},
});
export default SidButton;
