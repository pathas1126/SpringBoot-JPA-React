/**@jsx jsx */
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {jsx, css, keyframes} from '@emotion/core';
import {LottoBall} from './';
import {useSelector} from 'react-redux';
import {createColorMap} from '../../lib/lotto';

const popup = keyframes`
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

const LottoLine = ({line, isWinner}) => {
	const {winningLine} = useSelector((state) => state.lotto);
	const [colorMap, setColorMap] = useState({});

	useEffect(() => {
		setColorMap(createColorMap(winningLine));
	}, [winningLine]);

	return (
		<div css={setLineStyle()}>
			{line.map((number, index) => {
				if (index < 6)
					return (
						<LottoBall
							number={number}
							key={number}
							color={colorMap[String(number)]}
						/>
					);
				return (
					<Fragment key={number}>
						<span css={plus}>+</span>
						<LottoBall number={number} isBonus={true} />
					</Fragment>
				);
			})}
		</div>
	);
};

export default LottoLine;
