import ChevronLeftSvg from '@/assets/svg/ChevronLeftSvg';
import {colors} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type SidBarProps = {
	activeIndex: number;
	logo?: boolean;
	onGoBack?: () => void;
};
const SidBarNav: React.FC<SidBarProps> = props => {
	const dimension = Dimensions.get('window');
	const {logo = false} = props;
	const logoRef = useRef<View>(null);

	return (
		<View style={{marginTop: scaledHeight(62)}}>
			<TouchableOpacity onPress={() => props.onGoBack && props.onGoBack()} style={styles.chevronLeft}>
				{<ChevronLeftSvg />}
			</TouchableOpacity>
			{logo && (
				<View ref={logoRef}>
					<Text style={{marginLeft: dimension.width / 2, color: colors.white}}>Logo</Text>
				</View>
			)}
			<View {...props} style={styles.bar}>
				<View style={[styles.active, {width: (props.activeIndex * 25).toString() + '%'}]} />
				<View style={styles.passive} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	bar: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: scaledHeight(20),
	},
	active: {
		backgroundColor: colors.sidActiveBarColor,
		height: scaledHeight(4),
		alignItems: 'center',
	},
	passive: {
		backgroundColor: colors.sidPassiveBarColor,
		height: scaledHeight(4),
		alignItems: 'center',
		width: '100%',
	},
	chevronLeft: {
		marginLeft: scaledWidth(22),
	},
});
export default SidBarNav;
