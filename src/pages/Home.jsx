import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model_ani from '../components/Model_ani';
import { skills, experiences } from '../constans';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const Home = () => {
  return (
    // <div className="bg-[#f7f7f7] min-h-screen">
    <div className="max-container">
      {/* 상단 섹션 */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div style={{ flex: 1.5 }}>
          <h1 className="head-text mt-20">
            안녕하세요!
            <br />
            <span className="blue-gradient_text font-semibold drop-shadow">서혜인</span>입니다.
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>지속적으로 성장하고 배움을 즐거워하는 저는, 이런 기술들을 가지고 있습니다.</p>
          </div>
          <div className="py-10 flex flex-col">
            <h3 className="subhead-text">My Skills</h3>
            <div className="mt-16 flex flex-wrap gap-12">
              {skills.map((skill, index) => (
                <div key={index} className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                    <p className="text-xs z-10">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Canvas) */}
        <div style={{ flex: 0.5 }} className="mt-20">
          <Canvas
            camera={{ position: [3, 0, 15], fov: 8 }}
            style={{
              width: '100%',
              height: '500px',
            }}
          >
            <ambientLight intensity={2.5} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.8} />
            <Model_ani position={[0.025, -0.9, 0]} />
            <OrbitControls />
          </Canvas>
        </div>
      </section>

      {/* 입사 후 포부 섹션 */}
      <section className="py-16">
        <h3 className="subhead-text">입사 후 포부</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            입사 후, 저는 회사의 비전과 목표에 부합하는 지속적인 기술 혁신에 기여하고자 합니다.
            특히, 최신 기술 트렌드를 꾸준히 학습하고 이를 실무에 적용하여 효율적이고 창의적인
            솔루션을 제시할 것입니다. 제가 이전 직장에서 쌓은 협업과 문제 해결 능력을 바탕으로,
            팀 내에서 원활한 커뮤니케이션을 통해 프로젝트를 성공적으로 이끌어 나가겠습니다.
            자기계발을 즐기며, 새로운 지식을 습득하고 기술적 역량을 확장하는 것을 중요시합니다.
            이러한 태도를 바탕으로, 새로운 도전 과제와 기술적 발전을 통해 개인적인 성장을 이룰
            뿐만 아니라, 회사의 발전에도 기여할 것입니다. 매일매일 진화하는 개발자로서의
            성과를 통해 회사와 함께 성장하며, 실질적인 가치를 창출하는 데 최선을 다하겠습니다.
          </p>
        </div>

        {/* 타임라인 */}
        <div className="mt-12 flex">
          <VerticalTimeline className="before:bg-timeline-line" >
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
                  backgroundColor: '#fafafa', 
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
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

      {/* CTA */}
      <hr className="border-slate-300" />
      <CTA />
    </div>
    // </div>
  );
};

export default Home;
