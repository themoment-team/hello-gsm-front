import user from 'Api/user';

export const ssrMiddleware = async () => {
  try {
    await user.getMyInfo();
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
      },
    };
  }
};
