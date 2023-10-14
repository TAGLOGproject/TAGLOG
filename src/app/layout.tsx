import Provider from '@/components/Provider';
import '../styles/global.scss';
import Layout from '@/components/Layout';
import ToastProvider from '@/components/ToastProvider/ToastProvider';

export const metadata = {
  title: 'TAGLOG',
  description: '태그를 활용한 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ToastProvider />
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
