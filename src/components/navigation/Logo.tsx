
import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 mr-2 bg-gradient-krx rounded-md">
        <span className="text-white font-bold">K</span>
      </div>
      <span className="font-semibold text-lg hidden sm:block">KRX Community</span>
    </a>
  );
};

export default Logo;
