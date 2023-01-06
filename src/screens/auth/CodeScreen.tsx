import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidCodeInput from '@/components/SidCodeInput';
import SidText from '@/components/SidText';
import {SignUpStackParams} from '@/navigation/auth/SignUpStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type CodeScreenParams = NativeStackScreenProps<SignUpStackParams, 'CodeScreen'>;

const CodeScreen: React.FC<CodeScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const floatingContainerRef = useRef<View>(null);
	const [floatingContainerDimension, setFloatingContainerDimension] = useState({width: 0, height: 0});
	return (
		<KeyboardAwareScrollView style={styles.container}>
			<Image source={require('@/assets/images/authbg.png')} style={{height: dimension.height, width: dimension.width}} resizeMode="stretch" />
			<View
				style={[
					styles.floatingContainer,
					{
						width: dimension.width * 0.9,
						height: dimension.height * 0.5 + 56,
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
				<SidText style={styles.floatingText}>Kayıt Ol</SidText>
				<SidText style={styles.textBold}>Cep telefonunuza gelen kodu giriniz</SidText>
				<SidText style={styles.textFirst}>Lütfen mesajlarınızı kontrol edin ve</SidText>
				<SidText style={styles.textFirst}>
					<SidText style={{fontFamily: fonts.Bold}}>(+90) 012-345-6789</SidText> numarasına gönderdiğimiz kodu girin.
				</SidText>
				<View style={styles.codeInput}>
					<SidCodeInput containerStyle={{width: scaledWidth(26)}} onComplete={() => {}} />
				</View>
				<SidText style={styles.textTwo}>
					Kodun gelmesi zaman alabilir, eğer hiç kod almadıysanız lütfen
					<TouchableOpacity>
						<SidText style={styles.textButton}> Tekrar Kod Gönder </SidText>
					</TouchableOpacity>
					’e basın.
				</SidText>
				<View style={styles.buttonContainer}>
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('SignUpSuccessScreen')}>
						<SidText style={styles.buttonTextStyle}>Devam</SidText>
					</SidButton>
				</View>
			</View>
			<View
				ref={floatingContainerRef}
				onLayout={event => {
					setFloatingContainerDimension({
						width: event.nativeEvent.layout.width,
						height: event.nativeEvent.layout.height,
					});
				}}
				style={[
					styles.floatingLoginContainer,
					{
						bottom: dimension.height * 0.05,
						left: dimension.width / 2,
						transform: [
							{
								translateX: -floatingContainerDimension.width / 2,
							},
						],
					},
				]}>
				<SidText style={styles.loginText}>Zaten bir hesabın var mı?</SidText>
				<TouchableOpacity>
					<SidText style={styles.loginLinkText}>Giriş yap</SidText>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	floatingContainer: {
		position: 'absolute',
		backgroundColor: colors.white,
		padding: padding[5],
		borderRadius: scaledWidth(36),
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
	textBold: {
		fontSize: scaledWidth(18),
		fontFamily: fonts.Bold,
		marginTop: scaledHeight(24),
		color: colors.black,
	},
	textFirst: {
		fontSize: scaledWidth(14),
		color: '#4D4D4D',
		textAlign: 'center',
	},
	textTwo: {
		fontSize: scaledWidth(14),
		color: '#5C5C5C',
		textAlign: 'center',
		marginBottom: scaledHeight(90),
		fontFamily: fonts.Bold,
	},
	textButton: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.Bold,
		color: colors.sidBlueColor,
		textDecorationLine: 'underline',
		textAlign: 'center',
	},
	floatingLoginContainer: {
		flexDirection: 'row',
		position: 'absolute',
	},
	loginText: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.SemiBold,
		color: colors.white,
		marginRight: scaledWidth(4),
	},
	loginLinkText: {
		fontSize: scaledWidth(14),
		fontFamily: fonts.Bold,
		color: colors.white,
	},
	floatingText: {
		top: -100,
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(54),
		fontFamily: fonts.SemiBold,
		color: colors.black,
	},
	codeInput: {
		flex: 1,
		paddingHorizontal: scaledWidth(18),
	},
});
export default CodeScreen;
