import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './slice/themeSlice';

// 지속(psersist)할 설정값(configuration) 설정하기
const persistConfig = {
  key: 'root', // 설정 키
  storage, // 저장할 스토리지 (기본값: 로컬스토리지)
  whitelist: ['themeState'], // 저장할 reducer
};

// combineReducers({})함수를 사용 >
// redux store에 있는 다양한 reducer들을 합쳐서 하나의 객체로 반환
const rootReducer = combineReducers({
  themeState: themeReducer,
});

// persistReducer(config, reducer)함수를 사용 >
// config 객체와 rootReducer를 인자로 받아서 >
// config 객체에 설정을 확인 >
// 작성된 stoaga에 whitelist에 작성된 reducer만 선택적으로 storage에 저장
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore({reducer,middleware,devTools})함수를 사용 >
// redux store생성 및 다양한 설정
export const store = configureStore({
  reducer: persistedReducer, // 루트 리듀서
  middleware: (
    getDefaultMiddleware // 미들웨어 설정
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production', // 개발환경에서 Redux DevTools(개발자 도구)와 연동
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
