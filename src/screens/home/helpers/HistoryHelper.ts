import {HistoryDataType} from '../types/HistoryTypes';

export class HistoryHelper {
	static getHistory = (history: HistoryDataType[]): HistoryDataType[] => {
		return history.sort((a, b) => Number(b.active) - Number(a.active));
	};
}
