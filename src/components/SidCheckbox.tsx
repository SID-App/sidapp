import React, {useState} from 'react';
import {CheckBoxProps} from '@react-native-community/checkbox';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {colors} from '@/theme';
import CheckBoxCheckSvg from '@/assets/svg/CheckBoxCheckSvg';

type SidCheckboxProps = {label?: string; isActive?: boolean; children?: React.ReactNode} & CheckBoxProps;

const SidCheckbox: React.FC<SidCheckboxProps> = props => {
	const [toggled, setToggled] = useState(props.isActive);
	return (
		<TouchableOpacity activeOpacity={1} style={styles.viewStyle} onPress={() => setToggled(!toggled)}>
			<>
				<View
					style={[
						styles.checkBoxStyle,
						{
							backgroundColor: toggled ? colors.sidCheckboxCheckedBackgroundColor : colors.sidCheckboxBackgroundColor,
							borderColor: toggled ? colors.sidCheckboxCheckedBorderColor : colors.sidCheckboxBorderColor,
						},
					]}>
					{toggled && (
						<View style={[styles.checkedStyle, {}]}>
							<CheckBoxCheckSvg />
						</View>
					)}
				</View>
				{props.children}
			</>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	viewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: scaledHeight(40),
	},
	checkBoxStyle: {
		width: scaledWidth(20),
		height: scaledHeight(20),
		borderWidth: scaledWidth(2),
		marginRight: scaledWidth(12),
		borderRadius: scaledWidth(4),
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkedStyle: {
		width: scaledWidth(8),
		height: scaledHeight(8),
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default SidCheckbox;
