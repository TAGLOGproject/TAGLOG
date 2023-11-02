const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', JSON.stringify(token));
};

const getAccessToken = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return token;
  }
  return null;
};

export { setAccessToken, getAccessToken };
