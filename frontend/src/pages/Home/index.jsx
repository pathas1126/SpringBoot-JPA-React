/** @jsx jsx */
import {jsx, css} from '@emotion/core';

const global = css`
	background: red;
`;

export default () => {
	return <div css={global}>Home</div>;
};
