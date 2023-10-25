import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import { CarContextProvider } from '@/context/CarContext';

const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: '400' });

export const metadata: Metadata = {
  title: 'Tabela Fipe - Busca',
  description: 'Consulte o valor de um veículo de forma gratuita'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}>
        <CarContextProvider>{children}</CarContextProvider>
      </body>
    </html>
  );
}
