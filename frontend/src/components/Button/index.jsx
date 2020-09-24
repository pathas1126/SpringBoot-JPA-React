/**@jsx jsx */
import {jsx, css} from '@emotion/core';

const setStyle = (color, size) => {
	let height = '';
	let width = '';

	let background = '';

	switch (color) {
		case 'primary':
			background = '#008CBA';
			break;
		case 'secondary':
			background = '#f44336';
			break;
		default:
			break;
	}

	switch (size) {
		case 'small':
			width = '2rem';
			height = '1rem';
			break;
		case 'normal':
			width = '4rem';
			height = '2rem';
			break;
		case 'big':
			width = '8rem';
			height = '4rem';
			break;
		case 'full':
			width = '100%';
			height = '100%';
			break;
		default:
			break;
	}
	return css`
		width: ${width};
		height: ${height};
		padding: 0.5rem;
		background: ${background};
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.3rem;
		box-shadow: 0 0.25rem 0.3rem rgba(59, 43, 91, 0.7);
		&:hover {
			cursor: pointer;
		}
		&:active {
			transform: scale(0.99);
		}
		span {
			color: #fff;
			font-weight: 600;
		}
	`;
};

const Button = ({color = 'primary', size = 'normal', children, onClick}) => {
	return (
		<div css={setStyle(color, size)} onClick={onClick}>
			<span>{children}</span>
		</div>
	);
};

export default Button;
