import React from 'react';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            왜 이 강의를 들어야 할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            본 강의는 웹 개발의 핵심인 HTML, CSS, JavaScript의 기초를 탄탄히 다지고,
            최신 프레임워크인 React를 활용한 실전 프로젝트까지 경험할 수 있도록 설계되었습니다.
            단순한 이론 학습을 넘어, 현업에서 마주할 문제들을 해결하는 능력을 기를 수 있습니다.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Introduction;