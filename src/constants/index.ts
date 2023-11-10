// responsible layout constants
export const DESKTOP_WIDTH = 1280;
export const TABLET_WIDTH = 768;
export const MOBILE_WIDTH = 360;

export const SIDEBAR_MENUS = ['POST', 'ABOUT', 'ETC'];

// 라우팅
export const ROUTES = [
  { path: '/', name: 'HOME' },
  { path: '/editor', name: 'EDITOR' },
];

export const MOCK_USER_DATA_1 = {
  name: 'Joonhyuk',
  subtitle: 'Frontend Developer',
  contents: '디테일’의 가치를 아는 Front-End 개발자 이준혁입니다.',
  avatar: '/src/assets/image/avatar.jpeg',
  sns: [
    {
      type: 'github',
      uri: 'https://github.com/anshqhsh',
    },
    {
      type: 'linkedin',
      uri: 'https://www.linkedin.com/in/ian-joon',
    },
    { type: 'mail', uri: 'anshqhsh.dev@gmail.com' },
  ],
};
export const MOCK_USER_DATA_2 = {
  name: 'Dasol',
  subtitle: 'Frontend Developer',
  contents: '내일’이 더 기대되는 Front-End 개발자 정다솔입니다',
  avatar: '/src/assets/image/avatar.jpeg',
  sns: [
    {
      type: 'github',
      uri: 'https://github.com/ssori0421',
    },
    { type: 'mail', uri: 'ssori0421@gmail.com' },
  ],
};
