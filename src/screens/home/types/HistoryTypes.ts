export type message = {
	id?: any;
	message?: any;
	station?: any;
};
export type HistoryDataType = {
	id: number;
	name: string;
	active: boolean;
	avatar: string;
	message?: string;
	isOnline?: boolean;
	time?: string;
	newMessage?: any;
	isRead?: boolean;
	haveMessage?: number;
	messages?: any[];
};
