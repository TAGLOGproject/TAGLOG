import Header from '@/components/Header';
import '../styles/global.scss';
import 'react-quill/dist/quill.snow.css';

export const metadata = {
  title: 'TAGLOG',
  description: '태그를 활용한 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
