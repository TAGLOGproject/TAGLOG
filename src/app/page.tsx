'use client';

import { FormEvent, useState } from 'react';
import Card from '@/components/Card';
import { instance } from '@/service/axios';

export default function Home() {
  const getList = async () => {
    const data = await instance.get('post-list');
    console.log(data);
  };
  return (
    <div>
      <Card />
      <button
        type="button"
        onClick={async () => {
          const data = await instance.get('contact');
          console.log(data);
        }}
      >
        api
      </button>
      <button type="button" onClick={getList}>
        getList
      </button>
    </div>
  );
}
