/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {LottoGame} from './index';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const lastWinningGameStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > span {
		width: 100%;
		display: inline-block;
		word-break: keep-all;
		margin-right: 1rem;
		font-weight: 600;
	}
`;
const LastWinningGame = () => {
	const {lastWinningGame, lastWinningGameAsyncError} = useSelector(
		(state) => state.lotto,
	);
	const lastWinningGameAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.setLastWinningGameAsync,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch.lotto.setLastWinningGameAsync();
	}, [dispatch.lotto]);

	return (
		<article css={lastWinningGameStyle}>
			<span>Last Winner: </span>
			{lastWinningGame.length > 0 && <LottoGame game={lastWinningGame} />}
			{lastWinningGameAsyncLoading && <span>Loading...</span>}
			{lastWinningGameAsyncError && (
				<span>{lastWinningGameAsyncError}</span>
			)}
		</article>
	);
};

export default LastWinningGame;
