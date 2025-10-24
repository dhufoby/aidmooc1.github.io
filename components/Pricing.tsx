import React from 'react';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden text-center p-8 md:p-12 border-t-8 border-[#4A90E2]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              프론트엔드 전문가 되기
            </h2>
            <p className="text-gray-600 mb-8">
              지금 시작하여 여러분의 커리어를 한 단계 업그레이드 하세요.
            </p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">₩499,000</span>
              <span className="text-xl text-gray-500">/ 평생소장</span>
            </div>
            <ul className="text-left space-y-3 text-gray-700 mb-10">
              <li className="flex items-center"><CheckIcon /> 전체 강의 영상 무제한 접근</li>
              <li className="flex items-center"><CheckIcon /> 실전 프로젝트 소스코드 제공</li>
              <li className="flex items-center"><CheckIcon /> 1:1 코드 리뷰 및 Q&A</li>
              <li className="flex items-center"><CheckIcon /> 수료증 발급</li>
            </ul>
            <a
              href="mailto:support@coursehub.com?subject=수강 신청 문의"
              className="w-full block bg-[#4A90E2] text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-300"
            >
              이메일로 신청하기
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);


export default Pricing;