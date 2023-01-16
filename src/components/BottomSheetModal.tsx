import BottomTabMenuBackgroundSvg from '@/assets/svg/bottomTabMenu/BottomTabMenuBackgroundSvg';
import IconSvgBottomMenu from '@/assets/svg/bottomTabMenu/IconSvgBottomMenu';
import IconSvgHayLav from '@/assets/svg/bottomTabMenu/IconSvgHayLav';
import IconSvgLoose from '@/assets/svg/bottomTabMenu/IconSvgLoose';
import IconSvgModalCloseMenu from '@/assets/svg/bottomTabMenu/IconSvgModalCloseMenu';
import IconSvgOwner from '@/assets/svg/bottomTabMenu/IconSvgOwner';
import IconSvgPetAdd from '@/assets/svg/bottomTabMenu/IconSvgPetAdd';
import IconSvgSidStore from '@/assets/svg/bottomTabMenu/IconSvgSidStore';
import IconSvgWalkProgram from '@/assets/svg/bottomTabMenu/IconSvgWalkProgram';
import {colors, fonts} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import SidText from './SidText';
const BottomSheetModal = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.all}>
			<TouchableOpacity
				style={styles.bottomMenu}
				onPressIn={() => {
					setModalVisible(true);
				}}>
				<IconSvgBottomMenu />
			</TouchableOpacity>
			<View style={styles.container}>
				<Modal backdropOpacity={0.1} isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)} style={styles.contentView}>
					<View style={styles.content}>
						<View style={styles.bottomtabmenubackground}>
							<BottomTabMenuBackgroundSvg />
						</View>
						<TouchableOpacity
							style={styles.openclosemenubutton}
							onPressIn={() => {
								setModalVisible(false);
							}}>
							<IconSvgModalCloseMenu />
						</TouchableOpacity>
						<View style={styles.menublock}>
							<View style={styles.rowblock}>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}> Yürüyüş Programları</SidText>
									<IconSvgWalkProgram />
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}>HavLav</SidText>
									<IconSvgHayLav />
								</TouchableOpacity>
							</View>
							<View style={styles.rowblock}>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}>Sid Store</SidText>
									<IconSvgSidStore />
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}>Sahiplendirme</SidText>
									<IconSvgOwner />
								</TouchableOpacity>
							</View>
							<View style={styles.rowblock}>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}> Kayıp - Çalıntı </SidText>
									<SidText style={styles.boxtext}> İlanları</SidText>
									<IconSvgLoose />
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.box}
									onPress={() => {
										setModalVisible(false);
									}}>
									<SidText style={styles.boxtext}>Pet Ekle</SidText>
									<IconSvgPetAdd />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	all: {
		flex: 1,
	},
	bottomMenu: {
		marginTop: scaledHeight(-40),
	},
	content: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: scaledWidth(404),
		height: scaledHeight(494),
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 52,
	},
	contentView: {
		justifyContent: 'flex-end',
		margin: 0,
		width: scaledWidth(414),
		height: scaledHeight(494),
	},
	buttonStyle: {
		flex: 1,
	},
	bottomtabmenubackground: {
		zIndex: 0,
		position: 'absolute',
	},
	container: {
		flex: 1,
	},
	openclosemenubutton: {
		position: 'absolute',
		marginBottom: scaledHeight(460),
	},
	box: {
		width: scaledWidth(160),
		height: scaledHeight(104),
		backgroundColor: colors.white,
		borderRadius: scaledWidth(17),
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	boxtext: {
		color: colors.sidBlueColor,
		fontSize: scaledWidth(15),
		fontFamily: fonts.Bold,
		alignItems: 'stretch',
		alignContent: 'center',
	},
	menublock: {
		width: scaledWidth(414),
		height: scaledHeight(484),
	},
	rowblock: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingTop: scaledHeight(40),
	},
});

export default BottomSheetModal;
