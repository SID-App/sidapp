import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidCheckbox from '@/components/SidCheckbox';
import SidInput from '@/components/SidInput';
import SidText from '@/components/SidText';
import {SignUpStackParams} from '@/navigation/auth/SignUpStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SwiperFlatList from 'react-native-swiper-flatlist';

type GeneralInformationScreenParams = NativeStackScreenProps<SignUpStackParams, 'GeneralInformationScreen'>;

const GeneralInformationScreen: React.FC<GeneralInformationScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const floatingContainerRef = useRef<View>(null);
	const [floatingContainerDimension, setFloatingContainerDimension] = useState({width: 0, height: 0});
	const [carouselItems, setCarouselItems] = useState([
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
	return (
		<View style={styles.container}>
			<View style={{height: dimension.height * 0.4, width: dimension.width, position: 'absolute'}}>
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
						height: dimension.height * 0.6,
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
				<SidInput style={styles.input} placeholder="İsim" label={<SidText style={styles.inputLabel}>İsim</SidText>} />
				<SidInput style={styles.input} placeholder="email@adress.com" label={<SidText style={styles.inputLabel}>Email</SidText>} />
				<SidInput style={styles.input} placeholder="05534581717" label={<SidText style={styles.inputLabel}>Telefon</SidText>} />
				<SidInput
					multiline={false}
					labelHidden={true}
					style={styles.inputSmall}
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
				<TouchableOpacity>
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
		top: -100,
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(54),
		fontFamily: fonts.SemiBold,
		color: colors.white,
	},
});
export default GeneralInformationScreen;
