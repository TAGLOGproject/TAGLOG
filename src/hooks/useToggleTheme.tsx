import { useAppDispatch, useAppSelector } from '@/store/redux';
import { toggleTheme } from '@/store/redux/slice/themeSlice';
import { useEffect } from 'react';

const useToggleTheme = () => {
  // useAppSelector 훅을 사용 >
  // 구조 분해 할당 사용 >
  // redux store에서 theme값 추출
  const { theme } = useAppSelector((state) => state.themeState);
  // useAppDispatch()함수를 사용해서 dispatch()함수 가져옴
  const dispatch = useAppDispatch();

  // dispatch()함수를 사용 >
  // toggleTheme() 액션 생성자 함수를 사용해서 액션 객체를 반환 >
  // 액션 객체를  redux store에 전달
  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useToggleTheme;
