import IconHomeInstgramSvgTopRing from '@/assets/svg/IconHomeInstgramSvgTopRing';
import IconHomeInstgramSvgVectorDown from '@/assets/svg/IconHomeInstgramSvgVectorDown';
import IconMenuInstgramSvg from '@/assets/svg/IconMenuInstgramSvg';
import SidText from '@/components/SidText';
import {colors, padding} from '@/theme';
import {scaledWidth} from '@/utils/responsive';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type InstgramHomeHeaderBarParams = {};

const InstgramHomeHeaderBar: React.FC<InstgramHomeHeaderBarParams> = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<IconMenuInstgramSvg />
			</TouchableOpacity>
			<View style={styles.topBarVectorText}>
				<SidText style={styles.topBarText}>Önerilen</SidText>
				<TouchableOpacity>
					<IconHomeInstgramSvgVectorDown />
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.headerIconTopRing}>
				<SidText style={styles.headerTextTopRing}>3</SidText>
				<IconHomeInstgramSvgTopRing />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.sidBlueColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: padding[5],
		paddingTop: padding[10],
		paddingBottom: padding[3],
	},
	topBarVectorText: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	topBarText: {
		fontSize: scaledWidth(20),
		color: colors.white,
		padding: padding[1],
	},
	headerIconTopRing: {
		position: 'relative',
	},
	headerTextTopRing: {
		position: 'absolute',
		right: 0,
		backgroundColor: 'orange',
		color: colors.white,
		fontSize: scaledWidth(12),
		paddingHorizontal: scaledWidth(4),
		borderRadius: scaledWidth(10),
		zIndex: 1,
		overflow: 'hidden',
	},
});

export default InstgramHomeHeaderBar;
