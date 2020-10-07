import {createLine} from '../../lib/lotto';
import {request} from '../../lib/request';
import {methodEnum, statusEnum, WINNING_LINE_URL} from '../../lib/apiConstant';

export const lotto = {
	state: {
		lastWinningGame: [],
		myGames: [],
		error: '',
	},
	reducers: {
		setMyGames(state, lottoGames) {
			state.myGames = lottoGames;
			return state;
		},
		changeGame(state, index) {
			state.myGames.splice(index, 1, createLine());
			return state;
		},
		setLastWinningGame(state, lastWinningGame) {
			state.lastWinningGame = lastWinningGame;
			return state;
		},
		setError(state, errorMessage) {
			state.error = errorMessage;
			return state;
		},
	},
	effects: (dispatch) => ({
		async setLastWinningGameAsync(payload, rootState) {
			const response = await request({
				url: WINNING_LINE_URL,
				method: methodEnum.GET.value,
			});

			const {status} = response;

			if (status === statusEnum.SUCCESS.value) {
				const {winningGame} = response.result;
				return dispatch.lotto.setLastWinningGame(winningGame);
			} else {
				const {message} = response;
				dispatch.lotto.setError(message);
				return console.warn(
					']===LastWinningNumbers Data Fetching Error===[',
				);
			}
		},
	}),
};
