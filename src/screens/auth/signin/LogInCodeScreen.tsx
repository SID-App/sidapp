import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidCodeInput from '@/components/SidCodeInput';
import SidText from '@/components/SidText';
import {AppStackNavigatorParams} from '@/navigation/app/AppStack';
import {SignInStackParams} from '@/navigation/auth/SignInStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SwiperFlatList from 'react-native-swiper-flatlist';

type LogInCodeScreenParams = CompositeScreenProps<
	NativeStackScreenProps<SignInStackParams, 'LogInCodeScreen'>,
	NativeStackScreenProps<AppStackNavigatorParams>
>;

const LogInCodeScreen: React.FC<LogInCodeScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
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
	return (
		<KeyboardAwareScrollView style={styles.container}>
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
				<SidText style={styles.floatingText}>Giriş Yap</SidText>
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
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('AppStack')}>
						<SidText style={styles.buttonTextStyle}>Devam</SidText>
					</SidButton>
				</View>
			</View>
		</KeyboardAwareScrollView>
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
	floatingText: {
		top: -100,
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(54),
		fontFamily: fonts.SemiBold,
		color: colors.white,
	},
	codeInput: {
		flex: 1,
		paddingHorizontal: scaledWidth(18),
	},
});
export default LogInCodeScreen;
