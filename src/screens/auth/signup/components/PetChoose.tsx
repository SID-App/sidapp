import BirdSvg from '@/assets/svg/BirdSvg';
import CatSvg from '@/assets/svg/CatSvg';
import DogSvg from '@/assets/svg/DogSvg';
import FishSvg from '@/assets/svg/FishSvg';
import HorseSvg from '@/assets/svg/HorseSvg';
import MonkeySvg from '@/assets/svg/MonkeySvg';
import OthersSvg from '@/assets/svg/OthersSvg';
import RabbitSvg from '@/assets/svg/RabbitSvg';
import SquirrelSvg from '@/assets/svg/SquirrelSvg';
import SidText from '@/components/SidText';
import {colors, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';

type PetChooseProps = {};

const PetChoose: React.FC<PetChooseProps> = () => {
	const [selectState, setSelectState] = useState<number>();
	const data = [
		{
			name: 'Kedi',
			svgName: <CatSvg />,
		},
		{
			name: 'Köpek',
			svgName: <DogSvg />,
		},
		{
			name: 'Kuş',
			svgName: <BirdSvg />,
		},
		{
			name: 'Sincap',
			svgName: <SquirrelSvg />,
		},
		{
			name: 'Tavşan',
			svgName: <RabbitSvg />,
		},
		{
			name: 'Maymun',
			svgName: <MonkeySvg />,
		},
		{
			name: 'At',
			svgName: <HorseSvg />,
		},
		{
			name: 'Balık',
			svgName: <FishSvg />,
		},
		{
			name: 'Diğer',
			svgName: <OthersSvg />,
		},
	];

	return (
		<View style={styles.petChooseAllView}>
			<FlatList
				data={data}
				contentContainerStyle={styles.flatList}
				numColumns={3}
				renderItem={({item, index}) => (
					<View>
						<TouchableOpacity
							onPressIn={() => setSelectState(index)}
							style={[styles.petCard, {backgroundColor: index === selectState ? colors.sidBlueColor : colors.white}]}>
							<View style={styles.petChooseColumnView}>
								<View style={styles.svg}>{item.svgName}</View>
								<View>
									<SidText style={styles.petText}>{item.name}</SidText>
								</View>
							</View>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	petChooseAllView: {
		flex: 1,
		paddingTop: scaledHeight(10),
	},
	flatList: {
		flexDirection: 'column',
	},
	petChooseRowView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	petChooseColumnView: {
		flexDirection: 'row',
		alignItems: 'center',
		width: scaledWidth(105),
		padding: scaledWidth(1),
	},
	petText: {
		marginLeft: scaledWidth(5),
	},
	petCard: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: scaledWidth(5),
		width: scaledWidth(105),
		borderColor: colors.black,
		borderRadius: scaledWidth(8),
		shadowColor: colors.black,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1,
		elevation: 4,
		padding: padding[1],
	},
	svg: {
		marginVertical: 5,
	},
});
export default PetChoose;
