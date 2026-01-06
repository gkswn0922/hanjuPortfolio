export type SkillGroup = {
  label: string
  items: string[]
}

export type Experience = {
  company: string
  role: string
  duration: string
  summary: string[]
  techStack: string[]
  link?: string
}

export type Project = {
  name: string
  period: string
  description: string
  myRole?: string[]
  summary: string[]
  techStack: string[]
  links?: Array<{ label: string; url: string }>
  gallery?: Array<{ src: string; alt: string }>
}

export const profile = {
  name: '조한주',
  headline: '배치 시스템 개발과 운영 경험을 보유한 풀스택 개발자',
  emails: ['whgkswn0922@naver.com', 'gkswn970922@gmail.com'],
  phone: '010-8757-6482',
  birth: '97.09.22',
  location: '서울 동작구',
  github: 'https://github.com/gkswn0922',
} as const

export const about: string[] = [
  '3년차 풀스택 개발자로, 실서비스 운영 환경에서의 장애 대응과 성능 개선 경험을 바탕으로 안정적인 시스템을 구축해왔습니다.',
  'DB 커넥션 이슈, 메모리 사용 문제, 대규모 데이터 처리로 인한 API 성능 저하 등을 분석하고, 쿼리 최적화와 구조 개선을 통해 운영 리스크를 줄이는 역할을 수행했습니다.',
  '또한 해외 플랫폼에 영상 스케줄을 등록 및 송출하기 위한 CSV 기반 배치 시스템을 Laravel 라이브러리로 설계·구현하여, 다수 영상의 메타데이터 가공, 스케줄 상태 관리, 처리 결과 추적이 가능하도록 시스템화한 경험이 있습니다.',
  '이를 통해 반복적인 수작업을 자동화하고, 대량 데이터 처리의 안정성과 관리 효율을 개선했습니다.',
  'Laravel 기반의 실무 경험을 통해 빠른 개발과 운영을 경험했으며, 현재는 해당 경험을 토대로 Spring 기반 풀스택 구조 설계 역량을 확장하며 유지보수성과 확장성을 고려한 아키텍처 설계에 집중하고 있습니다.',
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    items: ['Laravel(실무 2년 11개월)', 'Spring Boot', 'Node.js'],
  },
  {
    label: 'Frontend',
    items: ['Vue.js', 'React', 'JavaScript (ES6+)'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    label: 'Infra',
    items: ['AWS', 'Linux', 'Oracle Cloud'],
  },
  {
    label: '기타',
    items: ['Git / GitHub', 'Firebase'],
  },
]

export const experiences: Experience[] = [
  {
    company: '(주) 제머나이소프트',
    role: 'Laravel 풀스택 개발자',
    duration: '2022.04 ~ 2025.03 (2년 11개월)',
    summary: [
      'Laravel 기반 실서비스의 풀스택 개발 및 운영 담당',
      '대규모 데이터 기반 API의 병목 구간을 분석하여 성능 개선',
      '장애 대응 및 성능 개선 경험을 문서화하여 팀 내 공유',
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Linux'],
  },
  {
    company: 'JoyLabs',
    role: '프론트엔드 개발자',
    duration: '2025.04 ~ 2025.09 (4개월)',
    summary: ['Vue.js / React 기반 웹 페이지 개발 및 백엔드 API 연동'],
    techStack: ['TypeScript', 'Vue.js', 'Tiptap', 'Firebase', 'AWS'],
    link: '',
  },
]

export const projects: Project[] = [
  {
    name: 'Cocos',
    period: '2022.04 ~ 2025.03',
    description: '대형 미디어 고객사(CJ ENM) 대상 영상 관리 및 유통 웹 서비스',
    myRole: [
      '플랫폼 연계 기능 구현을 위한 외부 API 스펙 분석 및 연동 구조 설계',
      'CSV 기반 배치로 해외 방송 플랫폼에 편성표/영상 메타데이터/자막을 API 호출로 업로드하는 자동화 기능 구현',
      '대규모 데이터 기반 API 병목 구간 분석 및 쿼리 튜닝',
      '개선 결과를 지표로 정리하고 재발 방지 관점으로 운영 대응',
    ],
    summary: [
      '응답 시간 30초 이상 소요되던 API 성능 이슈 분석',
      'ORM 쿼리 및 시간 복잡도 점검을 통해 병목 구간 식별',
      '1억 건 규모 테이블 파티션 구조 분석 후 Raw Query 적용 → API 응답 시간 30초 → 10초 미만으로 단축 (약 67% 개선)',
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Jenkins', 'Linux'],
  },
  {
    name: 'RingTalk',
    period: '2022.04 ~ 2025.03',
    description: 'eSIM 알림톡 전달 서비스 (Oracle Cloud VM 운영)',
    summary: [
      '실서비스 웹 애플리케이션 개발 및 유지보수',
      '운영 중 발생한 DB 커넥션 및 메모리 이슈를 분석하고 장애 재발 방지 구조로 개선',
      'DB 서버 설정(max_connections, timeout) 조정',
      '애플리케이션 레벨 커넥션 재연결 로직 구현',
      '반복되던 장애를 VM 메모리 모니터링 기반으로 장기 안정화',
    ],
    techStack: ['Spring', 'Node.js', 'JavaScript', 'MySQL', 'Oracle Cloud'],
    gallery: [
      { src: '/projects/ringtalk/ringtalk-1.png', alt: 'RingTalk 대시보드' },
      { src: '/projects/ringtalk/ringtalk-2.png', alt: 'RingTalk 일별 매출 현황 모달' },
      { src: '/projects/ringtalk/ringtalk-3.png', alt: 'RingTalk 수동 발송 모달' },
      { src: '/projects/ringtalk/ringtalk-4.png', alt: 'RingTalk 수동 발송 모달' },
    ],
  },
  {
    name: 'hiaryAI',
    period: '2025.04 ~ 2025.09',
    description: 'TIL을 위한 에디터 및 블로그 프로젝트',
    summary: [
      '해당 프로젝트의 클로즈베타까지 참여',
      '이메일 회원가입/인증, 로그인, 비밀번호 재설정(인증 링크 처리), Google 로그인 등 인증/계정 플로우 구현',
      '회원가입 이후 온보딩 및 추가정보 수집 화면 구현',
      'TIL 및 대시보드 모듈 구조화',
      'Tiptap 기반 에디터 구현',
    ],
    techStack: ['Vue 3', 'Vite', 'Firebase(Auth/Firestore)', 'Tiptap'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/hiary-frontend' }],
    gallery: [
      { src: '/projects/hiary/hiary-1.png', alt: 'hiaryAI 화면' },
      { src: '/projects/hiary/hiary-2.png', alt: 'hiaryAI 화면' },
      { src: '/projects/hiary/hiary-3.png', alt: 'hiaryAI 화면' },
    ],
  },
  {
    name: 'Portfolio',
    period: '2026.01',
    description: '이력/프로젝트를 카드 기반으로 정리한 개인 포트폴리오 웹',
    summary: [
      '프로젝트/경력 데이터를 구조화하고 UI 컴포넌트로 재사용 가능하게 구성',
      '프로젝트 카드에 “간단 설명 + 요약 + (선택)갤러리 모달”까지 한 화면에서 확인 가능하도록 설계',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    gallery: [
      { src: '/projects/portfolio/portfolio-1.png', alt: '포트폴리오 메인' },
    ],
  },
]

export const closingLine =
  '운영 환경에서의 장애 대응과 성능 개선 경험을 바탕으로 안정적이고 확장 가능한 풀스택 시스템을 설계하는 개발자'







