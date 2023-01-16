import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type DummyUserType = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
};

const initialState: DummyUserType = {
	id: 0,
	username: '',
	email: '',
	firstName: '',
	lastName: '',
	gender: '',
	image: '',
	token: '',
};

export const loginUser = createAsyncThunk('loginUser', async (): Promise<DummyUserType> => {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			username: 'kminchelle',
			password: '0lelplR',
		}),
	});
	return await res.json();
});
const dummySlice = createSlice({
	name: 'userSignin',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loginUser.fulfilled, (state, action) => {
			return {
				...state,
				...action.payload,
				email: action.payload.email,
			};
		});
	},
});
export default dummySlice.reducer;
