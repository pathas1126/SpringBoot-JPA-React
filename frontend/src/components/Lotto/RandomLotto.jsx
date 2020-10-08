/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useDispatch, useSelector} from 'react-redux';
import {LottoGame} from '../../components/Lotto';
import Button from '../../components/Button';
import {MdRefresh} from 'react-icons/md';
import {popup} from '../../components/Lotto/LottoGame';
import Loader from '../../components/Loader';
import {useCallback, useState} from 'react';

const homeBody = css`
	margin-top: 3rem;
`;

const lineWrapper = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
	& + & {
		margin-top: 10px;
	}
`;

const refreshWrapper = css`
	width: 100%;
	height: 100%;
	margin-left: 5px;
	animation: ${popup} 0.7s ease;
	position: relative;
`;

const iconStyle = css`
	margin-top: 4px;
	margin-right: 1px;
	transition: ease-in 0.1s;
	&:active {
		transform: rotate(90deg);
	}
`;

const buttonWrapper = css`
	margin-bottom: 1.5rem;
	width: 100%;
	min-width: 10rem;
`;

const RandomLotto = () => {
	const {
		lottoGames,
		changeGameAsyncError,
		lottoGamesAsyncError,
	} = useSelector((state) => state.lotto);
	const [isClicked, setIsClicked] = useState(false);

	const dispatch = useDispatch();

	const changeGameAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.changeGameAsync,
	);
	const lottoGamesAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.setLottoGamesAsync,
	);

	const changeGame = (index) => dispatch.lotto.changeGameAsync(index);

	const createSetOnClick = useCallback(() => {
		if (!isClicked) setIsClicked(true);
		dispatch.lotto.setLottoGamesAsync();
	}, [isClicked, dispatch.lotto]);

	return (
		<div css={homeBody}>
			<article css={buttonWrapper}>
				<Button size='full' onClick={createSetOnClick}>
					{!isClicked && <span>Pick One Set</span>}
					{isClicked && <span>Once More?</span>}
				</Button>
			</article>
			{lottoGames.length > 0 &&
				lottoGames.map((game, index) => (
					<div key={index} css={lineWrapper}>
						<LottoGame game={game} />
						<div css={refreshWrapper}>
							<Button
								shape='circle'
								onClick={() => changeGame(index)}
							>
								<MdRefresh css={iconStyle} size={24} />
							</Button>
						</div>
					</div>
				))}
			{(changeGameAsyncLoading || lottoGamesAsyncLoading) && <Loader />}
			{changeGameAsyncError && <span>{changeGameAsyncError}</span>}
			{lottoGamesAsyncError && <span>{lottoGamesAsyncError}</span>}
		</div>
	);
};

export default RandomLotto;
