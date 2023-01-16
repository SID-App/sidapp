import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path, Ellipse} from 'react-native-svg';

const IconSvgModalCloseMenu = () => {
	return (
		<Svg style={styles.icon} width={71} height={69} viewBox="0 0  71 69" fill="none">
			<Ellipse cx="35.5" cy="34.5" rx="35.5" ry="34.5" fill="#4BD2BE" />
			<Path
				d="M49.6996 31.744C51.2617 30.1819 51.2617 27.6492 49.6996 26.0871L48.7928 25.1802C47.2307 23.6181 44.698 23.6181 43.1359 25.1802L37.8532 30.4629C36.2911 32.025 33.7584 32.025 32.1963 30.4629L26.9136 25.1802C25.3515 23.6181 22.8189 23.6181 21.2568 25.1802L20.3499 26.0871C18.7878 27.6492 18.7878 30.1819 20.3499 31.744L32.1963 43.5904C33.7584 45.1525 36.2911 45.1525 37.8532 43.5904L49.6996 31.744Z"
				fill="white"
			/>
		</Svg>
	);
};
const styles = StyleSheet.create({
	icon: {
		marginBottom: 460,
	},
});
export default IconSvgModalCloseMenu;
