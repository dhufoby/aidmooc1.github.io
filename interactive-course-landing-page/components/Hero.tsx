
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-in-down">
          [완벽 마스터] 프론트엔드 개발 올인원 패키지
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          기초부터 실전 프로젝트까지, 이 강의 하나로 프론트엔드 전문가가 되어보세요.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-[#4A90E2] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 animate-fade-in-up"
        >
          지금 바로 수강 신청하기
        </a>
      </div>
    </section>
  );
};

export default Hero;
