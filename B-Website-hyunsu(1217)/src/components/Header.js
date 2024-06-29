import React from 'react';
import './Header.css'; // CSS 파일을 임포트합니다.

const headerStyle = {
  backgroundImage: 'url(/assets/images/Header.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh', // 필요한 경우 높이를 조정하세요
};

const Header = ({ children }) => {
  return (
    <div id="header" style={headerStyle}>
      {children}
    </div>
  );
};

export default Header;
