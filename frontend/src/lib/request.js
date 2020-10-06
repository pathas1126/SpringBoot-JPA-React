import axios from 'axios';
import {BASE_URL} from './apiConstant';

export const request = async ({url, method, data}) => {
	const requestUrl = `${BASE_URL}${url}`;

	console.log(url, method);
	const response = await axios({url: requestUrl, method, data});

	return response.data;
};
