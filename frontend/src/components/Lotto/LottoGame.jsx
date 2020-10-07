/**@jsx jsx */
import {Fragment, useEffect, useState} from 'react';
import {css, jsx, keyframes} from '@emotion/core';
import {LottoBall} from './';
import {useSelector} from 'react-redux';
import {createColorMap} from '../../lib/lotto';

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

const LottoGame = ({game}) => {
	const [colorMap, setColorMap] = useState({});
	const {lastWinningGame} = useSelector((state) => state.lotto);

	useEffect(() => {
		setColorMap(createColorMap(lastWinningGame));
	}, [lastWinningGame]);

	return (
		<div css={setLineStyle()}>
			{game.length > 0 &&
				game.map((number, index) => {
					if (index < 6)
						return (
							<LottoBall
								number={number}
								key={index}
								color={colorMap[String(number)]}
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
