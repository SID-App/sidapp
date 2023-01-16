import React, {SVGProps} from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSvgMenuAddPet: React.FC<SVGProps<any>> = () => {
	return (
		<>
			<Svg width={18} height={18} viewBox="0 0  18 18" fill="none">
				<Path
					d="M9 0C4.041 0 0 4.041 0 9C0 13.959 4.041 18 9 18C13.959 18 18 13.959 18 9C18 4.041 13.959 0 9 0ZM12.6 9.675H9.675V12.6C9.675 12.969 9.369 13.275 9 13.275C8.631 13.275 8.325 12.969 8.325 12.6V9.675H5.4C5.031 9.675 4.725 9.369 4.725 9C4.725 8.631 5.031 8.325 5.4 8.325H8.325V5.4C8.325 5.031 8.631 4.725 9 4.725C9.369 4.725 9.675 5.031 9.675 5.4V8.325H12.6C12.969 8.325 13.275 8.631 13.275 9C13.275 9.369 12.969 9.675 12.6 9.675Z"
					fill="white"
				/>
			</Svg>
		</>
	);
};
export default IconSvgMenuAddPet;
