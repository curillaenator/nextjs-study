import cn from 'classnames';
import { Inter, Geist_Mono } from 'next/font/google';

import './globals.scss';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.variable, geistMono.variable)}>{children}</body>
    </html>
  );
}
