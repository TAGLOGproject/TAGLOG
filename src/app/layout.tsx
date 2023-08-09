import '../styles/global.scss';
import 'react-quill/dist/quill.snow.css';
import Layout from '@/components/Layout';
import { Providers } from '@/store/redux/Provider';

export const metadata = {
  title: 'TAGLOG',
  description: '태그를 활용한 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
