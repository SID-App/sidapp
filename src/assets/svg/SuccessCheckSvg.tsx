import {Circle, G, Path, Svg} from 'react-native-svg';
import React from 'react';
const SuccessCheckSvg: React.FC = () => {
	return (
		<>
			<Svg width="96" height="96" viewBox="0 0 96 96" fill="none">
				<G filter="url(#filter0_d_5_5)">
					<Circle cx="48" cy="48" r="33" fill="#4BD0BD" />
				</G>
				<Path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M37.4634 43.5673L43.8374 50.0577L58.5366 35L64 40.9712L43.8374 62L32 49.2788L37.4634 43.5673Z"
					fill="white"
				/>
			</Svg>
		</>
	);
};
export default SuccessCheckSvg;
