import { configureStore } from '@reduxjs/toolkit';
// root reducer를 import
import themeReducer from './slice/themeSlice';

// configureStore()함수를 사용해서 store 생성
// root reducer를 지정하고 (리듀서들을 결합)
// (미들웨어 설정을 커스터마이징)
// (데브툴)
export const store = configureStore({
  reducer: {
    themeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
