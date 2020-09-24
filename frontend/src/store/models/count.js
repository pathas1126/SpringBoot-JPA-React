export const count = {
	state: [0],
	reducers: {
		increment(state, payload) {
			state.push(payload);
			return state;
		},
	},
	effects: (dispatch) => ({
		async incrementAsync(payload, rootState) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			dispatch.count.increment(payload);
		},
	}),
};
