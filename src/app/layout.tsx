import Provider from '@/components/Provider';
import '../styles/global.scss';
import Layout from '@/components/Layout';
import ToastProvider from '@/components/ToastProvider';

export const metadata = {
  title: 'TAGLOG',
  openGraph: {
    title: 'TAGLOG',
    description: '태그를 활용한 프론트 개발자들의 기술 블로그',
  },
  description: '태그를 활용한 프론트 개발자들의 기술 블로그',
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
