import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getAccessToken = () => cookies.get('accessToken');

export const getRefreshToken = () => cookies.get('refreshToken');
