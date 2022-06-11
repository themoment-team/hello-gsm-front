import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getAccessToken = (): string => cookies.get('accessToken');

export const getRefreshToken = (): string => cookies.get('refreshToken');
