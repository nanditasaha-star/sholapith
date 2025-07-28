// components/Layout.tsx
import React, { ReactNode } from 'react';
import { Poppins } from 'next/font/google'
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import styles from '../styles/layout.module.css';

const poppins = Poppins({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
})

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={poppins.className}>
      <Header />
      <div className="lg:mt-[60px] md:mt-[50px] mt-[40px]">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;