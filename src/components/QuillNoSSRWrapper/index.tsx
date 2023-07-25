/* eslint-disable react/jsx-props-no-spreading */
import dynamic from 'next/dynamic';

import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    function Quill({ forwardedRef, ...props }: ForwardedQuillComponent) {
      return <QuillComponent ref={forwardedRef} {...props} />;
    }
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false }
);

export default QuillNoSSRWrapper;
