import Navbar from '@/components/Navbar/Navbar';

export const metadata = {
  title: 'Priyanshi Rana',
  description: 'Resume website of Priyanshi Rana',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
