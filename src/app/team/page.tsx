import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Founders from '@/components/team/Founders';
import Footer from '@/components/common/Footer';
 
export const metadata: Metadata = {
  title: 'Meet The Team | ATLACord',
  description: 'We would not exist without our incredible moderation and events teams. Learn more about them!',
};
 
export default function Team() {
  return (
    <>
      <Navbar />
      <main>
        <Founders />
      </main>
      <Footer />
    </>
  );
}