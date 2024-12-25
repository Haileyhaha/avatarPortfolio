import {  excel, dental,sqld , develop, highschool, university} from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    notion,
    react,
    redux,
    sass,
    mysql,
    vscode,
    spring,
    intellij,
    jpa,
    tailwindcss,
    threads,
    typescript,
    qr,
    utube,
    linux,
    eclipse,
    seoulhwa,
    java,
   
} from "../assets/icons";
  

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: jpa,
        name: "JPA",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: vscode,
        name: "VScode",
        type: "Develop Tools",
    },
    {
        imageUrl: intellij,
        name: "IntelliJ",
        type: "Develop Tools",
    },
    {
        imageUrl: eclipse,
        name: "Eclipse",
        type: "Develop Tools",
    }
];

export const experiences = [
    {
        title: "프로젝트기반 웹&앱(자바,스프링,리액트,노코드) SW개발자 양성과정",
        company_name: "그린아카데미",
        icon: develop,
        iconBg: "#accbe1",
        date: "2024.06 - 2025.01",
        points: [
            "Spring Boot와 JPA를 활용한 RESTful API 설계, 데이터베이스 설계 및 관리에 중점을 두며 백엔드 개발 역량을 쌓아왔습니다.",
            "React와의 연동을 통해 클라이언트-서버 간 데이터 통신을 구현하며 통합적인 웹 개발 능력을 키워가고 있습니다.",
        ],
    },
    {
        title: "SQLD 자격증 취득",
        company_name: "한국데이터산업진흥원",
        icon: sqld,
        iconBg: "#fbc3bc",
        date: "2024.12",
        points: [
        ],
    },
    {
        title: "호주 치과 근무",
        company_name: "Pinho Dental",
        icon: dental,
        iconBg: "#b7e4c7",
        date: "2023.08 - 2024.03",
        points: [
            "Dental Asistant",
        ],
    },
    {
        title: "초림 G7 치과 의원",
        company_name: "치과위생사",
        icon: dental,
        iconBg: "#a2d2ff", 
        date: "2018.03 - 2023.05",
        points: [],
    },
    {
        title: "치과 보험 청구사 3급",
        company_name: "대한치과건강보험청구사협회",
        icon: dental,
        iconBg: "#ffcb77", 
        date: "2022.02",
        points: [],
    },
    {
        title: "W7 치과 의원",
        company_name: "치과위생사",
        icon: dental,
        iconBg: "#90e0ef", 
        date: "2016.06 - 2017.10",
        points: [],
    },
    {
        title: "치과 위생사 면허 취득",
        company_name: "한국보건의료인국가시험원",
        icon: dental,
        iconBg: "#f4a261", 
        date: "2016.01",
        points: [],
    },
    {
        title: "컴퓨터 활용능력 2급",
        company_name: "대한상공회의소",
        icon: excel,
        iconBg: "#a8dadc", 
        date: "2013.09",
        points: [],
    },
    {
        title: "을지 대학교",
        company_name: "치위생학과",
        icon: university,
        iconBg: "#cdb4db", 
        date: "2011.03 - 2016.02",
        points: [],
    },
    {
        title: "한솔 고등학교",
        company_name: "",
        icon: highschool,
        iconBg: "#ffe5b4", 
        date: "2008.03 - 2011.02",
        points: [],
    },
    
];

export const projects = [
    {
        iconUrl: seoulhwa,
        theme: 'btn-back-green',
        name: 'Seoulhwa',
        description: `"설화(Seoulhwa)”는 한국의 수도 “서울”과 “이야기”를 의미하는 한국어 “화”를 결합한 이름입니다. 
                        설화는 외국인 방문객을 위한 영어 기반 플랫폼으로, 관리 페이지는 한국어로 운영됩니다. `,
        link: 'http://hyeri.wn7.com/',
    },
    {
        iconUrl: utube,
        theme: 'btn-back-red',
        name: 'Seoulhwa 시연 영상',
        description: `제가 구현한 기능의 동작 원리를 효과적으로 설명하기 위해 데모 영상을 준비했습니다.
                    해당 영상을 통해 기능의 구체적인 작동 방식과 결과물을 확인하실 수 있습니다.`,
        link: 'https://www.youtube.com/watch?v=mJcZFmhaSaY',
    },
    {
        iconUrl: notion,
        theme: 'btn-back-blue',
        name: 'Seoulwha Team Notion',
        description: '팀 프로젝트를 진행하며 팀원들과 함께 작업한 노션 페이지입니다. 프로젝트의 진행 상황, 각 팀원의 역할 분담, 일정 관리, 그리고 작업 결과물을 기록한 협업용 자료입니다.',
        link: 'https://married-hoodie-05c.notion.site/TEAM-POSITIVE-1171a9b0ba8680b4987bfe54a5fbcb16?pvs=4',
    },
    {
        iconUrl: notion,
        theme: 'btn-back-pink',
        name: 'Seoulwha 개인 Notion',
        description: '팀 프로젝트에서 제가 담당했던 부분과 구현 과정을 정리한 자료입니다. 프로젝트 진행 중 발생했던 오류들을 해결한 방법과 경험을 기록하여, 유사한 문제를 해결할 때 참고할 수 있도록 구성했습니다.',
        link: 'https://principled-crab-f8e.notion.site/165a127563b7804c95a7fe35dfbdb8c6',
    },
    {
        iconUrl: github,
        theme: 'btn-back-orange',
        name: 'Seoulwha github',
        description: `팀 프로젝트를 진행하며 Git을 활용한 협업과 코드 품질 관리를 경험한 리포지토리입니다. 
        프로젝트 구상, 구현, 피드백 과정을 통해 협업과 개발 프로세스를 익혔습니다.`,
        link: 'https://github.com/Haack3r/seoulQuest',
    },
    {
        iconUrl: notion,
        theme: 'btn-back-yellow',
        name: '학습 정리 Notion',
        description: '프론트엔드와 백엔드 학습 내용을 체계적으로 정리한 개인 학습 자료입니다. 오류 해결 과정과 유용한 코드 스니펫을 기록해 학습 및 프로젝트 참고 자료로 활용하고 있습니다.',
        link: 'https://principled-crab-f8e.notion.site/Develop-159a127563b78076b529d522fa111fd5?pvs=4',
    },
    {
        iconUrl: github,
        theme: 'btn-back-black',
        name: '수학 학습 관련',
        description: '개발에 필요한 수학 개념과 이를 프로그래밍에 적용한 내용을 정리한 리포지토리입니다.',
        link: 'https://github.com/Haileyhaha/mathmatics',
    }
];