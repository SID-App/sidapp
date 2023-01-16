import React, {SVGProps} from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

const IconSvgBottomMenu: React.FC<SVGProps<any>> = () => {
	return (
		<Svg width={71} height={69} viewBox="0 0  71 69" fill="none">
			<Ellipse cx="35.5" cy="34.5" rx="35.5" ry="34.5" fill="#4BD2BE" />
			<Path
				d="M20.3499 37.0268C18.7878 38.5889 18.7878 41.1215 20.3499 42.6836L21.2568 43.5905C22.8189 45.1526 25.3516 45.1526 26.9137 43.5905L32.1964 38.3078C33.7585 36.7457 36.2911 36.7457 37.8532 38.3078L43.1359 43.5905C44.698 45.1526 47.2307 45.1526 48.7928 43.5905L49.6997 42.6836C51.2618 41.1215 51.2618 38.5889 49.6997 37.0268L37.8532 25.1803C36.2911 23.6182 33.7585 23.6182 32.1964 25.1803L20.3499 37.0268Z"
				fill="white"
			/>
		</Svg>
	);
};
export default IconSvgBottomMenu;
