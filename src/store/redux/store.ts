// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import themeReducer from './slice/themeSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['themeState'],
// };

// const rootReducer = combineReducers({
//   themeState: themeReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
