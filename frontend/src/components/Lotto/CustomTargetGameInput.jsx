/**@jsx jsx */
import {Fragment} from 'react';
import {jsx, css} from '@emotion/core';
import {useForm} from 'react-hook-form';
import {plus} from './LottoGame';
import Button from '../Button';
import {AiOutlineEnter} from 'react-icons/all';

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
		setError,
		errors,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		if (!errors.number) reset();
	};
	const onChange = (event) => {
		const {value, name} = event.target;
		const regexPattern = /^[1-9]{1,2}$/g;
		const isPassed = regexPattern.test(value) && value.length <= 2;
		console.log(isPassed, name, value);
		if (!isPassed) {
			return setError('number', {message: `Check ${name} Number`});
		}
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
			{errors.number?.message}
		</section>
	);
};

export default CustomTargetGameInput;
