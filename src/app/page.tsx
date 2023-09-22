'use client';

import { FormEvent, useState } from 'react';

export default function Home() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formValue),
    // });
    // const { msg } = await res.json();
  };
  const getApi = async () => {
    // const data = await fetch('/api/contact');
  };

  return (
    <div>
      <button type="button" onClick={getApi}>
        ddd
      </button>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              placeholder="joon hyuk"
              value={formValue.name}
              onChange={(e) => {
                setFormValue({ ...formValue, name: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <input
              value={formValue.email}
              onChange={(e) => {
                setFormValue({ ...formValue, email: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <input
              value={formValue.message}
              onChange={(e) => {
                setFormValue({ ...formValue, message: e.target.value });
              }}
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
