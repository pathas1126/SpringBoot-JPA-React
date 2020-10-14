/**@jsx jsx */
import {css, jsx} from '@emotion/core';
import {LottoRandomGames} from '../../components/Lotto';

const homeBody = css`
	margin-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const HomeBody = () => {
	return (
		<div css={homeBody}>
			<LottoRandomGames />
		</div>
	);
};

export default HomeBody;
