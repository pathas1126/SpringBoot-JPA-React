/**@jsx jsx */
import {Fragment} from 'react';
import {css, jsx} from '@emotion/core';
import {useForm} from 'react-hook-form';
import {plus} from './LottoGame';
import Button from '../Button';
import {AiOutlineEnter} from 'react-icons/all';
import {methodEnum} from '../../lib/apiConstant';
import {request} from '../../lib/request';

const customTargetGameInputStyle = css`
	width: 95%;
`;

const formStyle = css`
	margin: 0.5rem 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	input {
		border-radius: 100%;
		border: none;
		outline: none;
		padding: 0.6rem;
		width: 1rem;
		height: 1rem;
		box-shadow: 0.1rem 0.13rem 0.13rem rgba(59, 43, 91, 0.7);
		& + input {
			margin-left: 0.2rem;
		}
	}
`;

const enterWrapper = css`
	margin-left: 0.6rem;
`;

const errorWrapper = css`
	width: 100%;
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	color: #fdfd96;
`;

const customTargetNumberNames = [
	'first',
	'second',
	'third',
	'fourth',
	'fifth',
	'sixth',
	'bonus',
];

const CustomTargetGameInput = () => {
	const {
		handleSubmit,
		register,
		reset,
		clearErrors,
		setValue,
		getValues,
		errors,
		setError,
	} = useForm();

	const onSubmit = async (data) => {
		const numbers = Object.values(data).map((numberString) =>
			Number(numberString),
		);
		const result = await request({
			url: '/lotto/game/custom',
			method: methodEnum.POST.value,
			data: {customGame: numbers},
		});

		console.log(result);

		if (!errors.number) reset();
	};
	const onChange = (event) => {
		const {value, name} = event.target;
		const regexPattern = /[^0-9]/g;
		const stringByNumber = value.replace(regexPattern, ''); // 입력값에서 숫자가 아닌 문자는 빈 문자열로 대체

		// 3자리가 넘어가면 2자리까지만 값으로 설정
		const isUnderTwoLength = stringByNumber.length <= 2;
		if (!isUnderTwoLength) {
			return setValue(name, stringByNumber.substr(0, 2));
		}

		// 45가 넘어가면 에러 설정
		const isOver45 = Number(stringByNumber) > 45;
		if (isOver45)
			return setError('number', {
				message: "Numbers Can't be Over 45",
			});

		// 중복값이 있는 경우 에러 설정
		const currentNumbers = Object.values(getValues());
		const isOverlapped =
			currentNumbers.filter((currentNumber) => {
				if (currentNumber) return currentNumber === stringByNumber;
			}).length > 1;
		if (isOverlapped)
			return setError('number', {
				message: 'Verify whether your number is Unique',
			});

		setValue(name, stringByNumber);
		clearErrors();
	};
	return (
		<section css={customTargetGameInputStyle}>
			<form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
				{customTargetNumberNames.map((numberName, index) => {
					if (index < 6)
						return (
							<input
								name={numberName}
								ref={register({
									required: true,
								})}
								onChange={onChange}
								key={numberName}
							/>
						);
					return (
						<Fragment key={numberName}>
							<span css={plus}>+</span>
							<input
								name={numberName}
								ref={register({
									required: true,
								})}
								onChange={onChange}
							/>
							<div css={enterWrapper}>
								<Button color='secondary' type='submit'>
									<AiOutlineEnter size={22} fontWeight={3} />
								</Button>
							</div>
						</Fragment>
					);
				})}
			</form>

			{errors.number && (
				<div css={errorWrapper}>
					<span>{errors.number.message}</span>
				</div>
			)}
		</section>
	);
};

export default CustomTargetGameInput;
