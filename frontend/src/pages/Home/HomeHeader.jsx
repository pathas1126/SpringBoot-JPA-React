/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import Button from '../../components/Button';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LottoGame} from '../../components/Lotto';
import Timer from '../../components/Timer';

const header = css`
	width: 80%;
	height: 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const title = css`
	font-weight: 600;
	font-size: 2rem;
	color: #ffd300;
	text-shadow: 3px 3px 0 #1565c0, 5px 5px 0 #42a5f5;
`;

const buttonWrapper = css`
	margin-top: 1.5rem;
	width: 20%;
`;

const lastWinningNumbersWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5rem;
	padding-bottom: 0.5rem;
	border-bottom: 3px dashed #16213e;
	& > span {
		width: 100%;
		display: inline-block;
		word-break: keep-all;
		margin-right: 1rem;
		font-weight: 600;
	}
`;

const timerWrapper = css`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeHeader = () => {
	const [isClicked, setIsClicked] = useState(false);
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

	const createSetOnClick = useCallback(() => {
		if (!isClicked) setIsClicked(true);
		dispatch.lotto.setLottoGamesAsync();
	}, [isClicked, dispatch.lotto]);

	return (
		<header css={header}>
			<article css={title}>
				<span>Pick Your Lucky Numbers!</span>
			</article>
			<article css={buttonWrapper}>
				<Button size='full' onClick={createSetOnClick}>
					{!isClicked && <span>Pick One Set</span>}
					{isClicked && <span>Once More?</span>}
				</Button>
			</article>
			<article css={timerWrapper}>
				<Timer />
			</article>
			<article css={lastWinningNumbersWrapper}>
				<span>Last Winner: </span>
				{lastWinningGame.length > 0 && (
					<LottoGame game={lastWinningGame} />
				)}
				{lastWinningGameAsyncLoading && <span>Loading...</span>}
				{lastWinningGameAsyncError && (
					<span>{lastWinningGameAsyncError}</span>
				)}
			</article>
		</header>
	);
};

export default HomeHeader;
