'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function ToastProvider() {
  // 2초 후에 알림이 사라지게 함
  return <ToastContainer autoClose={2000} />;
}

export default ToastProvider;
