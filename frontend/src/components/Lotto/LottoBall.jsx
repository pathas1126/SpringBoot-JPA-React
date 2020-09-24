/**@jsx jsx */
import {jsx, css} from '@emotion/core';

const setStyle = (isBonus, color) => {
	let topGradient = '#fff';
	let bottomGradient = '#dedede';

	if (color) {
		bottomGradient = color;
	}

	if (isBonus) {
		bottomGradient = '#fed348';
	}
	return css`
		width: 2rem;
		height: 2rem;
		border-radius: 100%;
		background: linear-gradient(${topGradient}, ${bottomGradient});
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0.25rem 0.3rem rgba(59, 43, 91, 0.7);
		span {
			color: #00334e;
			font-size: 1rem;
			font-weight: 700;
		}
		& + div {
			margin-left: 0.3rem;
		}
	`;
};

const LottoBall = ({number, isBonus, color}) => {
	return (
		<div css={setStyle(isBonus, color)}>
			<span>{number}</span>
		</div>
	);
};

export default LottoBall;
