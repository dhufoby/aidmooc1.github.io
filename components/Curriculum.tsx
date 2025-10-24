import React, { useState } from 'react';
import AccordionItem from './AccordionItem.tsx';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const curriculumData = [
  {
    title: '1주차: 웹 개발의 첫걸음',
    content: 'HTML5 시맨틱 태그, CSS3 선택자와 레이아웃(Flexbox, Grid), JavaScript 기본 문법과 DOM 조작의 기초를 학습합니다.',
  },
  {
    title: '2주차: 인터랙티브 웹 만들기',
    content: 'JavaScript 이벤트 처리, 비동기 통신(Fetch API), 그리고 ES6+의 모던 문법을 깊이 있게 다루며 동적인 웹 페이지를 만듭니다.',
  },
  {
    title: '3주차: React 시작하기',
    content: 'React의 핵심 개념(Components, Props, State)을 이해하고, JSX와 가상 DOM의 원리를 학습하여 컴포넌트 기반 개발을 시작합니다.',
  },
  {
    title: '4주차: React 심화와 상태 관리',
    content: 'React Hooks(useState, useEffect, useContext)를 마스터하고, Redux 또는 Zustand를 이용한 전역 상태 관리 기법을 배웁니다.',
  },
  {
    title: '5-6주차: 실전 프로젝트 - 나만의 포트폴리오 사이트 제작',
    content: '지금까지 배운 모든 기술을 총동원하여 기획부터 배포까지, 자신만의 개성이 담긴 포트폴리오 웹사이트를 완성합니다.',
  },
];

const Curriculum: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            체계적인 커리큘럼
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {curriculumData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Curriculum;