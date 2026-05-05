import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATLAcord',
  description: 'The largest Discord community for fans of Avatar: The Last Airbender — events, discussions, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}