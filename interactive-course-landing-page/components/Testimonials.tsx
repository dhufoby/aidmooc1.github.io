
import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const testimonialsData = [
  {
    quote: '비전공자라 막막했는데, 이 강의 덕분에 개발에 대한 자신감을 얻었어요. 커리큘럼이 정말 체계적이에요!',
    name: '박서연',
    title: 'UI/UX 디자이너',
  },
  {
    quote: '실무에서 바로 써먹을 수 있는 팁들이 많아서 좋았습니다. 강사님의 코드 리뷰가 특히 도움이 많이 됐어요.',
    name: '이준호',
    title: '주니어 개발자',
  },
  {
    quote: '여러 강의를 들어봤지만, 이렇게 쉽고 재미있게 알려주는 강의는 처음입니다. 강력 추천합니다!',
    name: '최지우',
    title: '대학생',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            수강생들의 생생한 후기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#4A90E2]">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
