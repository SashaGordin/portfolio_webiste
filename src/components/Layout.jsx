import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen" style={{display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: '1', backgroundColor: '#0a192f' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;