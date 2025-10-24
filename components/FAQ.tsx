import React, { useState } from 'react';
import AccordionItem from './AccordionItem.tsx';
import FadeInOnScroll from './FadeInOnScroll.tsx';

const faqData = [
  {
    title: '코딩을 전혀 모르는 비전공자도 수강할 수 있나요?',
    content: '네, 가능합니다. 본 강의는 프로그래밍 기초부터 시작하여 누구나 따라올 수 있도록 구성되었습니다. 열정만 있다면 문제 없습니다!',
  },
  {
    title: '강의 수강에 필요한 컴퓨터 사양이 있나요?',
    content: '특별히 높은 사양은 필요하지 않습니다. 웹 브라우저와 코드 에디터(VS Code 등)를 원활하게 실행할 수 있는 일반적인 사양의 컴퓨터면 충분합니다.',
  },
  {
    title: '강의를 듣다가 모르는 것이 생기면 어떻게 하나요?',
    content: '강의 전용 슬랙 채널을 통해 언제든지 질문하실 수 있습니다. 강사님과 조교들이 빠르게 답변해 드립니다.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            자주 묻는 질문 (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, index) => (
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

export default FAQ;