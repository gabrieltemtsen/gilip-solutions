import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
export default Layout;
