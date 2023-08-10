/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

// initialState의 type 지정
type ThemeState = {
  theme: 'light' | 'dark';
};

// initialState 생성
const initialState: ThemeState = {
  // TODO: 사용자 브라우저 디폴트 값 지정
  theme: 'light',
};

// createSlice({name,initialState,reducers})함수를 사용해서 themeSlice에 저장
// 리듀서, 액션 생성자 함수 및 액션 타입을 간결하게 정의
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // 리듀서 - 액션 객체를 받아서 현재 상태를 받아서 새로운 상태를 반환
  reducers: {
    // 액션 생성자 함수 - 액션 객체를 반환 {key : value}
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
