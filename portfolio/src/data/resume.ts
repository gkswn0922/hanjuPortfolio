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
  badges?: string[]
  myRole?: string[]
  summary: string[]
  techStack: string[]
  links?: Array<{ label: string; url: string }>
  gallery?: Array<{ src: string; alt: string }>
}

export const profile = {
  name: '조한주',
  headline: '문제가 생기면 원인을 끝까지 찾아 해결하고, 같은 문제가 반복되지 않게 만드는 풀스택 개발자',
  emails: ['hanju.dev97@gmail.com', 'whgkswn0922@naver.com'],
  phone: '010-8757-6482',
  birth: '97.09.22',
  location: '서울 동작구',
  github: 'https://github.com/gkswn0922',
} as const

export const about: string[] = [
  '서비스 운영 중 문제가 생기면 일단 복구만 하고 끝내지 않고, 로그와 지표로 원인을 찾은 뒤 같은 문제가 다시 생기지 않도록 구조를 개선해왔습니다.',
  'DB 연결이 끊기고 재시도가 계속 쌓이면서 장애가 커지는 경우처럼 빠르게 번질 수 있는 문제는, 로그로 원인을 확인해 우선 응급 조치를 하고 이후 코드를 고쳐 근본적으로 해결했습니다.',
  '데이터가 많아 조회가 느려지는 문제는 느린 쿼리와 배포 전후 로그로 원인을 찾고, 조회 방식을 다시 설계해 대기 시간과 고객 문의를 줄였습니다.',
  '외부 서비스 연동이나 배치 작업은 "미리 검증하고 → 처리 상태를 기록하고 → 실패하면 원인을 추적해 다시 처리할 수 있게" 만드는 것을 우선으로 설계합니다.',
  '보안은 문제가 생긴 뒤에 대응하는 게 아니라 처음부터 갖추는 것이라고 생각합니다. API 키나 비밀 값은 코드에 직접 넣지 않고 환경별로 분리해 관리했고, 웹훅은 서명을 검증하고 관리자 화면은 권한(Role)에 따라 접근을 제한했습니다.',
]

export const skillGroups: SkillGroup[] = [
  {
    label: '백엔드',
    items: ['Java', 'Spring Boot (WebFlux)', 'PHP (Laravel)'],
  },
  {
    label: '프론트엔드',
    items: ['JavaScript', 'TypeScript', 'Vue.js', 'React'],
  },
  {
    label: 'DB',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    label: '인프라',
    items: ['AWS', 'Oracle Cloud', 'Docker', 'k8s'],
  },
  {
    label: '협업/AI 도구',
    items: ['MCP (Figma, MySQL 연동)', 'Notion'],
  },
  {
    label: '기타',
    items: ['WordPress', 'Android (Kotlin)', 'Firebase'],
  },
]

