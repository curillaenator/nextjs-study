import cn from 'classnames';
import { Inter, Geist_Mono } from 'next/font/google';

import { Header } from '@/features/header';

import styles from './layout.module.scss';
import './globals.scss';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isAside, setIsAside] = useState<boolean>(false);

  const isAside = true;

  return (
    <html lang='en'>
      <body className={cn(styles.body, inter.variable, geistMono.variable)}>
        <aside
          className={cn(styles.aside, {
            [styles.aside_open]: isAside,
          })}
        ></aside>

        <main className={styles.view}>
          <Header toggleAside={() => false} />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
