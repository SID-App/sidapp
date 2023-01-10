import {User} from '@/types';
import {createSlice} from '@reduxjs/toolkit';

export type SignUpFormType = {
	isconfirmed: boolean;
} & Partial<User>;

const initialState: SignUpFormType = {
	name: '',
	email: '',
	phone: '',
	isconfirmed: false,
};

const signUpSlice = createSlice({
	name: 'userSignUp',
	initialState,
	reducers: {},
});
export default signUpSlice.reducer;