export const experiences: Experience[] = [
  {
    company: '(주) 제머나이소프트',
    role: 'Laravel 풀스택 개발자',
    duration: '2022.04 ~ 2025.03 (2년 11개월)',
    summary: [
      '서비스 운영 중 생기는 성능, 외부 연동, 데이터 정합성 문제를 끝까지 원인을 찾아 해결하고 재발 방지까지 담당',
      '데이터가 많아 느려지는 조회는 느린 쿼리와 배포 전후 로그로 원인을 확인하고 조회 방식을 개선',
      '외부 플랫폼 연동은 실패해도 원인을 추적해 다시 처리할 수 있는 구조로 만들어 운영 위험을 줄임',
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
  {
    company: '(주)온어스링크잇',
    role: '대리 · 풀스택 개발자',
    duration: '2026.02 ~ 현재 (7개월차)',
    summary: [
      '콜센터 지원팀용 백오피스, 기사 배차 앱 "온어스라이더", 할리데이비슨 견인 접수페이지 등 3개 서비스의 풀스택 개발 담당',
      '기사 위치를 실시간으로 파악하지 못해 배차가 늦어지던 문제를, FCM 백그라운드 위치 수집 + GraphQL 전송 + Redis 쿨타임 설계로 해결',
      '기능 검증/QA는 팀 단위로 진행하되 구현과 테스트의 대부분(약 95%)을 담당, 위치 기반 서비스 인허가 심사 등 대외 업무는 PM과 분담',
    ],
    techStack: ['Spring', 'Node.js', 'React', 'GraphQL', 'MySQL', 'AWS(ECS/Amplify/RDS)'],
  },
]

export const projects: Project[] = [
  {
    name: '온어스라이더',
    period: '2026.02 ~ 현재',
    description: '정비·출동 서비스가 필요한 고객과 기사를 연결하는 배차 웹앱',
    myRole: [
      '문제: 사고·정비 현장과 가까운 기사가 어디 있는지 알 수 없어 배차가 늦어짐',
      '해결: 기사 앱이 꺼져 있어도(백그라운드 상태) FCM 푸시로 앱을 깨운 뒤 위치 정보를 GraphQL로 전송하도록 구현하고, Redis로 "1분에 한 번"이라는 규칙을 둬서 푸시가 너무 자주 가지 않도록 제한',
      '검증: 사내 인원에게 테스트 앱을 배포해 실제로 이동하면서 위치가 잘 전달되는지 확인하고, 암호화해 저장한 좌표(latitude/longitude)가 카카오맵 마커로 정상 표시되는 것까지 확인',
    ],
    summary: [
      '위치 데이터 흐름(FCM으로 깨우기 → GraphQL 전송 → Redis로 빈도 제어)을 설계해 배차 지연 문제를 구조적으로 해결',
      '검증/QA는 팀 단위로 진행, 구현과 테스트의 대부분(약 95%)을 담당하고 위치 기반 서비스 인허가 심사 등 대외 업무는 PM과 분담',
    ],
    techStack: ['Spring', 'Node.js', 'React', 'GraphQL', 'FCM', 'Redis', 'MySQL', 'AWS'],
    gallery: [
      { src: '/projects/onus-rider/onus-rider-1.jpg', alt: '출동업체 실시간 위치 지도' },
    ],
  },
  {
    name: '할리데이비슨 접수페이지',
    period: '2026.02 ~ 현재',
    description: '할리데이비슨 공식 서비스센터의 긴급 견인 요청을 콜센터 상담사가 접수·처리하는 전용 접수페이지',
    summary: [
      '할리데이비슨 고객이 사고·고장으로 전화 접수를 하면, 상담사가 화면에서 차량 정보·사고 위치·요청 유형을 등록하고 견인 배차로 바로 연계',
      '할리데이비슨 브랜드 가이드에 맞춘 화면 디자인과 접수 → 배차 요청 → 처리 현황 조회로 이어지는 콜센터 내부 처리 흐름을 구현',
      '접수 데이터는 온어스라이더 배차 시스템과 연동되어 상담사가 따로 다시 입력하지 않아도 기사에게 바로 전달되도록 구성',
    ],
    techStack: ['React', 'Spring', 'Node.js', 'MySQL', 'AWS'],
    gallery: [
      { src: '/projects/harley/harley-1.png', alt: '인보이스(정산) 관리 화면' },
      { src: '/projects/harley/harley-2.png', alt: '출동서비스 관리 목록 화면' },
      { src: '/projects/harley/harley-3.png', alt: '출동서비스 상세 화면' },
    ],
  },
  {
    name: '스파르타 MSA 프로젝트',
    period: '2026.06',
    badges: ['개인', 'Backend'],
    description: '스파르타코딩클럽 MSA 과정에서 진행한 개인 프로젝트 - Gateway·User·Product·Order 4개 서비스로 나눈 이커머스 백엔드',
    summary: [
      '장바구니, 쿠폰, 주문, 결제, 상품, 회원 기능을 서비스별로 분리하고 Redis 분산 락으로 재고 동시성 문제를 제어',
      'Spring Cloud Gateway에서 인증(JWT) 필터를 공통으로 처리하고, 각 서비스는 PostgreSQL을 사용하며 Docker Compose로 함께 실행',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/sparta-msa-project-final' }],
  },
  {
    name: 'Cocos',
    period: '2022.04 ~ 2025.03',
    description: '대형 미디어 고객사(CJ ENM) 대상 영상 관리 및 유통 웹 서비스',
    myRole: [
      '문제: 데이터가 많은 구간에서 특정 API가 느려져 운영 대기와 고객 문의로 이어짐',
      '해결: 테이블 파티션 구조에 맞게 조회 방식을 다시 설계하고, 느린 구간은 Raw Query로 직접 제어해 응답 속도를 줄임',
      '검증: 배포 전/후 로그와 느린 쿼리로 병목과 개선 효과를 확인(30초 이상 → 10초 미만)',
      '문제: 송출 장비(솔박스)가 지원하지 않는 자막 인코딩(예: utf-16le)을 올리면 자막이 깨져 송출 실패나 품질 문제로 이어짐',
      '해결: 자막 업로드 단계에서 인코딩을 자동으로 감지하고, 지원하지 않는 인코딩이면 UTF-8로 변환하도록 만듦',
      '검증: 문제가 됐던 자막 파일로 재현해보고 변환 로직을 적용한 뒤, 정상적으로 업로드되고 자막이 잘 나오는 것을 확인',
    ],
    summary: [
      '대량의 데이터와 외부 연동에서 생기는 실패 위험을 구조 개선과 검증으로 관리한 운영 프로젝트',
      '느려지는 구간은 로그와 느린 쿼리로 찾고, 구조를 바꾼 뒤 실제로 좋아졌는지 확인해서 유지',
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Linux', 'Postman'],
  },
  {
    name: 'RingTalk',
    period: '2025.08',
    description: 'eSIM 알림톡 전달 서비스',
    summary: [
      '문제: DB 연결이 끊긴 채로 재접속 시도가 계속 쌓이면서 장애가 커짐(배치 지연·오류 위험)',
      '원인 확인: pm2 로그로 "끊긴 연결 재시도"가 반복되는 패턴을 확인',
      '응급 조치: 불필요한 연결을 강제로 끊고 max_connections 값을 임시로 늘려서 장애가 더 커지는 것을 막음',
      '재발 방지: 커넥션 풀을 쓰지 않은 게 원인이라고 보고, DB 연결 방식을 코드에서 직접 고침',
      '검증: 테스트 eSIM으로 스케줄을 여러 건 등록한 뒤 약 1시간 모니터링해 이상 징후 없음을 확인',
    ],
    techStack: ['Spring', 'Node.js', 'JavaScript', 'MySQL', 'Oracle Cloud', 'Linux'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/ringtalk' }],
    gallery: [
      { src: '/projects/ringtalk/ringtalk-1.png', alt: 'RingTalk 대시보드' },
      { src: '/projects/ringtalk/ringtalk-2.png', alt: 'RingTalk 일별 매출 현황 모달' },
      { src: '/projects/ringtalk/ringtalk-3.png', alt: 'RingTalk 수동 발송 모달' },
      { src: '/projects/ringtalk/ringtalk-4.png', alt: 'RingTalk 수동 발송 모달' },
      { src: '/projects/ringtalk/ringtalk-5.png', alt: 'RingTalk 수동 발송 모달' },
    ],
  },
  {
    name: 'hiaryAI',
    period: '2025.04 ~ 2025.09',
    description: 'TIL을 위한 에디터 및 블로그 프로젝트',
    summary: [
      '문제: 회원가입·로그인 같은 인증 과정은 한 번만 실패해도 사용자가 바로 이탈하기 때문에, 예외 상황을 얼마나 잘 처리하는지가 품질을 좌우함',
      '해결: 가입, 인증, 로그인, 비밀번호 재설정, 온보딩을 각각 상태별로 나누고, 실패 상황(링크 만료, 권한 없음, 에러 등)도 화면 흐름 안에서 처리하도록 구성',
      '검증: 테스트 계정으로 시나리오를 반복 점검하며 회귀를 줄임',
      '보안: 로그인 여부와 권한에 따라 접근을 제한하는 것을 기본 전제로 데이터 흐름을 구성',
    ],
    techStack: ['Vue 3', 'Vite', 'Firebase(Auth/Firestore)', 'Tiptap'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/hiary-frontend' }],
    gallery: [
      { src: '/projects/hiary/hiary-1.png', alt: 'hiaryAI 화면' },
      { src: '/projects/hiary/hiary-2.png', alt: 'hiaryAI 화면' },
      { src: '/projects/hiary/hiary-3.png', alt: 'hiaryAI 화면' },
      { src: '/projects/hiary/hiary-4.png', alt: 'hiaryAI 화면' },
    ],
  },
  {
    name: 'Portfolio',
    period: '2026.01',
    description: '이력/프로젝트를 카드 기반으로 정리한 개인 포트폴리오 웹',
    summary: [
      '문제: 기술 목록만 나열해서는 실제로 어떤 일을 했는지(설계, 검증, 책임 범위)가 잘 전달되지 않음',
      '해결: 경력과 프로젝트 데이터를 구조화하고 "문제-해결-검증-범위"가 한 화면에서 읽히도록 카드/모달 UI로 구성',
      '검증: 이미지 로딩 실패, 빈 데이터 등 실패 상태를 UI에서 처리해 사용자 경험을 보완',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'vercel'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/hanjuPortfolio' }],
    gallery: [
      { src: '/projects/portfolio/portfolio-1.png', alt: '포트폴리오 메인' },
    ],
  },
]

export const closingLine =
  '문제를 해결하는 데서 끝내지 않고, 구조와 검증으로 같은 문제가 다시 생기지 않게 만드는 개발자'
