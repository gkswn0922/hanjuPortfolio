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
  headline: '운영 장애를 예측·수습하고, 재발 방지를 구조로 남기는 풀스택 개발자',
  emails: ['whgkswn0922@naver.com', 'gkswn970922@gmail.com'],
  phone: '010-8757-6482',
  birth: '97.09.22',
  location: '서울 동작구',
  github: 'https://github.com/gkswn0922',
} as const

export const about: string[] = [
  '운영 환경에서 문제가 터졌을 때 “그냥 복구”로 끝내지 않고, 로그/지표로 원인을 좁힌 뒤 구조로 재발을 줄이는 방식으로 일해왔습니다.',
  'DB 커넥션 이슈처럼 장애가 확산되기 쉬운 케이스는 원인(끊긴 연결의 반복 재시도/누적)을 로그에서 확인하고, 즉시 조치(불필요 커넥션 정리, max_connections 임시 조정) 후 코드 레벨 개선으로 안정화했습니다.',
  '대규모 데이터 조회 지연은 슬로우쿼리/배포 전후 로그 기반으로 병목을 확인하고, 조회 전략을 재설계해 대기/CS를 줄였습니다.',
  '외부 연동/배치 시스템은 “요청 전 검증 → 처리 상태 기록 → 실패 원인 추적/재처리” 관점으로 운영 가능성을 먼저 확보하는 설계를 지향합니다.',
  '보안은 사후 대응이 아니라 기본 전제라고 생각합니다. API 키/시크릿은 하드코딩하지 않고 환경 분리로 관리하며, 웹훅 서명 검증과 Role 기반 권한 통제로 관리자 영역의 접근을 제한했습니다.',
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    items: [
      '장애 원인 분석(pm2 로그/운영 로그) → 즉시 조치 → 코드 레벨 재발 방지',
      '외부 연동/배치 실패를 상태/추적/재처리 관점으로 설계',
      '고객 영향도(지연/누락) 관점에서 우선순위 결정 및 운영 대응',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'API 계약(성공/실패) 기반 데이터 흐름 설계',
      '로딩/에러/권한/타임아웃 등 실패 상태까지 포함한 UX 품질 책임',
    ],
  },
  {
    label: 'Database',
    items: [
      '슬로우쿼리/배포 전후 로그로 병목을 찾고 조회 전략으로 성능 개선',
      '파티션/인덱스 고려 및 대규모 데이터 처리 안정성 확보',
    ],
  },
  {
    label: '운영',
    items: [
      '리소스 한계 상황에서 즉시 조치 및 안정화(커넥션/메모리 이슈 대응)',
      '모니터링 기반 검증(테스트 데이터 주입 후 일정 시간 관찰)으로 안정성 확인',
    ],
  },
  {
    label: '보안/품질',
    items: ['API 키/시크릿 하드코딩 방지(환경 분리)', '웹훅 서명 검증', 'Role 기반 권한 통제'],
  },
]

export const experiences: Experience[] = [
  {
    company: '(주) 제머나이소프트',
    role: 'Laravel 풀스택 개발자',
    duration: '2022.04 ~ 2025.03 (2년 11개월)',
    summary: [
      '운영 환경에서 발생하는 성능/연동/정합성 문제를 끝까지 추적해 해결하고 재발 방지까지 책임',
      '대규모 데이터 조회 지연을 슬로우쿼리/배포 전후 로그로 검증하며 조회 전략을 개선',
      '외부 플랫폼 연동은 실패 추적/재처리 가능한 구조로 설계해 운영 리스크를 통제',
    ],
    techStack: ['운영 장애 대응', '성능 개선(병목 분석)', '외부 API 연동/배치 설계', '상태/추적/재처리'],
  },
  {
    company: 'JoyLabs',
    role: '프론트엔드 개발자',
    duration: '2025.04 ~ 2025.09 (4개월)',
    summary: [
      '화면 구현을 넘어 API 계약(성공/실패), 데이터 흐름, 에러/로딩 상태까지 포함해 품질을 개선',
      '관리자 영역은 Role 기반 접근 통제로 권한 경계를 명확히 하고, 권한 오류 케이스에서 사용자 영향 최소화',
    ],
    techStack: ['API 연동 설계', '상태/에러 처리', '권한/보안 고려'],
    link: '',
  },
]

