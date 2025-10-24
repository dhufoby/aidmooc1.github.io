
import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            강사 소개
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src="https://picsum.photos/240/240"
                alt="강사 프로필 이미지"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">김민준 (John Doe)</h3>
              <p className="text-[#4A90E2] font-semibold mb-4">
                10년차 시니어 프론트엔드 개발자
              </p>
              <p className="text-gray-600 leading-relaxed">
                실리콘밸리 N사, 국내 K사 등에서 다양한 글로벌 프로젝트를 이끌었습니다.
                복잡한 문제를 단순하게 풀어내는 설명과 실무 중심의 노하우로
                수강생 여러분의 성장을 돕겠습니다.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Instructor;
