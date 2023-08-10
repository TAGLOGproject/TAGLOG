/* eslint-disable import/no-mutable-exports */
/* eslint-disable-next-line prefer-const */

'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import ThemeProvider from '@/components/ThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';

// persistStore(store)함수를 사용 >
// redux store의 상태를 스토리지(로컬/세션)에 지속성 있게 저장 및 관리하도록 하는 객체
export const persistor = persistStore(store);

// PersistGate 컴포넌트를 사용 >
// 애플리케이션이 초기화될 때 스토리지(로컬/세션)에서 유지되는(저장된)값을 다시금 redux에 저장할 때까지 app의 UI 렌더링을 지연
// loading: 로딩 과정에서 보여줄 컴포넌트
//  persistor: persistStore 함수를 통해 생성된 지속성 객체를 전달
export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
