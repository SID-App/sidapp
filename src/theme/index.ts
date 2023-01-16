import {scaledWidth} from '@/utils/responsive';

const padding = {
	'1': scaledWidth(4),
	'2': scaledWidth(8),
	'3': scaledWidth(12),
	'4': scaledWidth(16),
	'5': scaledWidth(20),
	'6': scaledWidth(24),
	'7': scaledWidth(28),
	'8': scaledWidth(32),
	'9': scaledWidth(36),
	'10': scaledWidth(40),
};
const colors = {
	borderColor: '#C6C6C6',
	white: '#FFF',
	textPlaceHolderColor: '#6B6B6B',
	black: '#000',
	sidBlueColor: '#4BD0BD',
	sidOrangeColor: '#FE947E',
	sidCheckboxBorderColor: '#4BD0BD',
	sidCheckboxCheckedBorderColor: '#C3E2E3',
	sidCheckboxBackgroundColor: 'rgba(75,208,109,0.34)',
	sidCheckboxCheckedBackgroundColor: 'rgba(195, 226, 227, 1)',
	sidBlueDarkenColor: '#58215E',
	sidActiveBarColor: 'rgba(255, 255, 255, 1)',
	sidPassiveBarColor: 'rgba(255, 163, 141, 1)',
	errorBorderColor: '#FF0000',
	errorTextColor: '#FF0000',
	sidMessageTimeReadColor: 'rgba(101, 202, 160, 1)',
	sidMessageTimeUnReadColor: 'rgba(147, 147, 147, 1)',
	sidMessageDetailBackGroundColor: '#EDEDEE',
};
const fonts = {
	Black: 'NunitoSans-Black',
	Bold: 'NunitoSans-Bold',
	Italic: 'NunitoSans-Italic',
	Light: 'NunitoSans-Light',
	Regular: 'NunitoSans-Regular',
	SemiBold: 'NunitoSans-SemiBold',
};
export {padding, colors, fonts};
