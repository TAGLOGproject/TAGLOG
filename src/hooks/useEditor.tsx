import { useState } from 'react';

export default function useEditor() {
  const [contents, setContents] = useState<string>('');

  const handleChange = ({ text }: { text: string }) => {
    setContents(text);
  };

  return { contents, setContents, handleChange };
}
