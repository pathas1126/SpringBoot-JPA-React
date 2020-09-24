export const lotto = {
	state: {
		winningLine: [2, 6, 13, 17, 27, 43, 36],
		myLotto: [],
	},
	reducers: {
		assignSet(state, payload) {
			state.myLotto = payload;
			return state;
		},
	},
	effects: (dispatch) => ({
		async assignSetAsync(payload, rootState) {
			setTimeout(() => {
				dispatch.count.assignSet(payload);
			}, 1000);
		},
	}),
};
