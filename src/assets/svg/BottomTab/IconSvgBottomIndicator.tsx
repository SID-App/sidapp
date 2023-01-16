import React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSvgBottomIndicator: React.FC = () => {
	return (
		<>
			<Svg style={{zIndex: 1, flex: 1}} width={39} height={36} viewBox="0 0  39 5" fill="none">
				<Path
					d="M10.8397 5.00001C14.6887 -1.66665 24.3113 -1.66667 28.1603 5L37.2535 20.75C41.1025 27.4167 36.2913 35.75 28.5933 35.75H10.4067C2.70874 35.75 -2.10252 27.4167 1.74648 20.75L10.8397 5.00001Z"
					fill="#fff"
				/>
			</Svg>
		</>
	);
};
export default IconSvgBottomIndicator;
