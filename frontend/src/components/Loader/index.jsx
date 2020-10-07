/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useEffect, useState} from 'react';

const loaderWrapper = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const loaderFont = css`
	font-size: 1.7rem;
	color: #fff;
`;

const Loader = () => {
	const [dots, setDots] = useState('..');

	useEffect(() => {
		const timer = setInterval(() => {
			setDots((prevDots) => {
				const max = 5;
				if (prevDots.length === max) return '..';
				return prevDots + '.';
			});
		}, 200);

		return () => clearInterval(timer);
	}, []);

	return (
		<article css={loaderWrapper}>
			<span css={loaderFont}>Loading{dots}</span>
		</article>
	);
};

export default Loader;
