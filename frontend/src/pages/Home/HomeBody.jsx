/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useSelector} from 'react-redux';
import {LottoLine} from '../../components/Lotto';

const homeBody = css`
	margin-top: 4rem;
`;

const HomeBody = () => {
	const myLotto = useSelector((state) => state.lotto.myLotto);

	return (
		<div css={homeBody}>
			{myLotto.length > 0 &&
				myLotto.map((line, index) => (
					<LottoLine line={line} key={index} />
				))}
		</div>
	);
};

export default HomeBody;
