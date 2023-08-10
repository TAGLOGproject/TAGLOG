// /* eslint-disable import/no-mutable-exports */
// /* eslint-disable-next-line prefer-const */

// 'use client';

// import { ReactNode } from 'react';
// import { Provider } from 'react-redux';

// import ThemeProvider from '@/components/ThemeProvider';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
// import { store } from './store';

// export const persistor = persistStore(store);

// export function Providers({ children }: { children: ReactNode }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <ThemeProvider>{children}</ThemeProvider>
//       </PersistGate>
//     </Provider>
//   );
// }
