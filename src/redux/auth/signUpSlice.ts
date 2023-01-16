import {User} from '@/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type SignUpFormType = {
	isConfirmed: boolean;
} & Partial<User>;

const initialState: SignUpFormType = {
	name: '',
	email: '',
	phone: '',
	isConfirmed: false,
};

const signUpSlice = createSlice({
	name: 'userSignUp',
	initialState,
	reducers: {
		setSingUpValues: (state, action: PayloadAction<SignUpFormType>) => {
			return {
				name: action.payload.name,
				email: action.payload.email,
				phone: action.payload.phone,
				isConfirmed: action.payload.isConfirmed,
			};
		},
	},
});
export const {setSingUpValues} = signUpSlice.actions;
export default signUpSlice.reducer;
