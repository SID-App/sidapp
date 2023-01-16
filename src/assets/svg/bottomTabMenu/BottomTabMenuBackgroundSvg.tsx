import React, {SVGProps} from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const BottomTabMenuBackgroundSvg: React.FC<SVGProps<any>> = () => (
	<Svg width={414} height={501} fill="none">
		<G filter="url(#a)">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M208 55c23.748 0 43-19.252 43-43 0-2.669 2.054-5 4.723-5H407a7 7 0 0 1 7 7v480a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V14a7 7 0 0 1 7-7h153.277C162.946 7 165 9.331 165 12c0 23.748 19.252 43 43 43Z"
				fill="#FF9277"
			/>
		</G>
	</Svg>
);

export default BottomTabMenuBackgroundSvg;
