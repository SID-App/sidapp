import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidText from '@/components/SidText';
import {SignUpStackParams} from '@/navigation/auth/SignUpStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import PetChoose from './components/PetChoose';
import SidBarNav from './components/SidBarNav';

type ChoosePathCategoryScreenProps = NativeStackScreenProps<SignUpStackParams, 'ChoosePathCategoryScreen'>;
const ChoosePathCategoryScreen: React.FC<ChoosePathCategoryScreenProps> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const floatingTextRef = useRef<View>(null);
	const [floatingTextDimension, setFloatingTextDimension] = useState({width: 0, height: 0});
	return (
		<View style={styles.container}>
			<SidBarNav onGoBack={() => navigation.goBack()} activeIndex={2} logo={true} />
			<View
				style={[
					styles.floatingContainer,
					{
						width: dimension.width * 0.9,
						height: dimension.height * 0.4 + 56,
						left: dimension.width / 2,
						top: dimension.height / 2,
						transform: [
							{
								translateX: -(dimension.width * 0.9) / 2,
							},
							{
								translateY: -(dimension.height * 0.3 + 56) / 2,
							},
						],
					},
				]}>
				<View style={styles.headerTextView}>
					<SidText style={styles.headerText}>Petinizin Kategorisini Seçiniz.</SidText>
				</View>
				<PetChoose />
				<View style={styles.buttonContainer}>
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('ChoosePathCategoryScreen')}>
						<SidText style={styles.buttonTextStyle}>Devam</SidText>
					</SidButton>
				</View>
			</View>
			<View
				ref={floatingTextRef}
				onLayout={event => {
					setFloatingTextDimension({
						width: event.nativeEvent.layout.width,
						height: event.nativeEvent.layout.height,
					});
				}}
				style={[
					styles.floatingTextContainer,
					{
						bottom: dimension.height * 0.15,
						left: dimension.width / 2,
						transform: [
							{
								translateX: -floatingTextDimension.width / 2,
							},
						],
					},
				]}>
				<TouchableOpacity>
					<SidText style={styles.pageLinkText}>Atla</SidText>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.sidOrangeColor,
	},
	floatingContainer: {
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 1)',
		borderRadius: scaledWidth(36),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.09,
		shadowRadius: 3.6,
		elevation: 4,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'flex-end',
		overflow: 'hidden',
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	button: {
		backgroundColor: colors.sidOrangeColor,
		height: scaledHeight(56),
		justifyContent: 'center',
		paddingHorizontal: padding[10],
		borderBottomRightRadius: scaledWidth(28),
		borderBottomLeftRadius: scaledWidth(28),
		borderTopLeftRadius: scaledWidth(28),
		overflow: 'hidden',
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonTextStyle: {
		fontFamily: fonts.Bold,
		color: colors.white,
		fontSize: scaledWidth(14),
	},
	floatingTextContainer: {
		flexDirection: 'row',
		position: 'absolute',
	},
	pageLinkText: {
		fontSize: scaledWidth(20),
		fontFamily: fonts.Bold,
		color: colors.white,
	},
	headerTextView: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: scaledHeight(28),
	},
	headerText: {
		fontSize: scaledWidth(20),
		fontFamily: fonts.Bold,
	},
});
export default ChoosePathCategoryScreen;
