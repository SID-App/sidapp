import {colors, fonts, padding} from '@/theme';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpStackParams} from '@/navigation/auth/SignUpStack';
import SidBarNav from './components/SidBarNav';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import SidButton from '@/components/SidButton';
import SidText from '@/components/SidText';
import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SuccessCheckSvg from '@/assets/svg/SuccessCheckSvg';

type SignUpSuccessScreenProps = NativeStackScreenProps<SignUpStackParams, 'SignUpSuccessScreen'>;
const SignUpSuccessScreen: React.FC<SignUpSuccessScreenProps> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	return (
		<View style={styles.container}>
			<SidBarNav onGoBack={() => navigation.goBack()} activeIndex={1} logo={false} />
			<View
				style={[
					styles.floatingContainer,
					{
						width: dimension.width * 0.9,
						height: dimension.height * 0.3 + 56,
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
				<View style={styles.textView}>
					<View style={styles.successCheck}>
						<SuccessCheckSvg />
					</View>
					<SidText style={styles.textFirst}>Tebrikler Kayıt Oldunuz.</SidText>
					<SidText style={styles.textTwo}>Şimdi kişisel bilgilerini girmelisin</SidText>
				</View>
				<View style={styles.buttonContainer}>
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('ChoosePathCategoryScreen')}>
						<SidText style={styles.buttonTextStyle}>Devam</SidText>
					</SidButton>
				</View>
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
		backgroundColor: colors.white,
		borderRadius: scaledWidth(18),
		shadowColor: '#000',
		elevation: 4,
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.09,
		shadowRadius: 3.6,
		paddingTop: scaledHeight(20),
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
		borderBottomRightRadius: scaledWidth(18),
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
	textView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	successCheck: {
		width: '100%',
		alignItems: 'center',
	},
	textFirst: {
		fontSize: scaledWidth(24),
		fontFamily: fonts.Bold,
		color: colors.sidBlueColor,
		paddingBottom: scaledHeight(14),
	},
	textTwo: {
		fontSize: scaledWidth(16),
		fontFamily: fonts.Light,
		color: colors.black,
	},
});
export default SignUpSuccessScreen;
