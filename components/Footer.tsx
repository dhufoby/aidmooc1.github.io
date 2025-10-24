
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} CourseHub. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          최고의 온라인 강의와 함께 당신의 성장을 응원합니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
