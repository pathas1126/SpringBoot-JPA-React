import Enum from 'enum';

// API 베이스
export const BASE_URL = '/api';

// API 요청 메서드 ENUM
export const methodEnum = new Enum(
	{GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE'},
	{freeze: true},
);

export const statusEnum = new Enum(
	{SUCCESS: 'SUCCESS', FAIL: 'FAIL'},
	{freeze: true},
);

// 로또 관련 API 상수
export const WINNING_LINE_URL = '/lotto/numbers/winning';
