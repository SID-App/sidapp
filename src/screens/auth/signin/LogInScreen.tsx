import ArrowRightSvg from '@/assets/svg/ArrowRightSvg';
import SidButton from '@/components/SidButton';
import SidInput from '@/components/SidInput';
import SidText from '@/components/SidText';
import {SignInStackParams} from '@/navigation/auth/SignInStack';
import {colors, fonts, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SwiperFlatList from 'react-native-swiper-flatlist';

type LogInScreenParams = NativeStackScreenProps<SignInStackParams, 'LogInScreen'>;

const LogInScreen: React.FC<LogInScreenParams> = ({navigation}) => {
	const dimension = Dimensions.get('window');
	const [carouselItems] = useState([
		{
			id: 1,
			image: require('@/assets/images/login-slider1.jpeg'),
		},
		{
			id: 2,
			image: require('@/assets/images/login-slider2.jpeg'),
		},
		{
			id: 3,
			image: require('@/assets/images/login-slider3.jpeg'),
		},
	]);
	return (
		<KeyboardAwareScrollView style={styles.container}>
			<View style={[styles.slider, {height: dimension.height * 0.9, width: dimension.width}]}>
				<SwiperFlatList
					disableGesture
					autoplay
					autoplayDelay={2}
					autoplayLoop
					autoplayLoopKeepAnimation
					index={0}
					showPagination={false}
					data={carouselItems}
					renderItem={({item}) => <Image source={item.image} style={{height: dimension.height * 0.6, width: dimension.width}} />}
				/>
			</View>
			<Image
				source={require('@/assets/images/loginbackground.png')}
				style={{height: dimension.height, width: dimension.width}}
				resizeMode="stretch"
			/>
			<View
				style={[
					styles.floatingContainer,
					{
						width: dimension.width * 0.9,
						height: scaledHeight(168),
						left: dimension.width / 2,
						top: dimension.height / 2,
						transform: [
							{
								translateX: -(dimension.width * 0.9) / 2,
							},
							{
								translateY: dimension.height / 2 - 412,
							},
						],
					},
				]}>
				<SidText style={styles.floatingText}>Hoş Geldin</SidText>
				<SidText style={styles.floatingTextTwo}>Giriş Yap </SidText>
				<SidInput
					style={styles.input}
					keyboardType="number-pad"
					placeholder="05534581717"
					label={<SidText style={styles.inputLabel}>Telefon numaranı gir</SidText>}
				/>
				<View style={styles.buttonContainer}>
					<SidButton style={styles.button} rightIcon={<ArrowRightSvg />} onPress={() => navigation.navigate('LogInCodeScreen')}>
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
	floatingText: {
		top: scaledHeight(-200),
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(54),
		fontFamily: fonts.SemiBold,
		color: colors.white,
		width: scaledWidth(275),
	},
	floatingTextTwo: {
		top: scaledHeight(-130),
		left: 0,
		position: 'absolute',
		fontSize: scaledWidth(24),
		fontFamily: fonts.SemiBold,
		color: colors.white,
		width: scaledWidth(275),
	},
});
export default LogInScreen;
