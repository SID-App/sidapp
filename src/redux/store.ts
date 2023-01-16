import {configureStore} from '@reduxjs/toolkit';
import signUpSlice from './auth/signUpSlice';
import dummySlice from './dummy/dummySlice';
const store = configureStore({
	reducer: {
		signUpSlice,
		dummySlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
