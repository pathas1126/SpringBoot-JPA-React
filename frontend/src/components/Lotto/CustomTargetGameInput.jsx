/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useForm} from 'react-hook-form';

const CustomTargetGameInput = () => {
	const {handleSubmit, register} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<section>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<input ref={register} />
				<input ref={register} />
				<input ref={register} />
				<input ref={register} />
				<input ref={register} />
				<input ref={register} />
				<input ref={register} />
			</form>
		</section>
	);
};

export default CustomTargetGameInput;
