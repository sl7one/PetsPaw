import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
   title: 'Breed ID',
   description: 'Breeds page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={jost.className}>
            {children}
         </body>
      </html>
   );
}