export const projects: Project[] = [
  {
    name: 'Cocos',
    period: '2022.04 ~ 2025.03',
    description: '대형 미디어 고객사(CJ ENM) 대상 영상 관리 및 유통 웹 서비스',
    myRole: [
      '문제: 대규모 데이터 조회 구간에서 특정 API 지연이 발생해 운영 대기 및 CS로 이어짐',
      '설계 결정: 파티션 구조를 고려한 조회 전략으로 재설계하고, 병목 구간은 Raw Query로 제어하여 응답 지연을 줄임',
      '검증: 배포 전/후 로그 및 슬로우쿼리로 병목과 개선 효과를 확인(30초+ → 10초 미만)',
      '문제: 솔박스에서 지원하지 않는 자막 인코딩(예: utf-16le) 업로드 시 자막이 버려져 송출 실패/품질 이슈로 이어짐',
      '설계 결정: COCOS 자막 업로드 단계에서 인코딩을 감지하고, 비지원 charset은 UTF-8로 변환해 업로드 파이프라인의 입력을 표준화',
      '검증: 문제가 되는 자막 파일로 재현 후 변환 로직 적용, 솔박스 업로드 성공 및 자막 정상 노출로 확인',
    ],
    summary: [
      '대규모 데이터/외부 연동에서 실패 리스크를 “구조 + 검증”으로 통제한 운영 프로젝트',
      '병목은 로그/슬로우쿼리로 확인하고, 설계 변경으로 개선 효과를 검증한 뒤 운영 지표로 유지',
    ],
    techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Linux', 'Postman'],
  },
  {
    name: 'RingTalk',
    period: '2025.08',
    description: 'eSIM 알림톡 전달 서비스',
    summary: [
      '문제: DB 커넥션이 끊긴 상태에서 재접속 시도가 누적되며 장애로 확산(배치 지연/오류 위험)',
      '원인 확인: pm2 로그로 “끊긴 연결 재시도”가 반복되는 패턴을 확인',
      '즉시 조치: 불필요한 커넥션 강제 종료 및 max_connections 임시 상향으로 영향 확산을 차단',
      '재발 방지: 커넥션 풀 미사용이 원인이라고 판단해 DB 연결 방식을 코드 레벨로 개선',
      '검증: 테스트 eSIM으로 스케줄 다건 등록 후 약 1시간 모니터링하여 이상 징후 없음 확인',
    ],
    techStack: ['Spring', 'Node.js', 'JavaScript', 'MySQL', 'Oracle Cloud', 'Linux'],
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
      '문제: 인증/계정 플로우는 실패 한 번이 이탈로 이어져, 예외 케이스 설계가 곧 품질',
      '설계 결정: 가입/인증/로그인/재설정/온보딩을 상태 기준으로 분리하고 실패 케이스(만료/권한/에러)를 화면 흐름으로 통제',
      '검증: 테스트 계정으로 시나리오를 반복 점검하며 회귀를 줄임',
      '보안/권한: 인증 상태 및 권한에 따른 접근 제어를 전제로 데이터 흐름을 구성',
    ],
    techStack: ['API 계약/에러 처리', '상태 기반 화면 설계', '권한/보안 고려'],
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
      '문제: “기술 나열”만으로는 실제 역량(설계/검증/책임)이 전달되지 않아, 메시지 중심으로 구조를 재정의',
      '설계 결정: 프로젝트/경력 데이터를 구조화하고 “문제-결정-검증-범위”가 한 화면에서 읽히도록 카드/모달 UI로 구성',
      '검증: 이미지 로딩 실패/빈 데이터 등 실패 상태를 UI에서 처리해 사용자 경험을 보완',
    ],
    techStack: ['데이터 구조화', '컴포넌트 설계', '실패 상태 처리'],
    links: [{ label: 'GitHub', url: 'https://github.com/gkswn0922/hanjuPortfolio' }],
    gallery: [
      { src: '/projects/portfolio/portfolio-1.png', alt: '포트폴리오 메인' },
    ],
  },
  {
    name: 'WGO (작업중)',
    period: '2025.12 ~',
    badges: ['개인', 'Full-Stack'],
    description: '실시간으로 스포츠, SNS, OTT 등의 순위를 한눈에 볼 수 있는 웹 사이트',
    summary: [
      '실시간 데이터는 장애/부하를 먼저 예측해야 운영 비용이 폭증하지 않는다는 관점으로 설계',
      '수집-가공-제공 경계를 나누고, 지연 허용 범위/캐시 정책/실패 시 대체 경로를 먼저 정의',
      'Spring 아키텍처를 분석하고 설계에 집중',
    ],
    techStack: ['React', 'Spring(Java)', 'PostgreSQL', 'Redis', 'AWS', 'docker'],
    gallery: [
      { src: '/projects/wgo/wgo-1.png', alt: 'WGO 화면 1' },
      { src: '/projects/wgo/wgo-2.png', alt: 'WGO 화면 2' },
      { src: '/projects/wgo/wgo-3.png', alt: 'WGO 화면 3' },
    ],
  },
]

export const closingLine =
  '장애를 수습하는 데서 끝내지 않고, 구조·검증·보안으로 재발을 줄이는 개발자'







