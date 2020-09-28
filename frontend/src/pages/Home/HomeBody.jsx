/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useDispatch, useSelector} from 'react-redux';
import {LottoLine} from '../../components/Lotto';
import Button from '../../components/Button';
import {MdRefresh} from 'react-icons/md';
import {popup} from '../../components/Lotto/LottoLine';

const homeBody = css`
	margin-top: 4rem;
`;

const lineWrapper = css`
	display: flex;
	& + & {
		margin-top: 10px;
	}
`;

const refreshWrapper = css`
	width: 100%;
	height: 100%;
	margin-left: 5px;
	animation: ${popup} 0.7s ease;
	position: relative;
`;

const iconStyle = css`
	margin-top: 4px;
	margin-right: 1px;
	transition: ease-in 0.1s;
	&:active {
		transform: rotate(90deg);
	}
`;

const HomeBody = () => {
	const myLotto = useSelector((state) => state.lotto.myLotto);
	const changeLine = (index) => dispatch.lotto.changeLine(index);
	const dispatch = useDispatch();

	return (
		<div css={homeBody}>
			{myLotto.length > 0 &&
				myLotto.map((line, index) => (
					<div key={index} css={lineWrapper}>
						<LottoLine line={line} />
						<div css={refreshWrapper}>
							<Button
								shape='circle'
								onClick={() => changeLine(index)}
							>
								<MdRefresh css={iconStyle} size={24} />
							</Button>
						</div>
					</div>
				))}
		</div>
	);
};

export default HomeBody;
