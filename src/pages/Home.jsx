import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constans";

const Home = () => {
  const [timelineKey, setTimelineKey] = useState(0); // 타임라인 렌더링 상태
  const [isVisible, setIsVisible] = useState(false); // 타임라인 섹션 가시 상태

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline-section");
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        // 화면에 50% 이상 보이면 렌더링 갱신
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
          if (!isVisible) {
            setIsVisible(true);
            setTimelineKey((prevKey) => prevKey + 1); // key 갱신
          }
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, [isVisible]);

  return (
    <div className="max-container">
      <section className="py-16">
        <h3 className="subhead-text">입사 후 포부</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            입사 후, 저는 회사의 비전과 목표에 부합하는 지속적인 기술 혁신에 기여하고자 합니다.
            특히, 최신 기술 트렌드를 꾸준히 학습하고 이를 실무에 적용하여 효율적이고 창의적인
            솔루션을 제시할 것입니다. 제가 이전 직장에서 쌓은 협업과 문제 해결 능력을 바탕으로,
            팀 내에서 원활한 커뮤니케이션을 통해 프로젝트를 성공적으로 이끌어 나가겠습니다.
          </p>
        </div>

        {/* 타임라인 */}
        <div id="timeline-section" className="mt-12 flex">
          <VerticalTimeline
            key={timelineKey} // key를 상태값으로 설정
            className="before:bg-timeline-line"
          >
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  backgroundColor: "#fafafa",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default Home;
