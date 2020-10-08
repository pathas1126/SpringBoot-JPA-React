/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useDispatch, useSelector} from 'react-redux';
import {LottoGame} from '../../components/Lotto';
import Button from '../../components/Button';
import {MdRefresh} from 'react-icons/md';
import {popup} from '../../components/Lotto/LottoGame';
import Loader from '../../components/Loader';

const homeBody = css`
	margin-top: 4rem;
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

const HomeBody = () => {
	const {
		lottoGames,
		changeGameAsyncError,
		lottoGamesAsyncError,
	} = useSelector((state) => state.lotto);
	const dispatch = useDispatch();

	const changeGameAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.changeGameAsync,
	);
	const lottoGamesAsyncLoading = useSelector(
		(state) => state.loading.effects.lotto.setLottoGamesAsync,
	);

	const changeGame = (index) => dispatch.lotto.changeGameAsync(index);

	return (
		<div css={homeBody}>
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

export default HomeBody;
