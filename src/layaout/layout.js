import React from 'react';
import  Nav  from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export function Layout  ({ children })  {
  return (
    <>
      
      <Sidebar />
      <main>
        {children}
      </main>
      <Footer>
        {/* Contenido del pie de página */}
      </Footer>
    </>
  );
};

export default Layout;
