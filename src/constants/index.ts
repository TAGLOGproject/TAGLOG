// responsible layout constants
const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 360;

const SIDEBAR_MENUS = ['POST', 'ABOUT', 'ETC'];

// 라우팅
const ROUTES = [
  { path: '/', name: 'HOME' },
  { path: '/cardView', name: 'CARDVIEW' },
  { path: '/calculator', name: 'POST' },
  { path: '/about', name: 'ABOUT' },
  { path: '/editor', name: 'EDITOR' },
  // 임시
  { path: '/calculator', name: 'Calculator' },
];

export { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH, ROUTES };
