import {createLine, parseNumbers} from '../../lib/lotto';
import {request} from '../../lib/request';
import {methodEnum, statusEnum, WINNING_LINE_URL} from '../../lib/apiConstant';

export const lotto = {
	state: {
		winningLine: [],
		myLotto: [],
	},
	reducers: {
		setMyLotto(state, payload) {
			state.myLotto = payload;
			return state;
		},
		changeLine(state, index) {
			state.myLotto.splice(index, 1, createLine());
			return state;
		},
		setWinningLine(state, winningLine) {
			state.winningLine = winningLine;
			return state;
		},
	},
	effects: (dispatch) => ({
		async setWinningLineAsync(payload, rootState) {
			const response = await request({
				url: WINNING_LINE_URL,
				method: methodEnum.GET.value,
			});

			const {status} = response;

			if (status === statusEnum.SUCCESS.value) {
				const {winningNumbers} = response.result;

				return dispatch.lotto.setWinningLine(
					parseNumbers(winningNumbers),
				);
			} else {
				return console.warn(']===WinningLine Data Fetching Error===[');
			}
		},
	}),
};
