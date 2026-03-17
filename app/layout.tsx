import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PopCourt MVP',
  description: 'Mobile-first courtroom drama for pop culture disputes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
