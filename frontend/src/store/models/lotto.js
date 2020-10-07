import {request} from '../../lib/request';
import {
	methodEnum,
	RANDOM_GAME_URL,
	statusEnum,
	WINNING_GAME_URL,
} from '../../lib/apiConstant';

export const lotto = {
	state: {
		lastWinningGame: [],
		lastWinningGameAsyncError: '',
		changeGameAsyncError: '',
		myGames: [],
	},
	reducers: {
		setMyGames(state, lottoGames) {
			state.myGames = lottoGames;
			return state;
		},
		changeGame(state, {newGame, index}) {
			state.myGames.splice(index, 1, newGame);
			return state;
		},
		setLastWinningGame(state, lastWinningGame) {
			state.lastWinningGame = lastWinningGame;
			return state;
		},
		setLastWinningGameAsyncError(state, errorMessage) {
			state.lastWinningGameAsyncError = errorMessage;
			return state;
		},
		setChangeGameAsyncError(state, errorMessage) {
			state.changeGameAsyncError = errorMessage;
			return state;
		},
	},
	effects: (dispatch) => ({
		async setLastWinningGameAsync(payload, rootState) {
			const response = await request({
				url: WINNING_GAME_URL,
				method: methodEnum.GET.value,
			});

			const {status} = response;

			if (status === statusEnum.SUCCESS.value) {
				const {winningGame} = response.result;
				return dispatch.lotto.setLastWinningGame(winningGame);
			} else {
				const {message} = response;
				dispatch.lotto.setLastWinningGameAsyncError(message);
				return console.warn(
					']===LastWinningGame Data Fetching Error===[',
				);
			}
		},
		async changeGameAsync(index, rootState) {
			const response = await request({
				url: RANDOM_GAME_URL,
				method: methodEnum.GET.value,
			});

			const {status} = response;

			if (status === statusEnum.SUCCESS.value) {
				const {randomGame} = response.result;
				return dispatch.lotto.changeGame({newGame: randomGame, index});
			} else {
				const {message} = response;
				dispatch.lotto.setChangeGameAsyncError(message);
				return console.warn(']===RandomGame Data Fetching Error===[');
			}
		},
	}),
};
