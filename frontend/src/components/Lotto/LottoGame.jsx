/**@jsx jsx */
import {Fragment} from 'react';
import {css, jsx, keyframes} from '@emotion/core';
import {LottoBall} from './';

export const popup = keyframes`
 from {
 	transform: translateY(2rem);
 	opacity: 0;
 } 
 to {
 transform: translateY(0);
 opacity: 1;
 }
`;

const setLineStyle = () => css`
	width: 100%;
	background: #fefefe;
	padding: 0.4rem 0.6rem;
	border-radius: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	animation: ${popup} 0.7s ease;
	& + & {
		margin-top: 1rem;
	}
`;

const plus = css`
	display: inline-block;
	padding-bottom: 0.4rem;
	line-height: 1rem;
	font-weight: 600;
	font-size: 1.5rem;
	margin: 0 0.5rem;
`;

const defineBallColor = (number) => {
	let color = '';
	switch (true) {
		case number < 10:
			color = '#E0F39E';
			break;
		case number < 20:
			color = '#FA7E6E';
			break;
		case number < 30:
			color = '#90529E';
			break;
		case number < 40:
			color = '#6E8394';
			break;
		case number <= 45:
			color = '#B8E63A';
			break;
		default:
			color = '#E2DBE3';
	}
	return color;
};

const LottoGame = ({game}) => {
	return (
		<div css={setLineStyle()}>
			{game.length > 0 &&
				game.map((number, index) => {
					const userLottoGameLength = 6;
					if (index < userLottoGameLength)
						return (
							<LottoBall
								number={number}
								key={index}
								color={defineBallColor([String(number)])}
							/>
						);
					return (
						<Fragment key={index}>
							<span css={plus}>+</span>
							<LottoBall number={number} isBonus={true} />
						</Fragment>
					);
				})}
		</div>
	);
};

export default LottoGame;
