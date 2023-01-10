import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidCheckbox from '@/components/SidCheckbox';
import SidInput from '@/components/SidInput';
import SidText from '@/components/SidText';
import {SignInStackParams} from '@/navigation/auth/SignInStack';
import {SignUpStackParams} from '@/navigation/auth/SignUpStack';
import {SignUpFormType} from '@/redux/auth/signUpSlce';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import * as yup from 'yup';

type GeneralInformationScreenParams = CompositeScreenProps<
	NativeStackScreenProps<SignUpStackParams, 'GeneralInformationScreen'>,
	NativeStackScreenProps<SignInStackParams>
>;

const GeneralInformationScreen: React.FC<GeneralInformationScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const floatingContainerRef = useRef<View>(null);
	const [floatingContainerDimension, setFloatingContainerDimension] = useState({width: 0, height: 0});
	const [carouselItems] = useState([
		{
			id: 1,
			image: require('@/assets/images/auth-slider1.jpeg'),
		},
		{
			id: 2,
			image: require('@/assets/images/auth-slider2.jpeg'),
		},
		{
			id: 3,
			image: require('@/assets/images/auth-slider3.jpeg'),
		},
	]);
	const signUpForm = useFormik<SignUpFormType>({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			isconfirmed: false,
		},
		onSubmit: () => {},
		validationSchema: yup.object({
			name: yup.string().required('isim alanı zorunludur'),
			email: yup.string().required('email alanı zorunludur').email('email formatı geçersiz'),
		}),
	});
	return (
		<View style={styles.container}>
			<View style={[styles.slider, {height: dimension.height * 0.4, width: dimension.width}]}>
				<SwiperFlatList
					disableGesture
					autoplay
					autoplayDelay={2}
					autoplayLoop
					autoplayLoopKeepAnimation
					index={0}
					showPagination={false}
					data={carouselItems}
					renderItem={({item}) => <Image source={item.image} style={{height: dimension.height * 0.4, width: dimension.width}} />}
				/>
			</View>
			<Image source={require('@/assets/images/authbg.png')} style={{height: dimension.height, width: dimension.width}} resizeMode="stretch" />
			<View
				style={[
					styles.floatingContainer,
					{
						width: dimension.width * 0.9,
						height: dimension.height * 0.61,
						left: dimension.width / 2,
						top: dimension.height / 2,
						transform: [
							{
								translateX: -(dimension.width * 0.9) / 2,
							},
							{
								translateY: -(dimension.height * 0.6 * 0.7) / 2,
							},
						],
					},
				]}>
				<SidText style={styles.floatingText}>Kayıt Ol</SidText>
				<SidInput
					onChangeText={signUpForm.handleChange('name')}
					onBlur={signUpForm.handleBlur('name')}
					value={signUpForm.values.name}
					containerStyle={styles.input}
					placeholder="İsim"
					label={<SidText style={styles.inputLabel}>İsim</SidText>}
					error={signUpForm.errors.name}
				/>
				<SidInput
					onChangeText={signUpForm.handleChange('email')}
					onBlur={signUpForm.handleBlur('email')}
					value={signUpForm.values.email}
					containerStyle={styles.input}
					placeholder="email@adress.com"
					label={<SidText style={styles.inputLabel}>Email</SidText>}
					error={signUpForm.errors.email}
				/>

				<SidInput containerStyle={styles.input} placeholder="05534581717" label={<SidText style={styles.inputLabel}>Telefon</SidText>} />
				<SidInput
					multiline={false}
					labelHidden={true}
					containerStyle={styles.inputSmall}
					placeholder="Arkadaş vasıtasıyla mı geldin? Kodu gir ya da"
					rightComponent={<SidText style={{color: colors.sidBlueColor, fontFamily: fonts.SemiBold, fontSize: scaledHeight(12)}}>QR Ekle</SidText>}
				/>
				<SidCheckbox isActive={true} style={styles.sidCheckBox}>
					<View style={styles.checkBoxTextContainer}>
						<TouchableOpacity>
							<SidText style={styles.linkButton}>Kullanım Şartları</SidText>
						</TouchableOpacity>
						<SidText style={styles.defaultText}>'nı ve</SidText>
						<TouchableOpacity>
							<SidText style={styles.linkButton}> Gizlilik Politikası</SidText>
						</TouchableOpacity>
						<SidText style={styles.defaultText}>'nı okudum, anladım ve kabul ediyorum.</SidText>
					</View>
				</SidCheckbox>
				<View style={styles.buttonContainer}>
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('CodeScreen')}>
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
				<SidText style={styles.loginText}>Zaten bir hesabın var?</SidText>
				<TouchableOpacity onPress={() => navigation.replace('SignInStack')}>
					<SidText style={styles.loginLinkText}>Giriş yap</SidText>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	slider: {
		position: 'absolute',
	},
	floatingContainer: {
		position: 'absolute',
		backgroundColor: colors.white,
		padding: padding[10],
		borderRadius: scaledWidth(36),
		zIndex: 9999,
	},
	inputLabel: {
		color: colors.black,
		fontSize: scaledHeight(16),
		fontFamily: fonts.SemiBold,
	},
	input: {
		marginBottom: scaledHeight(24),
	},
	inputSmall: {
		fontSize: scaledWidth(12),
		paddingRight: scaledWidth(52),
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
	sidCheckBox: {
		marginTop: scaledHeight(33),
	},
	checkBoxTextContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	defaultText: {
		fontSize: scaledWidth(12),
		fontFamily: fonts.Bold,
		color: colors.black,
	},
	linkButton: {
		color: colors.sidBlueColor,
		fontFamily: fonts.Bold,
		fontSize: scaledWidth(12),
		textDecorationLine: 'underline',
	},
	textCheckBox: {
		fontSize: scaledWidth(12),
		fontFamily: fonts.Light,
		fontWeight: '500',
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
		top: scaledHeight(-100),
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(54),
		fontFamily: fonts.SemiBold,
		color: colors.white,
	},
});
export default GeneralInformationScreen;
