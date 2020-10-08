/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import {LastWinningGame} from '../../components/Lotto';
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

const LastWinningGameWrapper = css`
	padding-bottom: 0.5rem;
	margin-bottom: 1rem;
	border-bottom: 3px dashed #16213e;
`;

const timerWrapper = css`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeHeader = () => {
	return (
		<header css={header}>
			<article css={LastWinningGameWrapper}>
				<LastWinningGame />
			</article>
			<article css={title}>
				<span>Pick Your Lucky Numbers!</span>
			</article>
			<article css={timerWrapper}>
				<Timer />
			</article>
		</header>
	);
};

export default HomeHeader;
